import {
	clearTokensFromStorage,
	getAccessTokenFromStorage,
	getRefreshTokenFromStorage,
	saveTokensToStorage,
} from "@/helpers/local.storage.helper"
import { authActions } from "@/store/slices/auth/auth.slice"
import { userActions } from "@/store/slices/user/user.slice"
import { appStore } from "@/store/store"
import { Mutex } from "async-mutex"
import axios from "axios"
import { AuthApi } from "./api-auth/auth-api"
import { errorCatch } from "./config/api-config"
export const getContentType = () => ({
	"Content-Type": "application/json",
	"ngrok-skip-browser-warning": "69420",
})
export const mutex = new Mutex()
export const apiBase = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_BASE_HOST,
	headers: getContentType(),
})
apiBase.interceptors.request.use(async (config) => {
	const accessToken = getAccessTokenFromStorage()
	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}
	return config
})
apiBase.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config
		if (error?.response?.status === 401 && !error.config._isRetry) {
			originalRequest._isRetry = true
			if (!mutex.isLocked()) {
				const release = await mutex.acquire()
				try {
					const refreshToken = getRefreshTokenFromStorage()
					if (refreshToken) {
						const data = await AuthApi.generateNewTokens(refreshToken)
						if (data.accessToken && data.refreshToken) {
							saveTokensToStorage(data)
							// Повторяем оригинальный запрос с обновленным токеном
							originalRequest.headers.Authorization = `Bearer ${data.accessToken}`
							return apiBase.request(originalRequest)
						}
					}
					// Если обновление токенов не удалось или данные не получены, обрабатываем ошибку
					throw new Error(
						"Failed to refresh tokens or tokens data not received"
					)
				} catch (err) {
					// Обрабатываем ошибку обновления токенов или другие ошибки
					appStore.dispatch(userActions.clearUser())
					appStore.dispatch(authActions.logOutUser())
					if (errorCatch(err) === "jwt must be provided") {
						clearTokensFromStorage()
					}
					return Promise.reject(errorCatch(error))
				} finally {
					release()
				}
			} else {
				await mutex.waitForUnlock()
			}
		}
		// Обрабатываем другие ошибки
		return Promise.reject(errorCatch(error))
	}
)

import { UserTokenEnum } from "@/enums/UserTokenEnum"
import { IUserTokens } from "@/interfaces/user.interface"

export const saveTokensToStorage = (tokens: IUserTokens) => {
	localStorage.setItem(`${UserTokenEnum._SV_AC_T_V1}`, tokens.accessToken)
	localStorage.setItem(`${UserTokenEnum._SV_RF_T_V1}`, tokens.refreshToken)
}

export const getAccessTokenFromStorage = () => {
	return localStorage.getItem(`${UserTokenEnum._SV_AC_T_V1}`)
}
export const getRefreshTokenFromStorage = () => {
	return localStorage.getItem(`${UserTokenEnum._SV_RF_T_V1}`)
}
export const clearTokensFromStorage = () => {
	localStorage.removeItem(`${UserTokenEnum._SV_AC_T_V1}`)
	localStorage.removeItem(`${UserTokenEnum._SV_RF_T_V1}`)
}

/**
 *
 * @param name
 * @param value
 */
export const saveItemToStorage = (name: string, value: any) => {
	localStorage.setItem(name, String(value))
}
/**
 *
 * @param name
 */
export const getItemFormStorage = (name: string) => {
	return localStorage.getItem(name)
}

/**
 *
 * @param name
 */
export const removeItemFromStorage = (name: string) => {
	localStorage.removeItem(name)
}

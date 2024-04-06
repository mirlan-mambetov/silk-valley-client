import { UserTokenEnum } from "@/enums/UserTokenEnum"
import { IUserTokens } from "@/interfaces/user.interface"

export const saveTokensToStorage = (tokens: IUserTokens) => {
	localStorage.setItem(`${UserTokenEnum._SV_AC_T_V1}`, tokens.accessToken)
	localStorage.setItem(`${UserTokenEnum._SV_RF_T_V1}`, tokens.refreshToken)

	// localStorage.setItem(
	// 	`${UserTokenEnumExpires._SV_AC_T_V1_EX}`,
	// 	ACCESS_TOKEN_EXPIRES.toString()
	// )
	// localStorage.setItem(
	// 	`${UserTokenEnumExpires._SV_RF_T_V1_EX}`,
	// 	REFRESH_TOKEN_EXPIRES.toString()
	// )
}

export const getAccessTokenFromStorage = () => {
	return localStorage.getItem(`${UserTokenEnum._SV_AC_T_V1}`)
}
export const getRefreshTokenFromStorage = () => {
	return localStorage.getItem(`${UserTokenEnum._SV_RF_T_V1}`)
}
export const clearTokensFromStorage = () => localStorage.clear()

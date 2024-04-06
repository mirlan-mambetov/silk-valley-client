const currentTime = new Date().getTime()

export const ACCESS_TOKEN_EXPIRES = currentTime + 60 * 1000
export const REFRESH_TOKEN_EXPIRES = currentTime + 24 * 60 * 60 * 1000

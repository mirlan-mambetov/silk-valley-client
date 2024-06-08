import { NotifyApi } from "@/api/api-notify/api-notify"
import {
	useMutation,
	UseMutationOptions,
	UseMutationResult,
} from "@tanstack/react-query"

// Интерфейс для мутаций
interface MutationHooks {
	changeNotificationExpire: UseMutationResult<boolean, unknown, number, unknown>
}
const createMutation = <TData, TError, TVariables, TContext>(
	mutationKey: string,
	mutationFn: (variables: TVariables) => Promise<TData>,
	options?: UseMutationOptions<TData, TError, TVariables, TContext>
): UseMutationResult<TData, TError, TVariables, TContext> => {
	return useMutation<TData, TError, TVariables, TContext>({
		mutationKey: [mutationKey],
		mutationFn,
		...options,
	})
}
export const useMutationHooks = (): MutationHooks => {
	/**
	 * CHANGED NOTIFICATION EXPIRE
	 */
	const changeNotificationExpire = createMutation(
		"changeNotifyExpire",
		(id: number) => NotifyApi.changeExpire(id)
	)
	return {
		changeNotificationExpire,
	}
}

// import { useAuth } from '@/hooks/auth/useAuth'
// import { useUser } from '@/hooks/user/useUser'
// import { usePathname, useRouter } from 'next/navigation'
// import React, { FC, PropsWithChildren, useEffect } from 'react'

// export const ProtectedProvider: FC<PropsWithChildren> = () => {
//   const {isAuthentificated} = useAuth()
//   const {user} = useUser()
//   const router = useRouter()
//   const pathName = usePathname()

//   useEffect(() => {
//     if (isAuthentificated && pathName === '') {

//     }
//   }, [isAuthentificated])
//   return (
//     <div>ProtectedProvider</div>
//   )
// }

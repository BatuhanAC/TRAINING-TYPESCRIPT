import { useState } from "react";

type AuthUser = {
  name: string,
  email: string
}

export const User = () => {

  /*
    Burada gelecek olan datanın doğruluğundan eminsek şöyle bir kullanımda olabilir:
    const [user, setUser] = useState<AuthUser>({} as AuthUser)
    ve aşağıda ? olmadan user.name ya da user.email olarak çağrılabilir.
  */
  const [user, setUser] = useState<AuthUser|null>(null)

  const handleLogin = () => {
    setUser({
      name: 'Batuhan',
      email: 'batuhan1.acar@gmail.com'
    })
  }

  const handleLogout = () => {
    setUser(null)
  }

  return(
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>{user?.name}</div>
      <div>{user?.email}</div>
    </div>
  )
  }
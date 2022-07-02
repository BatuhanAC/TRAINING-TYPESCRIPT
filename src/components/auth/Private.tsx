import {Login} from './Login'
import {ProfileProps} from './Profile'

//Component atarken React.ComponentType verecez.
//Component propsunun içindeki propsları da import edip yanına <> ile yazacaz.
type PrivateProps = {
  isLoggedIn: boolean,
  component: React.ComponentType<ProfileProps>
}


//component : Component 'deki gibi isim değişikliği yapabiliyoruz.
export const Private = ({isLoggedIn, component : Component}: PrivateProps ) => {
  if (isLoggedIn) {
    return <Component name = 'Batukan'/>
  } else {
    return <Login/>
  }
}
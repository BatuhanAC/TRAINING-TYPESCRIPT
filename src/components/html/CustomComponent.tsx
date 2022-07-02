import React from 'react'
import { Greet } from '../Greet'


/* 
 Greet propslarını exportlamadan çektik.
 React.ComponentProps<typeof Greet>
*/
const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
  return (
    <div>{props.name}</div>
  )
}

export default CustomComponent
import React from 'react'

type ButtonProps= {
  variant: 'primary' | 'secondary' 
  children: string
} & Omit<React.ComponentProps<'button'>, 'children'>
//Rest bütün button html proplarını içeriyor ama 
//omit sayesinde children propu sadece 
//type içerisinde belirtildiği üzere sadece string olabiliyor
//çünkü omit children ile alaklaı html proplarını eliyor.
export const ButtonWrap = ({variant, children, ...rest}: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  )
}
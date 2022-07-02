type HeaderProps = {
  children: string
}

const Header = (props: HeaderProps) => {
  return (
    <h3>{props.children}</h3>
  )
}

export default Header
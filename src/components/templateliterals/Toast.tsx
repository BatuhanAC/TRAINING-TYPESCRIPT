
type Horizontal = 'left' | 'center' | 'right'
type Vertical = 'top' | 'center' | 'bottom'
type PositionProps = {
  position: Exclude<`${Horizontal}-${Vertical}`, 'center-center'> | 'center'
}


export const Toast = ({position}: PositionProps) => {
  return <div>Toast Position - {position}</div>
}
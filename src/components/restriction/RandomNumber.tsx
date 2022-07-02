type RandomNumberType = {
  value: number,
}

type RandomNumberPositive = RandomNumberType & {
  isPositive: boolean,
  isNegative?: never,
  isZero?: never
}

type RandomNumberNegative = RandomNumberType & {
  isPositive?: never,
  isNegative: boolean,
  isZero?: never
}

type RandomNumberZero = RandomNumberType & {
  isNegative?: never,
  isPositive?: never,
  isZero: boolean
}

type RandomNumberProps = RandomNumberPositive | RandomNumberNegative | RandomNumberZero

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && 'positive'} {isNegative && 'negative'}{' '}
      {isZero && 'zero'}
    </div>
  )
}
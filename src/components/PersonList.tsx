import { Name } from "./Person.types"

type PersonListProps = {
    nameList: Name[]
}

const PersonList = (props: PersonListProps) => {
  return (
    <div>
        {
            props.nameList.map((name, index) => {
                return (
                    <h2 key={index}>
                        {name.first} {name.last} {index + 1}
                    </h2>
                )
            })
        }
    </div>
  )
}

export default PersonList
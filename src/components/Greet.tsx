type GreetProps = {
    name?: string,
    count?: number,
    isItTrue: boolean,
}

export const Greet = (props: GreetProps) => {
    const {count = 0 } = props
    return (
        <div>
            <h2>
                HELLO THERE, {props.name ? props.name.toLocaleUpperCase("TR") : "UNNAMED"}.
                <br/> LOVE YOU {count} TIMES!
                <br/>AND IT IS {props.isItTrue.toString().toUpperCase()}!
            </h2>
        </div>
    )
}
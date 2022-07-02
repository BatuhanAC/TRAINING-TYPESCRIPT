import {useRef, useEffect} from 'react'



export const DomRef = () => {

  //Buradaki null ın yanındaki ! sayesinde current? yapmıyoz
  const inputRef = useRef<HTMLInputElement>(null!)

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  return(
    <div>
      <input type='text' ref={inputRef}/>
    </div>
  )
}
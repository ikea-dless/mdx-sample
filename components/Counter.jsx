import { useState } from "react"

export const Counter = () => {
  const [count, setCount] = useState(0)
  const increment = () => setCount(count+1)

  return (
    <>
      カウント: { count }
      <button onClick={increment}>増やす</button>
    </>
  )
}

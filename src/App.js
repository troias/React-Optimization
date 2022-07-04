import React, { useState, useCallback, useMemo } from "react"
import Button from "./components/UI/Button/Button"
import DemoOutput from "./components/Demo/DemoOutput"
import "./App.css"
import DemoList from "./components/Demo/DemoList"

function App() {
  const items = [5, 8, 4, 3, 8, 4]

  const [show, setShow] = useState(false)
  const [allowToggle, setAllowToggle] = useState(false)
  console.log("App, app running")

  const buttonHandler = useCallback(() => {
    if (allowToggle) {
      setShow((prevState) => !prevState)
    }
  }, [allowToggle])

  const toggleHandler = useCallback(() => {
    setAllowToggle((prevState) => !prevState)
  }, [])

  return (
    <div className="app">
      <h1>Starting Application</h1>
      <DemoList title={"List"} items={useMemo(() => items, [])} />

      <Button
        style={{
          marginBottom: "10px",
        }}
        onClick={toggleHandler}
      >
        {allowToggle ? "Disable" : "Enable"}
      </Button>

      <Button onClick={buttonHandler}>{show ? "show" : "hide"}</Button>
    </div>
  )
}

export default App

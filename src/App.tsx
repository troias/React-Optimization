import { useCallback, useMemo, ChangeEvent, useReducer } from "react"
import Button from "./components/UI/Button/Button"
import DemoOutput from "./components/Demo/DemoOutput"
import "./App.css"
import DemoList from "./components/Demo/DemoList"

type State = number[]

type Action =
  | { type: 'ADD_ITEM', payload: number }
  | { type: 'REMOVE_ITEM', payload: number }
  | { type: 'SET_INPUT_VALUE', payload: string }
  | { type: 'RESET_ITEMS', payload: number }

interface AppState {
  items: number[],
  inputValue: string
}

function App() {

  const initialState: AppState = {
    items: [],
    inputValue: ""
  }

  const reducer = (state: AppState, action: Action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          items: [...state.items, action.payload]
        }

      case 'SET_INPUT_VALUE':
        return {
          ...state,
          inputValue: action.payload
        }
      case 'RESET_ITEMS':
        return {
          ...state,
          items: []
        }

      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  const inputHandler = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET_INPUT_VALUE', payload: event.target.value })
  }, [])

  const removeItemHander = useCallback(() => {
    dispatch({ type: 'RESET_ITEMS', payload: 0 })

  }, [
    dispatch

  ])

  const addItemHandler = useCallback(() => {
    const inputValueAsNumber = +state.inputValue
    dispatch({ type: 'ADD_ITEM', payload: inputValueAsNumber })
  }, [dispatch, state.inputValue])

  console.log("App, app running")

  return (
    <div className="app">
      <h1>Starting Application</h1>
      <DemoList title={"List"} items={useMemo(() => state.items, [state.items])} />

      <div>
        <br />
        <MyInput
          label="Enter a number"
          value={state.inputValue}
          onChange={inputHandler}

        />
        <br />
        <Button onClick={addItemHandler}
          type={"submit"}
        >
          Add Number
        </Button>
        <Button type="reset" onClick={removeItemHander}>
          Reset
        </Button>
      </div>

      <DemoOutput items={state.items} />
    </div>
  )
}

export default App

interface MyInputProps {
  label: string
  value: string

  onChange: (event: ChangeEvent<HTMLInputElement>) => void

}

function MyInput({ label, value, onChange }: MyInputProps) {
  return (
    <div className="flex flex-col" >
      <label htmlFor="my-input" className="pb-2 bg-red-500"  >{label}</label>
      <br />

      <input id="my-input" value={value} onChange={onChange} />
    </div>
  )
}

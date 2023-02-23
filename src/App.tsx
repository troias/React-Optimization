import { useCallback, useMemo, ChangeEvent, useReducer } from "react"
import React from 'react';

import Button from "./components/UI/Button/Button"

import  Header from "./components/Header/header"


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
    <div className="pl-12 ">
      {/* <Header/> */}
      <h1
      className="text-4xl font-bold text-center"
      >Starting Application</h1>

      <InputForm state={state} inputHandler={inputHandler} addItemHandler={addItemHandler} removeItemHander={removeItemHander} />
  
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
    <div className="" >
      <label htmlFor="my-input" className=""  >{label}</label>
      <br />

     

      <input id="my-input" value={value} onChange={onChange} />
    </div>
  )
}

function InputForm ({
  state,
  inputHandler,
  addItemHandler,
  removeItemHander
}: {
  state: AppState
  inputHandler: (event: ChangeEvent<HTMLInputElement>) => void
  addItemHandler: () => void
  removeItemHander: () => void

}) {
  return (
    <div>
          

          <div>
        <div className="w-24 bg-green-500 h-24">
          test
        </div>
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
    </div>
  )
}

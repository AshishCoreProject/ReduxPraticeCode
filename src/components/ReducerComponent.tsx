"use client"

import React, { useReducer } from 'react'

const initialState = {number:0, inputNumber:0}

function reducer(state: any, action: { type: any, payload:any }){
    switch (action.type){
        case 'Increase': 
            return {...state, number: state.number + 1};
        case "Decrease":
            return {...state, number: state.number - 1};
        case "setCountAdd":
            return {...state, number: state.number + state.inputNumber };
        case "setCountMinus":
                return {...state, number: state.number - state.inputNumber};
        case "takeInput":
            return {...state, inputNumber: action.payload};
        default :
            throw new Error("unknown action");
    }
}

export default function ReducerComponent() {
    const [state, dispatch] = useReducer(reducer, initialState);
    console.log(initialState);
    function handleClickIncrease(){
        // @ts-ignore
        dispatch({type:"Increase"})
    }

    function handleClickDecrease(){
        // @ts-ignore
        dispatch({type:"Decrease"})
    }

    function handleInput(e:any){
        dispatch({type:"takeInput", payload: Number(e.target.value)})
    }

    function handleAdd(){
        // @ts-ignore
        dispatch({type:"setCountAdd"})
    }

    function handleMinus(){
        // @ts-ignore
        dispatch({type:"setCountMinus"})
    }

  return (
    <>
    <div className='flex justify-center my-6'>
      <button className="text-2xl border-4 rounded-2xl px-2" onClick={handleClickDecrease}>-</button>
      <p className='text-2xl mx-6'>{state.number}</p>
      <button className="text-2xl border-4 rounded-2xl px-2" onClick={handleClickIncrease}>+</button>
    </div>
    <div className="flex justify-center my-6">
      <input className='border-2 w-28' type="text" onChange={handleInput}/>
      <div>
        <button onClick={handleAdd} className='mx-2 border-2 rounded-2xl p-2'>Add</button>
        <button onClick={handleMinus} className='mx-2 border-2 rounded-2xl p-2'>minus</button>
      </div>
    </div>
    </>
  )
}
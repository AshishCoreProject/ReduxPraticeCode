"use client"

import React, { useState } from 'react'

export default function SimpleStateComponent() {
  const [number, setNumber] = useState(0);
  const [inputNumber, setInputNumber] = useState(0)
  console.log(number, "mainNumber");
  console.log(inputNumber, "inputNumber");

  function handleClickIncrease(){
    setNumber(()=> number + 1);
  }

  function handleClickDecrease(){
    setNumber(()=> number - 1);
  }

  function handleInput(e:any){
    setInputNumber(() => Number(e.target.value));
  }

  function handleSubmit(){
    setNumber(()=> number + inputNumber);
  }

  return (
    <>
    <div className='flex justify-center my-6'>
      <button className="text-2xl border-4 rounded-2xl" onClick={handleClickDecrease}>-</button>
      <p className='text-2xl mx-6'>{number}</p>
      <button className="text-2xl border-4 rounded-2xl" onClick={handleClickIncrease}>+</button>
    </div>
    <div className="flex justify-center my-6">
      <input className='border-2' type="text" onChange={handleInput}/>
      <button onClick={handleSubmit} className='mx-2 border-2 rounded-2xl' type='submit'>submit</button>
    </div>
    </>
  )
}

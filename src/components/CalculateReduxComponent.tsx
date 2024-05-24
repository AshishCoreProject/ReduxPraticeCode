"use client"

import React from 'react';
import {increase,decrease, takeInput, setCountAdd, setCountMinus, selectCountNumber} from "./features/calculate"
import { useDispatch, useSelector } from 'react-redux';

export default function CalculateReduxComponent() {
    const count = useSelector(selectCountNumber);
    const dispatch = useDispatch();
    const takeInputfunction = (e:any)=> dispatch(takeInput(Number(e.target.value)));

  return (
    <>
      <div className='flex justify-center my-6'>
        <button className="text-2xl border-4 rounded-2xl px-2" onClick={()=>dispatch(decrease())}>-</button>
        <p className='text-2xl mx-6'>{count}</p>
        <button className="text-2xl border-4 rounded-2xl px-2" onClick={()=>dispatch(increase())}>+</button>
      </div>
      <div className="flex justify-center my-6">
        <input className='border-2 w-28' type="text" onChange={takeInputfunction}/>
        <div>
          <button onClick={()=> dispatch(setCountAdd())} className='mx-2 border-2 rounded-2xl p-2'>Add</button>
          <button onClick={()=> dispatch(setCountMinus())} className='mx-2 border-2 rounded-2xl p-2'>minus</button>
        </div>
      </div>
    </>
  )
}
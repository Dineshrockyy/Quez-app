import React from 'react'
import question from './Question'

export default function Result(props) {
  let value=0

  for(let i=0;i<props.result.length;i++){
    if(question.question[0].correctIndex+1 === props.result[0]){
      value++
    }
  }
  
  const final=(value /props.result.length )*100
  console.log(value)

  console.log(question)
  return (
    <div>
        <div className="bg-gray-700 min-h-screen flex justify-center flex-col items-center" >
        <div className="w-5/12 border-2 border-gray-100 h-60 p-5 ">
          <h1 className='text-center text-gray-50 text-3xl'>Your score is : </h1>
          <h1 className='text-center text-gray-50 text-3xl mt-16'>{final}% </h1>
          <p className='text-green-400 text-center text-xl mt-2'>{final>85 ? 'You pass' :''}</p>
          <p className='text-red-400 text-center text-xl mt-2'>{final<85 ? 'You have score more than 85% to pass' :''}</p>
        </div>
        </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import "./style.css"
import question from './Question'
import Result1 from './Result1'

export default function Quez_template() {
  let front='-->'
  const back='<--'
  let [warning,setwarning]=useState('')
  
  const [value,setvalue]=useState(0)
  const [radio,setradio]=useState('')
  const [ans,setans]=useState([])
  const [length,setlength]=useState('')
  const [finesh,setfinesh]=useState('')

  useEffect(()=>{
    setlength(ans.length)
  },[ans])

  const handelnext=()=>{
    if(radio !== ''){
      if(ans[length]!== undefined){
        const answer=ans
        answer[length]=radio
        setans(answer)
        setwarning('')
        console.log('first if')
      }
      if(value+1<question.question.length && ans[value]===undefined){
        setans([...ans,radio])
        setradio('')
        setvalue(value+1)
        setwarning('')
        console.log('if')
      }else{
        setvalue(value+1)
        setlength(length => length + 1)
        setradio(ans[length+1])
        setwarning('')
        if(length+1===ans.length){
          setradio('')
          setwarning('')
          console.log('undifined')
        }
        console.log('else')
      }
    }else{
      console.log('else last')
      setwarning('You have to must select any one option')
    }
  }
  console.log(length)
  console.log(ans)

  const handelpre=()=>{
    if(ans[length]!== undefined){
      const answer=ans
      answer[length]=radio
      setans(answer)
      setwarning('')
      console.log('first if in pre')
    }
    if(value>0){
      setlength(length-1)
      setvalue(value-1)
      setradio(ans[length-1])
      setwarning('')
    }
  }

  const handelfinesh=()=>{
    setfinesh('finesh')
  }

  const datas=()=>{
    return(
    <div className="bg-gray-700 min-h-screen flex justify-center flex-col items-center" >
      <h2 className="bg-green-400 w-16 m-3 text-center">{`${value+1}/${question.question.length}`}</h2>
      <p className='text-red-400'>{warning === '' ? '' : warning }</p>
      <div className="w-5/12 border-2 border-gray-100 h-60 p-5 ">
        <div>
          <h2 className="text-gray-100">{question.question[value].question}</h2>
          <div className=" flex flex-col mt-5">
          <div>
          <input id='1' type='radio' name='answer' onClick={()=>{setradio(1);setwarning('')}} checked={radio===1 ? '1' :''}></input>
          <label htmlFor='1' className="ml-3 text-gray-100">{question.question[value].answers[0]}</label>
          </div> 
          <div> 
          <input id='2'  type='radio' name='answer' onClick={()=>{setradio(2);setwarning('')}} checked={radio===2 ? '2' :''}></input>
          <label htmlFor='2' className="ml-3 text-gray-100">{question.question[value].answers[1]}</label>
          </div> 
          <div> 
          <input id='3'  type='radio' name='answer' onClick={()=>{setradio(3);setwarning('')}} checked={radio===3 ? '3' :''}></input>
          <label htmlFor='3' className="ml-3 text-gray-100">{question.question[value].answers[2]}</label>
          </div> 
          <div> 
          <input id='4'  type='radio' name='answer' onClick={()=>{setradio(4);setwarning('')}} checked={radio===4 ? '4' :''}></input>
          <label htmlFor='4' className="ml-3 text-gray-100">{question.question[value].answers[3]}</label>
          </div>
          </div>
        </div>
        <>{
          value===question.question.length-1 ? <p onClick={handelfinesh} className="cursor-pointer bg-green-400 rounded-full w-20 text-center font-black text-gray-900 float-right mt-2">Finish</p>:
          <p onClick={handelnext} className="cursor-pointer bg-green-400 rounded-full w-20 text-center font-black text-gray-900 float-right mt-2">{front}</p>
        }</>
        <>{
          value===0 ? '' : <p onClick={handelpre} className="cursor-pointer bg-green-400 rounded-full w-20 text-center font-black text-gray-900 float-left mt-2">{back}</p>
        }</>
      </div>
    </div>
    )
  }

  return (
    <div>
      {finesh ==='' ? datas() : <Result1 result={[...ans,radio]}/>}
    </div>
  )
}

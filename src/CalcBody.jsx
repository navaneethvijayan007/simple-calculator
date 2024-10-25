import React, { useState } from 'react'


const CalcBody = () => {

    const [value,setValue]=useState('')
     
   
    
  return (
    <div>
      <div class="calc">
        <div class="calcbody">
            <input type="text" value={value}/>
            <div class="buttons">
                <button onClick={e=>setValue(value+e.target.value)} value='1'>1</button>
                <button onClick={e=>setValue(value+e.target.value)} value='2'>2</button>
                <button onClick={e=>setValue(value+e.target.value)} value='3'>3</button>
                <button onClick={e=>setValue(value+e.target.value)} value='+' class="operator">+</button>

                <button onClick={e=>setValue(value+e.target.value)} value='4'>4</button>
                <button onClick={e=>setValue(value+e.target.value)} value='5'>5</button>
                <button onClick={e=>setValue(value+e.target.value)} value='6'>6</button>
                <button onClick={e=>setValue(value+e.target.value)} value='-' class="operator">-</button>

                <button onClick={e=>setValue(value+e.target.value)} value='7'>7</button>
                <button onClick={e=>setValue(value+e.target.value)} value='8'>8</button>
                <button onClick={e=>setValue(value+e.target.value)} value='9'>9</button>
                <button onClick={e=>setValue(value+e.target.value)} value='' class="operator"></button>

                <button onClick={e=>setValue(value+e.target.value)} value='0'>0</button>
                <button onClick={e=>setValue(value+e.target.value)} value='.'>.</button>
                <button onClick={e=>setValue(eval(value))} value='=' class="equal">=</button>
                <button onClick={e=>setValue(value+e.target.value)} value='/' class="operator">/</button>

                <button onClick={e=>setValue(value+e.target.value)} value='00'>00</button>
                <button onClick={e=>setValue("")} class="clear">AC</button>
                <button onClick={e=>setValue(value.slice(0,-1))} value={'DEL'} >DEL</button>

            </div>
        </div>
    </div>
    </div>
  )
}

export default CalcBody
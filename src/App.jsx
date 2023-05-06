import {useState} from 'react'
import './App.css'

function App() {
    const [result, setResult] = useState("")

    const handleClick = e => setResult(result.concat(e.target.id))
    const clear = () => setResult("")

    const deleteEl = () => setResult(result.slice(0, -1))

    const calculate = () => {
        try{
            setResult(eval(result).toString())
        }catch(error){
            setResult("Error")
        }
    }

    return (
        <div className='all'>
        <div className='calculator'>
            <h5 className="text-slate-600">React Calculator</h5>
            <input type="text" value={result} className='input' disabled/>
            <div className='buttons'>
                <button className='operator' onClick={clear}>AC</button>
                <button className='operator' onClick={deleteEl}>DE</button>

                <button id='.' className='operator' onClick={handleClick}>.</button>
                <button id='/' className='operator' onClick={handleClick}>/</button>

                <button id='7' className='number' onClick={handleClick}>7</button>
                <button id='8' className='number' onClick={handleClick}>8</button>
                <button id='9' className='number' onClick={handleClick}>9</button>

                <button id='*' className='operator' onClick={handleClick}>*</button>

                <button id='4' className='number' onClick={handleClick}>4</button>
                <button id='5' className='number' onClick={handleClick}>5</button>
                <button id='6' className='number' onClick={handleClick}>6</button>

                <button id='-' className='operator' onClick={handleClick}>-</button>

                <button id='1' className='number' onClick={handleClick}>1</button>
                <button id='2' className='number' onClick={handleClick}>2</button>
                <button id='3' className='number' onClick={handleClick}>3</button>

                <button id='+' className='operator' onClick={handleClick}>+</button>

                <button id='00' className='number' onClick={handleClick}>00</button>
                <button id='0' className='number' onClick={handleClick}>0</button>

                <button id='=' className='operator col-span-2' onClick={calculate}>=</button>
            </div>
        </div>
            <a href="https://github.com/jrmessias/react-calculator" title="Github Source Code" className='flex justify-center pt-2'>
                <svg height="24" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32"
                     data-view-component="true" className="v-align-middle fill-gray-500 fill-slate-500">
                    <path
                        d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
                </svg>
            </a>
        </div>
    )
}

export default App

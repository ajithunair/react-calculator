import { useState } from 'react'
import './Calculator.css'

export const Calculator = () => {
    const [numbers, setNumbers] = useState({number1: '', number2: '', result: ''})
    const [isSecond, setIsSecond] = useState(false)
    const [operation, setOperation] = useState('')

    const numberHandler = (e) => {
        if (isSecond) {
            if (isNaN(numbers.number2 + e.target.innerText)) {
                return
            }
            setNumbers((n) => ({ ...n, number2: n.number2 + e.target.innerText, result : n.number2 + e.target.innerText }) )
        } else {
            if (isNaN(numbers.number1 + e.target.innerText)) {
                return
            }
            setNumbers((n) => ({ ...n, number1: n.number1 + e.target.innerText, result : n.number1 + e.target.innerText }) )
        }
        console.log(numbers)
    }

    const symbolHandler = (e) => {
        if (e.target.innerText !== '=') {
            setIsSecond(true)
            setOperation(e.target.innerText)
        } else {
            setIsSecond(false)
        }
    }

    const resultHandler = () => {
        let result = 0
        switch (operation) {
            case '+':
                result = Number(numbers.number1) + Number(numbers.number2);
                break;
            case '-':
                result = Number(numbers.number1) - Number(numbers.number2);
                break;
            case 'x':
                result = Number(numbers.number1) * Number(numbers.number2);
                break;
            case '/':
                result = Number(numbers.number1) / Number(numbers.number2);
                break;
        }
        setNumbers((n) => ({ number1: '',number2: '', result : result }) )
        setOperation('')
        setIsSecond(false)
    }

    const clear = () => {
        setNumbers((n) => ({number1: '', number2: '', result : '' }))
        setOperation('')
        setIsSecond(false)
    }

    return (
        <div className="container">
            <div className="calc-body">
                <div className="calc-screen">
                    <div className="calc-operation"></div>
                    <input type='text' value={numbers.result} className='calc-typed' readOnly />
                </div>
                <div className="calc-button-row">
                    <button className="button c" onClick={clear}>C</button>
                    <button className="button" onClick={symbolHandler}>#</button>
                    <button className="button" onClick={symbolHandler}>%</button>
                    <button className="button" onClick={symbolHandler}>/</button>
                </div>
                <div className="calc-button-row">
                    <button className="button" onClick={numberHandler}>7</button>
                    <button className="button" onClick={numberHandler}>8</button>
                    <button className="button" onClick={numberHandler}>9</button>
                    <button className="button" onClick={symbolHandler}>x</button>
                </div>
                <div className="calc-button-row">
                    <button className="button" onClick={numberHandler}>4</button>
                    <button className="button" onClick={numberHandler}>5</button>
                    <button className="button" onClick={numberHandler}>6</button>
                    <button className="button" onClick={symbolHandler}>-</button>
                </div>
                <div className="calc-button-row">
                    <button className="button" onClick={numberHandler}>1</button>
                    <button className="button" onClick={numberHandler}>2</button>
                    <button className="button" onClick={numberHandler}>3</button>
                    <button className="button" onClick={symbolHandler}>+</button>
                </div>
                <div className="calc-button-row">
                    <button className="button" onClick={numberHandler}>.</button>
                    <button className="button" onClick={numberHandler}>0</button>
                    <button className="button" onClick={numberHandler}>M</button>
                    <button className="button" onClick={resultHandler}>=</button>
                </div>
            </div>
        </div>
    )
}
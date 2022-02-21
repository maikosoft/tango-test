import {useContext } from 'react'
import '../Assets/Styles/style.css'
import {StateContext} from '../Contexts/contexts'

export default function FibonacciAnswer() {
    const {answer} = useContext(StateContext);
    return (
        <div className="answer-cont">
            <div className="title">
                Fibonacci Result:  
            </div>
            <div className="answer">
                {answer}
            </div>
        </div>
    )
}

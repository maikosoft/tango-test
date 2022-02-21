import { useState } from 'react';
import '../../Assets/Styles/style.css';
import FibonacciForm from '../../Components/FibonacciForm';
import { StateContext } from '../../Contexts/contexts'
import FibonacciAnswer from '../../Components/FibonacciAnswer';


export default function Fibonacci() {
    const [answer, setAnswer] = useState(0);

    return (
        <StateContext.Provider value={{answer, setAnswer}}>
            <div className='center-cont'>
                <h2>Calculate Fibonacci!</h2>
                <FibonacciForm />
                <FibonacciAnswer />
            </div>
        </StateContext.Provider>
    )
}

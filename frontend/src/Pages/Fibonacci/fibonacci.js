import {useState, useEffect} from 'react';
import API from '../../Services/Api/api';
import '../../Assets/Styles/style.css';

export default function Fibonacci() {
    const [number, setNumber] = useState(0);
    const [answer, setAnswer] = useState(0);
    
    // function to fetch the fibonacci number
    const calculateHandler = () => {
        API.getFibonacci(number)
        .then(response => {
            setAnswer(response.data.answer);
        }).catch(error => {
            alert(error);
        });
    }
    // handle when user press Enter
    const  handleKeyPress = ({ nativeEvent: { key: keyValue } }) => {
        if(keyValue === 'Enter')
        {
            calculateHandler();
        }
    };

    // Set answer to -- when user focus on input
    useEffect(() => {
        if (number == '') {
            setAnswer('--'); 
        }
    }, [number]);
    return (
        <div className='center-cont'>
            <h2>Calculate Fibonacci!</h2>
            <div className="form-cont">
                <div className="form-group">
                    <input 
                        type="number" 
                        className="input" 
                        placeholder='Exsample. 5' 
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        onFocus={(e) => setNumber('')}
                        onKeyPress={handleKeyPress}
                    /> 
                    <button 
                        className="button" 
                        onClick={() => calculateHandler()}
                        disabled={number === ''}
                    >Calculate</button> 
                </div>
            </div>
            <div className="answer-cont">
                <div className="title">
                    Fibonacci Result:  
                </div>
                <div className="answer">
                    {answer}
                </div>
            </div>
        </div>
    )
}

import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, incrementSameAmount, incrementByAmount } from "./counterSlice"
import { useState } from "react";

const Counter = () => {
    //const { increment, decrement } = useSelector((state) => state.counter);
    const count =  useSelector((state) => state.counter.count)
    const dispatch = useDispatch();

    const [ input, setInput ] = useState(0)

    const addValue = Number(input) || 0;

    const counterIncrement = () => {
        dispatch(increment());
    }
    
    const counterDecrement = () => {
        dispatch(decrement());
    }

    const counterReset = () => {
        setInput(0);
        dispatch(reset());
    }

    const addSameAmount = () => {
        dispatch(incrementSameAmount(count));
    }

    const addByAmount = () => {
        dispatch(incrementByAmount(addValue));
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={counterDecrement}>-</button>
            <button onClick={counterIncrement}>+</button>
            <button onClick={counterReset}>Reset</button>
            <button onClick={addSameAmount}>Add by {count}</button>
            <input type="text"
                   value={input}
                   onChange={e => setInput(e.target.value)}
            />
            <button onClick={addByAmount}>Add Amount</button>
        </div>
    )
}

export default Counter
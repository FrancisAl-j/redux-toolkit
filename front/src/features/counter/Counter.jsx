import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, reset, incrementByAmount } from "./counterSlice"

const Counter = () => {
    //const { increment, decrement } = useSelector((state) => state.counter);
    const count =  useSelector((state) => state.counter.count)
    const dispatch = useDispatch();

    const counterIncrement = () => {
        dispatch(increment());
    }
    
    const counterDecrement = () => {
        dispatch(decrement());
    }

    const counterReset = () => {
        dispatch(reset());
    }

    const addSameAmount = () => {
        dispatch(incrementByAmount(count));
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={counterDecrement}>-</button>
            <button onClick={counterIncrement}>+</button>
            <button onClick={counterReset}>Reset</button>
            <button onClick={addSameAmount}>Add by {count}</button>
        </div>
    )
}

export default Counter
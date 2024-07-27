import { useReducer, useState } from "react"

const ACTIONS = {
    INCREMENT: 'increment',
    DECREMENT: 'decrement',
    TOGGLE: 'toggleColor'
}

const reducer = (state, action) => {
    switch( action.type ) {
        case ACTIONS.INCREMENT:
            return { ...state, count: state.count + 1 }
        case ACTIONS.DECREMENT:
            return { ...state, count: state.count - 1 }
        case ACTIONS.TOGGLE:
            return { ...state, color: !state.color }
        default:
            return state
    }
} 

const Practice = () => {
    const [state, dispatch] = useReducer(reducer, { 
        count: 0,
        color: false
    })
    const [ userInput, setUserInput ] = useState('')

    const increment = () => {
        dispatch({ type: ACTIONS.INCREMENT })
    }

    const decrement = () => {
        dispatch({ type: ACTIONS.DECREMENT })
    }


    return (
        <div style={{color: state.color ? '#000' : '#FFF952'}}>
            <form>
                <input
                    type="text"
                    value={userInput} 
                    onChange={e => setUserInput(e.target.setUserInput)}
                />

            </form>
            <h1>{state.count}</h1>
            <button onClick={increment}>Add</button>
            <button onClick={decrement}>Decrease</button>
            <button onClick={() => dispatch({ type: ACTIONS.TOGGLE })}>Color</button>
            <p>{userInput}</p>
        </div>
    )
}

export default Practice
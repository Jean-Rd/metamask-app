import React from 'react'
import { useEffect, useReducer } from 'react';
import { modeReducer } from '../hooks/modeReducer';
let bool = localStorage.getItem("mode") || true;
export const ButtonColor = () => {

    const [state, dispatch] = useReducer(modeReducer, true);
    useEffect(() => {
        localStorage.setItem("mode", bool);
    }, [bool])
    const handleButtonOnClick = () => {
        bool = !bool;
        return bool?( dispatch({ type: "white" }, state) ): ( dispatch({ type: "dark" }, state) )

    }

    return (
        <div onClick={ handleButtonOnClick } className="mode">
          <i className="far fa-moon"></i>
        </div>
    )
}

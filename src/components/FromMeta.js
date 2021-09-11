import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { connectMetamask } from '../helpers/connectMetamask';
import { sendMeta } from '../helpers/sendMeta';
import { useForm } from '../hooks/useForm'

export const FromMeta = () => {

    const [ value, valueChange ] = useForm({
        address: "",
        amount: ""
    });

    const { address, amount } = value;
    const [state, setstate] = useState([])

    useEffect(() => {
      connectMetamask().then( val => {
          setstate(val)
      } ) 
    }, [])

    

    const handleOnSubmit = (e) => {
      e.preventDefault();
      sendMeta( amount, address, state[0] );
    }

    return (
      <>
          <div id="formulario">
            <form className="formulario m-0" onSubmit={ handleOnSubmit }>
              <label className="form-label m-0">Your address</label>
              <div className="text-center text-nowrap fs-6 fs-md-5 fs-lg-4 mb-4 mt-1 link-warning fst-italic fw-bolder">{ state }</div>
              <div className="mb-3">
                  <label htmlFor="inputReceptor" className="form-label">Receiver address</label>
                  <input onChange={ valueChange } name="address" value={ address } type="text" className="user-input form-control" id="inputReceptor" aria-describedby="receiverAddress"></input>
                  <div id="receiverAddress" className="form-text form-text__mutted">Please enter a correct address.</div>
                </div>
              <div className="mb-3">
                <label htmlFor="inputAmount" className="form-label">Amount ( Wei )</label>
                <input onChange={ valueChange } name="amount" value={ amount } type="number" className="user-input form-control" id="inputAmount"></input>
              </div>
              <button type="submit" className="btn btn-outline-dark">Send</button>
            </form>
          </div>
        </>
    )
}

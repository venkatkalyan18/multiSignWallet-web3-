import React, { useState } from 'react'
import { TransactionContext } from './TransactionsContext'
import closeImg from '../assets/close_FILL0_wght400_GRAD0_opsz24 (2).svg'

const CreateTransaction = ({children,setToggle}) => {

    const {handleChange,Submit,getAllTransactions} = React.useContext(TransactionContext);

    

  return (
    <section >
    <div className='bg-black w-full h-full fixed bg-opacity-30'></div>
    <div className='fixed z-20 flex justify-center items-center w-full h-full'>
        
        <div className='flex flex-col justify-center bg-slate-400 w-[300px] h-[450px] py-8 px-8 relative'>
        <img src={closeImg} width={30} className='absolute right-8 top-5 cursor-pointer' onClick={()=>setToggle(false)} />
            <label>Amount</label> 
            <input type="number" placeholder='Enter Value' className='mb-8 p-2' name="value" onChange={handleChange}/>
            <label>Reciver Address</label>
            <input type="text" placeholder='Enter wallet address' className='mb-8 p-2' name="toAddress"  onChange={handleChange}/>
            <label>Call Data</label>
            <input type="text" placeholder='Enter a message' className='mb-8 p-2'  name="data" onChange={handleChange}/>
            <div className='w-[50%] mr-auto ml-auto'>
            <button className="bn-32 bn32 font-sans text-xl" onClick={Submit}>Submit</button>
            </div>
        </div>
        {children}
    </div>
    </section>
  )
    
}

export default CreateTransaction
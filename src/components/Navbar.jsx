import React, { useContext, useState } from 'react'
import logo from '../assets/MetaMask_Fox.svg.png'
import { Link } from 'react-router-dom'
import { TransactionContext } from './TransactionsContext'
import CreateTransaction from './CreateTransaction'

const Navbar = () => {

    const {currentAccount, connectWallet,getAllTransactions} = React.useContext(TransactionContext)
    const[toggle, setToggle] = useState(false)
  return (
    <div>
    <nav className='flex justify-center fixed w-full'>
    <div className='w-[90%]  bg-blue-400 mt-10 rounded-full  '>
        <div className='flex justify-between items-center px-14 py-2 '>
        <img src={logo} alt="Logo" className='w-[60px]'/>
        <ul className='flex gap-x-20'>
            <li><Link to="/" className='text-xl  font-sans'>Home</Link></li>
            <li><Link to="/transactions" className='text-xl  font-sans'>Transactions</Link></li>
        </ul>
        <div>
        <button className="btn41-43 btn-43 mr-10" onClick={connectWallet}>{currentAccount.length ?  `${currentAccount.slice(0,6)}....` :'Connect wallet'}</button>
        <button className="btn41-43 btn-42 " onClick={()=>setToggle(true)}>+</button>
        </div>
        </div>
    </div>
    </nav>
    
    {
        toggle && <CreateTransaction setToggle={setToggle}/>
    }
    </div>
   
  )
}

export default Navbar
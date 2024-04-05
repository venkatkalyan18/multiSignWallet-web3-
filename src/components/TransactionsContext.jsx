import React, { useEffect, useState } from 'react'
import {ethers} from 'ethers';
export const TransactionContext = React.createContext();
import {CONTRACT_ADDRESS, ABI} from './Constants'


const  TransactionProvider  = ( {children}) => {
  const[currentAccount,setCurrentAccounts] = useState('');
  const[formData, setFormData] = useState({value:'',toAddress:'',data:''})
  const[trans, setTrans] = useState([]);
  

  const handleChange = (e) => {
    setFormData((prev)=>({
      ...prev,
      [e.target.name]:e.target.value

    }))
  }

  const getEthereumContract = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer =   provider.getSigner();
    const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer)
    console.log(contract)
    return contract;
  }

  const checkIfWalletExists = async ()=>{
    try {
      if(!window.ethereum) return alert("Please install metamask wallet");
      const accounts = await ethereum.request({method:'eth_accounts'});
      if(accounts.length > 0){
        setCurrentAccounts(accounts[0]);
      }else{
        console.log('No accounts');
      }
    } catch (error) {
      console.log(error);
    }
  }

  const connectWallet = async () => {
    try {
      if(!window.ethereum) return alert("Please install metamask wallet");
      const accounts = await ethereum.request({method:'eth_requestAccounts'})
      setCurrentAccounts(accounts[0]);
    } catch (error) {
      console.lod(error);
     throw new error("No Ethereum object")
    }
  }

  const Submit = async () => {
    try {
    const {value, toAddress, data} = formData;
    const ethereumContract = await getEthereumContract();
    const transactionAddress = await ethereumContract.submit(ethers.parseEther('1'), toAddress, data);
    window.location.reload();
    } catch (error) {
      console.log(error)
    }
  }

  const getAllTransactions = async () =>{
    const ethereumContract = await getEthereumContract();
    const tx = await ethereumContract.getAllTransactions();
    console.log(tx)
    return tx;
  }

  const approve = async(txId) => {
    const ethereumContract =await getEthereumContract();
    const tx = await ethereumContract.approve(txId);
  }

  const revoke = async(txId) => {
    const ethereumContract =await getEthereumContract();
    const tx = await ethereumContract.revoke(txId);
  }

  const execute = async(txId) => {
    const ethereumContract =await getEthereumContract();
    const tx = await ethereumContract.execute(txId);
  }

  const isOwnerApproved = async(txId) => {
    const ethereumContract =await getEthereumContract();
    const tx = await ethereumContract.isOwnerApproved(0);
    return tx;
  }

  

  useEffect(()=>{
    checkIfWalletExists();
    getEthereumContract();
    getAllTransactions();
  },[])

  return (
    <TransactionContext.Provider value={{currentAccount, connectWallet, handleChange,Submit,getAllTransactions}}>
        {children}
    </TransactionContext.Provider>
  )
}

export default  TransactionProvider ;
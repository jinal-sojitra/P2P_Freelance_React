import React, { useState } from "react";
// import { formatEther } from 'ethers';

export default function WalletConnect() {
    const [errorMessage, setErrorMessage] = useState(null)
    const [defaultAccount, setDefaultAccount] = useState(null)
    // const [userBalance, setUserBalance] = useState(null)
    const [connButton, setConnButton] = useState("Connect Wallet")

    const connectWallet = () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' })
                .then(result => {
                    accountChangedHandler(result[0])
                })
        }
        else {
            setErrorMessage("Install Meta Mask First");
        }
    }

    const accountChangedHandler = (newAccount) => {
        setDefaultAccount(newAccount)
        // getUserBalance(newAccount.toString())
        let newbtn = newAccount;
        setConnButton(newbtn.slice(0,12)+"..");
    }

    

    const chainChangeHandler = () => {
        window.location.reload();
    }

    window.ethereum.on('accountsChanged', accountChangedHandler)

    window.ethereum.on('chainChanged', chainChangeHandler)

    return (
        <div>
            <button className={`btn btn-danger}`}  onClick={connectWallet}>{connButton}</button>
            {/* <div style={{ color: '#50f366' }}><h3>Address: {defaultAccount}</h3></div>
            <div style={{ color: '#f66366' }}><h3>Balance: {userBalance}</h3></div> */}<br/>
            {errorMessage}
        </div>
    )
}

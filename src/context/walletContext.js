// import { ethers } from 'ethers';
// import React, { createContext, useState } from 'react'
// import contract from '../artifacts/contractAbI';
// export const WalletContext = createContext();

// const Wallet = (props) => {
//     const [ownerAddress, setOwnerAddress] = useState(null);
//     const [walletAddress, setWalletAddress] = useState(0);
//     const [signer, setSigner] = useState();
//     const [icoContract, setIcoContract] = useState("");
//     const [connButton, setConnButton] = useState("Connect Wallet")

//     // useEffect(() => {

//     //     getCurrentWalletConnected();
//     //     addWalletListener();
//     //     // eslint-disable-next-line
//     // }, [walletAddress]);

//     const requestAccount = async () => {
//         // console.log("hello");
//         if (window.ethereum) {
//             try {
//                 const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
//                 setWalletAddress(accounts[0]);
//                 // console.log("Connected");
//                 const newbtn = await accounts[0]
//                 setConnButton(await newbtn.slice(0, 12) + "..");
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         else {
//             alert("Install metamask first...")
//         }
//     }

//     const connectWallet = async () => {
//         await requestAccount();
//         if (typeof window.ethereum !== 'undefined') {
//             // await requestAccount();


//             const provider = new ethers.providers.Web3Provider(window.ethereum)
//             // console.log(provider);
//             const sign = provider.getSigner();
//             setSigner(provider.getSigner());
//             // setIcoContract(contract(provider));
//             // console.log(sign);
//             // console.log(signer);
//             const contractInst = await contract(sign)
//             // console.log('contractInst');
//             const owner = await contractInst.owner();
//             const ownAddr = await owner.toLowerCase();
//             setOwnerAddress(ownAddr);
//             // console.log(ownAddr);
//             // const response = await icoContract.connect(provider);
//             // console.log(response);
//             // const abc = await signer.getChainId()
//             // console.log(abc);
//         }
//     }

//     const getCurrentWalletConnected = async () => {
//         await connectWallet();
//         if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
//             try {
//                 // console.log("Done");
//                 /* Get Provider */
//                 const provider = new ethers.providers.Web3Provider(window.ethereum);
//                 /* Get accounts */ // fetching already connected accounts 
//                 const accounts = await provider.send("eth_accounts", []);
//                 if (accounts.length > 0) {
//                     /* Get signer  */
//                     const sign = await provider.getSigner()
//                     setSigner(sign);
//                     /* local contract instance */
//                     const contract = await contract(provider)
//                     setIcoContract(contract);
//                     /*set active wallet address */
//                     setWalletAddress(accounts[0]);
//                     // console.log(accounts[0]);
//                     // console.log(signer);
//                     // console.log(icoContract);
//                     // const response = await icoContract.connect(provider);
//                     // console.log(response);

//                 } else {
//                     console.log("Connect to MetaMask using the Connect Wallet button");
//                 }
//             } catch (err) {
//                 console.error(err.message);
//             }
//         } else {
//             /* MetaMask is not installed */
//             console.log("Please install MetaMask");
//         }
//     };

//     // to load changed accounts or reflect updated accounts
//     const addWalletListener = async () => {
//         if (typeof window != "undefined" && typeof window.ethereum != "undefined") {
//             window.ethereum.on("accountsChanged", (accounts) => {
//                 setWalletAddress(accounts[0]);
//                 // console.log(accounts[0]);
//             });
//         } else {
//             /* MetaMask is not installed */
//             setWalletAddress("");
//             console.log("Please install MetaMask");
//         }
//     };


//     return (
//         <div>
//             <WalletContext.Provider value={{ connectWallet, connButton, walletAddress, icoContract, getCurrentWalletConnected, addWalletListener, signer, ownerAddress }}>
//                 {props.children}
//             </WalletContext.Provider>


//         </div>
//     )
// }

// export default Wallet

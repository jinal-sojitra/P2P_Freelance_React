import React, { useEffect } from 'react'
import axios from 'axios';
import contractABI from '../artifacts/contractAbI'; // Replace with the actual contract ABI
const ethers = require("ethers")
const contractAddress = '0x374014d4383FE06CC588e089Ce55a4245fA4BC2B';



const Projects = () => {
  useEffect(()=>{
    const fetchDataFromSmartContract=async()=>{
      try{
        await window.ethereum.enable();

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract =await new ethers.Contract(contractAddress, contractABI, signer);
        const projects = await contract.getProjects();
        console.log('Fetched data:', projects);
      }
      catch(error){
        console.error('Error fetching data: ',error);
      }
    }
    fetchDataFromSmartContract();
  },[]);
  return (
    <div>
      <div className='projects'>
        {
          // projects.map(project=>{
          //   return <ProjectItem key={project._id} project={project}/>
          // })
        }
      </div>
      
    </div>
  )
}

export default Projects

// import React, { useEffect, useState } from 'react';
// import { ethers } from 'ethers';

// const ContractAddress = 'your_contract_address';
// const ContractABI = [
//   // Add the ABI of your smart contract here
// ];

// const provider = new ethers.providers.JsonRpcProvider('your_ethereum_node_url');
// const contract = new ethers.Contract(ContractAddress, ContractABI, provider);

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchProductData();
//   }, []);

//   const fetchProductData = async () => {
//     try {
//       const productCount = await contract.getProductCount();
//       const productPromises = [];

//       for (let i = 0; i < productCount; i++) {
//         productPromises.push(contract.getProduct(i));
//       }

//       const productResults = await Promise.all(productPromises);
//       const processedProducts = productResults.map((result) => ({
//         id: result[0].toString(),
//         name: result[1],
//         price: result[2].toString(),
//       }));

//       setProducts(processedProducts);
//     } catch (error) {
//       console.error('Error fetching product data:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Product List</h1>
//       {products.map((product, index) => (
//         <div key={index}>
//           <p>Product ID: {product.id}</p>
//           <p>Product Name: {product.name}</p>
//           <p>Product Price: {product.price}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ProductList;


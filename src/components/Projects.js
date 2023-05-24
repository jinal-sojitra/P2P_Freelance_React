import React from 'react'

const Projects = () => {
  return (
    <div>
      
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


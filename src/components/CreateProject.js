import React from 'react';
import './createProject.css'
import contractABI from '../artifacts/contractAbI'; // Replace with the actual contract ABI
import WalletConnect from './WalletConnect';
const ethers = require("ethers")
const contractAddress = '0x374014d4383FE06CC588e089Ce55a4245fA4BC2B';

function CreateProject({ postProject }) {
  const [title, setTitle] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [technologies, setTechnologies] = React.useState('');
  const [budget, setBudget] = React.useState(0);

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (window.ethereum) {
      try {
        // Request account access if needed
        await window.ethereum.enable();

        // Get the provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        await contract.postProject(title, description, technologies.split(','), budget);

        setTitle('');
        setDescription('');
        setTechnologies('');
        setBudget(0);

        alert('Project created successfully!');
      }catch(error){
        alert("Error creating project: ",error);
      }
    }
      else{
        alert('Please install Metamask')
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Project</h1>
      <label htmlFor="title">Title:
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /></label>

      <label htmlFor="description">Description:
      <input
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></input></label>

      <label htmlFor="technologies">Technologies:
      <input
        type="text"
        id="technologies"
        value={technologies}
        onChange={(e) => setTechnologies(e.target.value)}
      /></label>

      <label htmlFor="budget">Budget:
      <input
        type="number"
        id="budget"
        value={budget}
        onChange={(e) => setBudget(parseInt(e.target.value))}
      /></label>

      <button type="submit">Save Project</button>
    </form>
  );
}

export default CreateProject;

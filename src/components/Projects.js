import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Spinner from './Spinner';
import contractABI from '../artifacts/contractAbI'; // Replace with the actual contract ABI
import ProjectItem from './ProjectItem';
const ethers = require('ethers');
const contractAddress = '0xb011243e1AE4627c9201F5d5CE21092f99D95732';

const Projects = () => {
  const [projects,setProjects]=useState([]);
  const [loading,setLoading]=useState(true);
  useEffect(() => {
    const getStructArray = async () => {
      try {
        setLoading(true);
        await window.ethereum.enable();
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);

        const result = await contract.getProjects();
        setLoading(false);
        setProjects(result);
        console.log(result);
      } catch (error) {
        console.error('Error calling struct array function:', error);
      }
    };

    getStructArray();
  }, []);

  return (
  <div>
    {loading && <Spinner/>}
    {projects.map((project,index)=>(
      <ProjectItem project={project} index={index}/>
    ))}
  </div>);

};

export default Projects;

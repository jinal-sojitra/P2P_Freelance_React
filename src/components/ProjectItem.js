import React from "react";
import contractABI from '../artifacts/contractAbI'; // Replace with the actual contract ABI
const contractAddress = '0xb011243e1AE4627c9201F5d5CE21092f99D95732';
const ethers = require("ethers")

const ProjectItem = ({project, index}) => {
  const sendRequestHandler = async() => {
    if (window.ethereum) {
      try {
        // Request account access if needed
        await window.ethereum.enable();

        // Get the provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(contractAddress, contractABI, signer);
        await contract.sendRequest(index);

        alert('Request sent successfully!');
      }
      catch(error){
        alert("Error sending request: ",error);
      }
    }
      else{
        alert('Please install Metamask')
      }
}

  // let {title, description, technologies, budget}=props
  return (
    <div>
      <div className="card" style={{"width": "18rem","margin":"10px"}}>
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <h6 className="card-subtitle mb-2 text-body-secondary">{project.technologies}</h6>
          <p className="card-text">
            {project.description}
          </p>
          {/* <a href="/" className="card-link">
            Card link
          </a> */}
            <button className='btn btn-primary' onClick={sendRequestHandler} >Send Request</button>
          
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;

import ProjectContext from "./projectContext";

const ProjectState=(props)=>{

const state={
    "name":"jinal",
    "class":"5b"
}

return (
    <ProjectState.provider value={state}>
        {props.children}
    </ProjectState.provider>
 )    
}

export default ProjectState;


import PropTypes from "prop-types";
const ComponentProfil = props =>{    
     return (
        <div>          
       <h2>{props.fullName}</h2>
       <h3>{props.profession}</h3>             
       <h5>{props.bio0}</h5>
       <h5>{props.bio1}</h5>              
       <h5>{props.bio2}</h5>
       <h5>{props.bio3}</h5>
       <h5>{props.bio4}</h5> 
       <h5>{props.bio5}</h5> 
       <a href="/">{props.bio6}</a>
       <br></br>
       <a href="/">{props.bio7}</a> 
       <br></br>
       <a href="/">{props.bio8}</a>                          
        </div>       
     )
    }
    ComponentProfil.propTypes = {          
      fullName: PropTypes.string,
      profession: PropTypes.string,
      bio0: PropTypes.string,  
      bio1: PropTypes.string,
      bio2: PropTypes.string,
      bio3: PropTypes.string,
      bio4: PropTypes.string,
      bio5: PropTypes.string,
      bio6: PropTypes.string,
      bio7: PropTypes.string,
      bio8: PropTypes.string  
     };
    export default ComponentProfil;
   


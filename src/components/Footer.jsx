// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import {FaGithub} from "react-icons/fa";

const Footer = () =>{
    return(
        <footer  style={{display:"flex",justifyContent:'center',alignItems:'center',padding:'50px'}}>
        
            <FaGithub  size={50}/>
        </footer>
    )
}

export default Footer;
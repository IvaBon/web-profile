// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


import {FaGithub} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";

const Footer = () =>{
    return(
        <footer  style={{display:"flex",justifyContent:'center',alignItems:'center',padding:'50px',color:'white',}}>
            <a rel="noreferrer" href="https://github.com/IvaBon?tab=repositories" target='_blank'><FaGithub  size={50}/></a>
            <a rel="noreferrer" href="https://www.linkedin.com/in/ivan-b-036628255/" target='_blank'><FaLinkedin size={50}/></a>
        </footer>
    )
}

export default Footer;
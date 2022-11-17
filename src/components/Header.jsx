import Hamburger from 'hamburger-react'
import './Style.css'
import { useState } from 'react'

const Header = () =>{
    const [hidden, setHidden] = useState(true);
    return(
        <header >
            <h1>Ivan Bonilla</h1>
            
            
            {!hidden ? 
            <nav>
                <a href="/">About me</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/contact">Contact</a>
                <a href="/resume">Resume</a>
            </nav> : null}
            <button style={{background:'none',border:'none'}}onClick={() => setHidden(s => !s)}><Hamburger color='white'/></button>
        </header>
    )
}

export default Header;
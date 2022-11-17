import Hamburger from 'hamburger-react'
import './Style.css'

const Header = (props) =>{
    
    return(
        <header >
            <h1>Ivan Bonilla</h1>
            
            
            {!props.hidden ? 
            <nav>
                <a href="/">About me</a>
                <a href="/portfolio">Portfolio</a>
                <a href="/contact">Contact</a>
                <a href="/resume">Resume</a>
            </nav> : null}
            <button style={{background:'none',border:'none'}}onClick={() => props.setHidden(s => !s)}><Hamburger color='white'/></button>
        </header>
    )
}

export default Header;
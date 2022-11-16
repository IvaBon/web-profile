import './assests/portfolio.css'


const Portfolio = () =>{
    return(
        <section id="navwork" class="section2container"> 
            <h2>Work</h2>
            <article>
                <a ><img className="img hover" src={require('../img/picture.png')} /></a>
                <a ><img className="img hover" src={require('../img/codeQuiz.png')} /></a>
                <a ><img className="img hover" src={require('../img/password.png')} /></a>
                <a ><img className="img hover" src={require('../img/scamazon.png')} /></a>
            </article>
    </section>
    )
}

export default Portfolio;
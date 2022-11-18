import './assests/portfolio.css'


const Portfolio = () =>{
    return(
        <section > 
            <h2>Portfolio</h2>
            <article>
                <a rel='noreferrer' href='https://github.com/IvaBon/01-group-project' target='_blank'><img className="img hover" src={require('../img/picture.png')} alt='Comparing city homepage'/></a>
                <a rel='noreferrer' href='https://github.com/IvaBon/04-code-quiz' target='_blank'><img className="img hover" src={require('../img/codeQuiz.png')} alt='coding quiz homepage'/></a>
                <a rel='noreferrer' href='https://github.com/IvaBon/03-password' target='_blank'><img className="img hover" src={require('../img/password.png')} alt='password generator homepage' /></a>
                <a rel='noreferrer' href='https://github.com/Hahkeye/scamazon' target='_blank'><img className="img hover" src={require('../img/scamazon.png')} alt='scamazon homepage'/></a>
            </article>
        </section>
    )
}

export default Portfolio;
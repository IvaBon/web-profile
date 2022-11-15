


const Home = () =>{
    const style={
        div:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        },
        h1:{},
        img:{
            borderRadius:'40%',
            maxWidth:'70px'
            
        },
        p:{
            padding:'20px'
        }
    }
        
    
    return(
        <div style={style.div}>
            
            <h1>About me</h1>
            <img src={require('../img/profile.JPG')} alt="Avatar" style={style.img}></img>
            <p style={style.p}> 
                My name is Ivan Bonilla. I have lived in Minnesota for my whole life. I have 
                completed my associate's in general education and plan to complete my undergraduate degree in the 
                future. Soon to be proficent in HTML, CSS, and JavaScript. Things I enjoy very widley because I like 
                playing video games and watching classic movies, but also I enjoy working out, snowboarding, and being in nature.
            </p>
        </div>
    )
}

export default Home;
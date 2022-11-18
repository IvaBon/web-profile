const Home = () =>{

    
    const style={
        div:{
            display:'flex',
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            padding:'5px',
            color:'white'
        },
        h1:{
        
        },
        img:{
            borderRadius:'40%',
            maxWidth:'80px',
            outline:'1px solid white'
        },
        p:{
            padding:'20px',
            maxWidth:'500px'
        }
    }
        
    
    return(
        <div style={style.div}>
            
            <h1>About me</h1>
            <img src={require('../img/profile.JPG')} alt="Avatar" style={style.img}></img>
            <p style={style.p}> 
                My name is Ivan Bonilla. I have lived in Minnesota for my whole life. I have 
                completed my associate's in general education and plan to complete my undergraduate degree in the 
                future. After completing my associate I decided to take a fullstack bootcamp that gave me fundemental know on front-end utiltes such as 
                HTML, CSS, JavaScript, JQuery, responsive design, Bootstrap, React, and also gave me fundemental knowledge on back-end utiltes such
                APIs,Node, Express, MySQL (Sequelize), MongoDB (Mongoose), REST, and GraphQL. Things I enjoy very widley because I like 
                playing video games and watching classic movies, but also I enjoy working out, snowboarding, and being in nature.
            </p>
        </div>
    )
}

export default Home;
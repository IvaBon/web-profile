


const Contact = () =>{
    const text={
        border:'2px solid white',
        borderRadius:'10px'
    }
    return(
        
        <form style={{display:'flex',flexDirection:'column',maxWidth:'400px',padding:'25px',margin:'10px 0', color:'white'}}>
            
                <h1>Contact Me</h1>
                <label>Name: </label>
                <input style={text} type="text" required />
                <label>Email: </label>
                <input style={text} type="text" required pattern="^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"/>
                <label >Message: </label>
                <textarea style={text} type="text" required/>
                <input style={{marginTop:'10px', maxWidth:'80px', borderRadius:'12px',backgroundColor:'#1982FC', color:'white', border:'none', padding:'5px'}} type='submit'/>
            
        </form>
    )
}

export default Contact;
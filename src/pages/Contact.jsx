


const Contact = () =>{
    const text={
        border:'2px solid white',
        borderRadius:'10px'
    }
    return(
        
        <form style={{display:'flex',flexDirection:'column',maxWidth:'400px',padding:'25px',margin:'10px 0'}}>
            
                <h1>Contact</h1>
                <label>First name:</label>
                <input style={text} type="text" required/>
                <label>Last name:</label>
                <input style={text} type="text" required/>
                <label >Message: </label>
                <textarea style={text} type="text" required/>
                <input style={{marginTop:'10px', maxWidth:'80px', borderRadius:'12px',backgroundColor:'#1982FC', color:'white', border:'none', padding:'5px'}} type='submit'/>
            
        </form>
    )
}

export default Contact;
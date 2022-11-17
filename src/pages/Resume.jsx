


const Resume = () =>{
    return(
        <div style={{display:'flex',flexDirection:'column',color:'white',position:'relative',left:'50px'}}>
            <h1 style={{}}>resume</h1>
            <p>Download my<a style={{textDecoration:'underline'}}href="">resume</a></p>
            <div>
                <h3>Front-end</h3>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>JQuery</li>
                    <li>Responsive design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div>
                <h3>Back-end</h3>
                <ul>
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQL, Sequalize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </div>
    )
}

export default Resume;
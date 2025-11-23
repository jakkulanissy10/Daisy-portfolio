

import './App.css'

function App() {
  return( 
    <div class ="main-container">
      <div className = "division-container">
        <div>
        <img src = "https://i.ibb.co/8n7hPxjW/Daisy-pic.jpg" className = "image"/>
        </div>
        <div>
        <h1>Daisy Jakkula</h1> 
        <h3 className = "about-heading">About Me</h3> 
        <p>I am Jakkula Daisy, a 2nd-year Electrical and Electronics Engineering (EEE) student at SR University. I am interested in electronics and I am currently exploring areas like VLSI design, semiconductor concepts, and electronic circuit systems. I enjoy learning programming and using simulation tools to build a strong foundation for future projects and internships.</p> 
        </div>
</div>
<div className = "third-container">
        <div className = "edu-container"> 
          <h2 className = "edu-heading">Education</h2> 
          <h4>SR University</h4> 
          <p>Btech(2024 - 2028)</p>  
          <h4>TS Residential Junior College</h4>
          <p>Intermediate (2021-2023)</p>
          <h4>TS Model</h4> 
          <p>School(2020 - 2021)</p> 
        </div> 
        <div  className = "skills-container">
          <h2 className = "skills-heading">Skills</h2> 
          <ul>
            <li>C</li>
            <li>Python</li>
            <li>HTML</li>
            <li>CSS</li> 
            <li>MATLAB</li>
            <li>LTspice</li>
          </ul>
          </div>
          <div className = "languages-container">
            <h2 className = "languages-heading">Languages</h2>
            <p>Telugu, English, Hindi</p>
          </div>
          </div> 
          <div className = "forth-division"> 
            <div className = "forth-para">
            <h2 className = "domain-heading">Domain of Interest</h2>
            <p>VLSI Design, Semi conductor devices, <br/> Digital Electronics, Electronic circuit design</p>
            </div>
            <div>
            <h2 className = "contact-heading">Contact Details</h2> 
            <p>Email: daisychinni09@gmail.com</p>
            <p>Linkdin: https://www.linkedin.com/in/daisy-jakkula-84048933a/ </p> 
            </div>

          </div>
        </div>
   
  )
}

export default App

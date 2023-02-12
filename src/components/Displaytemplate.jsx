import {useEffect } from "react"
const Displaytemplate = (props) => {
  const {displayObj,color} = props
  const {title,description,techStack,img,project,github} = displayObj;
  useEffect(() => {
    
    const display = document.querySelector('.display-component');
    
    display.style.opacity=0;
    display.animate([{opacity:0},{opacity:1}],{duration: 500,delay:500,"timing-function":'easeInOut' , "fill":"both"})
    
  },[props])
  return (
    <article className='display-component'   >
      {/* {...(img ? {style: {backgroundImage: 'url(src/images/walle.jpg)'}} : ``)}  */}
      <h1>{title}</h1>    
      <p>{description}</p>
      {project &&<ul className="project-List" >
      {techStack.map((value, index) => {
        return <li  key={index}>{value}</li>
      })}
      {github && <a className = 'gitRef'  href={github? github:''}>Github</a>}
    </ul>
     }
    {img && <div className="img-box" style={{  
  backgroundImage: `url(${img})`}}  alt ={title}/>}
    </article>
    
  )
}

export default Displaytemplate
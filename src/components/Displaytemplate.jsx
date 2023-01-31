import { useState,useEffect } from "react"
import { FiGithub} from "react-icons/fi";
const Displaytemplate = (props) => {
  const {displayObj} = props
  const [showImg,setShowImg] = useState(false);
  const {title,description,techStack,img,project,github} = displayObj;
  useEffect(() => {console.log('change')},[props])
  return (
    <article className='display' >
    {project?
      <h2>{title}</h2>
      :<h1 className="display-title">{title}</h1>
      }
      <p>{description}</p>
      {project &&<ul className="project-List">
      {techStack.map((value, index) => {
        return <li key={index}>{value}</li>
      })}
      {github && <a href={github? github:''}><FiGithub/></a>}
    </ul>
     }
     

    {/* {showImg && <img src={displayObj.img}  alt ={displayObj.title}/>} */}
    </article>
    
  )
}

export default Displaytemplate
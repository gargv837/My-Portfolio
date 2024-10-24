import { useRef } from "react";
import "./services.scss";
import {motion, useInView} from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNode, faPython, faJs } from '@fortawesome/free-brands-svg-icons';

const variants = {
   initial:{
    x: -500,
    y: 100,
    opacity: 0,
   },
   animate:{
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
        duration: 1,
        staggerChildren: 0.1,
    },
   },
};

const Services = () => {
  const ref = useRef()

  const isInView = useInView(ref, {margin:"-100px"});
  return (
    <motion.div className="services" variants={variants} initial="initial" ref={ref} animate={ window.innerWidth<= 738 ? "animate" : isInView && "animate"} >
        <motion.div className="textContainer" variants={variants}>
            <p>I focus on upskilling and learning new technologies
                <br/> to be able to develop better</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer" variants={variants}>
            <div className="title">
                <img src="/people.webp" alt="" />
                <h1><motion.b whileHover={{color:"orange"}}>Tech</motion.b>nologies</h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>I Work with</motion.b> Daily</h1>
                <button>Technical Skills</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants}>
            <div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>React.js</h2>
                <p className="icon">
                    <FontAwesomeIcon icon={faReact} size="3x" color="blue"/>
                </p>
            </div>
            <div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Node.js</h2>
                <p className="icon">
                <FontAwesomeIcon icon={faNode} size="3x" color="green"/>
                </p>
            </div>
            <div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Python</h2>
                <p className="icon">
                    <FontAwesomeIcon icon={faPython} size="3x" color="#3776AB"/>
                </p>
            </div>
            <div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>JavaScript</h2>
                <p className="icon">
                    <FontAwesomeIcon icon={faJs} size="3x" color="yellow"/>
                </p>
            </div>
        </motion.div>
    </motion.div>
  )
}

export default Services

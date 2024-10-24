import Sidebar from "../sidebar/Sidebar"
import "./navbar.scss"
import {motion} from "framer-motion"

const Navbar = () => {
  return (
    <div className="navbar">
        <Sidebar/>
        <div className="wrapper">
            <motion.span 
            initial={{opacity:0, scale:0.5}} 
            animate={{opacity:1, scale:1}}
            transition={{duration: 0.5}}
            >
              Vaibhav Garg
            </motion.span>
            <div className="social">
              <a href="https://www.linkedin.com/in/vaibhav-garg-8831b4210"><img src="/linkedin.png" alt="" /></a>
              <a href="https://github.com/gargv837"><img src="/github.png" alt="" /></a>
              <a href="https://leetcode.com/u/vgarg837"><img src="/leetcode.png" alt="" /></a>
              <a href="https://www.geeksforgeeks.org/user/gargv837"><img src="/gfg.png" alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Navbar

import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import "./cursor.scss";

const Cursor = () => {
    const [position, setPosition] = useState({x:0,y:0})

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({x:e.clientX, y:e.clientY})
        }

        document.addEventListener('mousemove', handleMouseMove)

        return () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }, []);

  return (
    <motion.div className="cursor" animate={{ x:position.x, y:position.y}}></motion.div>
  )
}

export default Cursor
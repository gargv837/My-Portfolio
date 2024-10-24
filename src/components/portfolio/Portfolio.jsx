import { useRef } from "react";
import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items = [
    {
        id: 1,
        title: "College Management System",
        image: "/Gestion-loginpage.png",
        description: "A user-friendly college management system built using MERN Stack. It simplifies academic management by handling student records, course tracking, and attendance, while enabling seamless communication between students and faculty. Designed with a REST API architecture, it ensures efficient data handling and scalability.",
    },
    {
        id: 2,
        title: "React Based Gym Website",
        image: "/gym-website.png",
        description: "A React-based gym website where users select workout type, muscle group, and intensity to receive a personalized workout plan tailored to their fitness goals and preferences, ensuring effective and efficient training.",
    },
    // {
    //     id: 3,
    //     title: "Video Chat Application",
    //     image: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    //     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    // },
    {
        id: 4,
        title: "Tic Tac Toe Game",
        image: "/tic-tac-toe.png",
        description: "A Simple Tic Tac Toe game build using Vanilla JavaScript, having both single and double player mode with unique User Interface.",
    },
]

const Single = ({item}) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target: ref});
    const y = useTransform(scrollYProgress, [0, 1], [-500,500]);
    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.image} alt=""/>
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <div className="button-container">
                            <button onClick={() => openProject(item)}>See Demo</button>
                            <button onClick={() => openCode(item)}>View Code</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

const openProject = (item) => {
    if(item.id === 1) {
        window.open('https://gestion-bay.vercel.app');
    }
    else if(item.id === 2) {
        window.open('https://enormous-nu.vercel.app');
    }
    else if(item.id === 4) {
        window.open('https://tic-tac-toe-game-sage-two.vercel.app');
    }
}

const openCode = (item) => {
    if(item.id === 1) {
        window.open('https://github.com/gargv837/Gestion');
    }
    else if(item.id === 2) {
        window.open('https://github.com/gargv837/Enormous');
    }
    else if(item.id === 4) {
        window.open('https://github.com/gargv837/Tic-Tac-Toe-Game');
    }
}

const Portfolio = () => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target: ref, offset: ["end end", "start start"]});
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });
    return (
      <div className="portfolio" ref={ref}>
          <div className="progress">
              <h1>Featured Works</h1>
              <motion.div style={{ scaleX }} className="progressBar"></motion.div>
          </div>
          {items.map((item) =>(
              <Single item={item} key={item.id}/>
          ))}
      </div>
  )
}

export default Portfolio
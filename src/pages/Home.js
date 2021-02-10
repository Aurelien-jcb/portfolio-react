import React from 'react';
import DynamicText from '../components/DynamicText';
import Mouse from '../components/Mouse';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import SocialNetwork from '../components/SocialNetwork';
import ScrollButton from '../components/ScrollButton';

const Home = () => {

    const variants = {
        initial: {
            opacity: 0,
            transition: { duration: 0.5 },
            x: 100,
        },
        visible: {
            opacity: 1,
            x: 0,
        },
        exit: {
            opacity: 0,
            trnsition: { duration: 0.3 },
            x: -100,
        }
    }

    return (
        <main>
            <Mouse />
            <motion.div 
                className="home"
                initial="initial"
                animate="visible"
                exit="exit"
                variants={variants}
                >
                <Navigation />
                <SocialNetwork />
                <div className="home-main">
                    <div className="main-content">
                        <h1>Aurélien Jacob</h1>
                        <h2><DynamicText /></h2>
                    </div>
                </div>
                <ScrollButton right={"/project-1"}/>
            </motion.div>
        </main>
    )
}

export default Home;

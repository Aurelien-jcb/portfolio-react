import ContactForm from '../components/ContactForm';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Logo from '../components/Logo';
import { motion } from 'framer-motion';
import Mouse from '../components/Mouse';
import Navigation from '../components/Navigation';
import React from 'react';
import SocialNetwork from '../components/SocialNetwork';
import ScrollButton from '../components/ScrollButton';

const Contact = () => {

    const variants = {
        in: {
            opacity: 1,
            x: 0,
        },
        out: {
            opacity: 0,
            x: 300,
        }
    }
    const transition = {
        ease: [0.03, 0.87, 0.73, 0.9],
        duration: 0.6
    }

    const date = new Date().getFullYear();
    return (
        <main>
            <Mouse />
            <motion.div 
            className="contact"
            initial="out"
            animate="in"
            exit="out"
            variants={variants}
            transition={transition}
            >
                <Navigation />
                <Logo />
                <ContactForm />
                <div className="contact-infos">
                    <div className="address">
                        <div className="content">
                            <h4>Adresse</h4>
                            <p>Lens, FRANCE</p>
                        </div>
                    </div>
                    <div className="phone">
                        <div className="content">
                            <h4>Téléphone</h4>
                            <CopyToClipboard text="0760740851" className="hover">
                                <p style={{cursor: 'pointer'}} 
                                className="clipboard" 
                                onClick={() => {
                                    alert('Téléphone copié !');
                                }}>07.60.74.08.51</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <div className="email">
                        <div className="content">
                            <h4>Email</h4>
                            <CopyToClipboard text="contact@aurelienjacob.fr" className="hover">
                                <p style={{cursor: 'pointer'}} 
                                className="clipboard" 
                                onClick={() => {
                                    alert('Email copié !');
                                }}>contact@aurelienjacob.fr</p>
                            </CopyToClipboard>
                        </div>
                    </div>
                    <SocialNetwork />
                    <div className="credit">
                        <p>Copyright &copy; {date} - Aurélien Jacob</p>
                    </div>
                </div>
                <ScrollButton  left={'/project-4'} />
            </motion.div>
            
        </main>
    )
}

export default Contact;

import { Button } from 'antd';
import React, { Component } from 'react';
import Footer from '../../components/Footer';
import { motion } from "framer-motion"

class Home extends Component {
    render() {
        return (
            <div id="home">
                <section className="hero">
                    <div>
                        <h2>como funciona</h2>
                        <h1>Encontre um pretendente para o seu animal</h1>
                        <Button type='secondary'>Comece agora!</Button>
                    </div>
                </section>
                <section className="middle">
                    <div className="box">
                        <motion.img initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="photo-img" src='photo1.png' />
                        <motion.div initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
                            <img src="cadastre-pet.svg" />
                            <h1>Cadastre seu <span>animal</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.</p>
                        </motion.div>
                    </div>
                    <div className="box invert">
                        <motion.img initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="photo-img" src='photo2.png' />
                        <motion.div initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
                            <img src="sear.svg" />
                            <h1>Procure <span>pretendentes</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.</p>
                        </motion.div>
                    </div>
                    <div className="box">
                        <motion.img initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="photo-img" src='photo3.png' />
                        <motion.div initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
                            <img src="agende.svg" />
                            <h1>Marque um <span>encontro</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.</p>
                        </motion.div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}

export default Home
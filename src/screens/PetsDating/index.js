import { Row } from "antd";
import Col from "antd/es/grid/col";
import React, { Component } from "react";
import Footer from "../../components/Footer";
import { motion } from "framer-motion"

class PetsDating extends React.Component {
    render() {

        const couples = [{ animal1: 'Abigail.png', animal2: 'Lisboa.png' }, { animal1: 'Guido.png', animal2: 'Chukito.png' }, { animal1: 'Lisboa.png', animal2: 'Abigail.png' }, { animal1: 'Bob.png', animal2: 'Naosei.png' }, , { animal1: 'Naosei.png', animal2: 'Pindamonhangaba.png' }, , { animal1: 'Bob.png', animal2: 'Naosei.png' }]
        return (
            <div id='petsdating'>
                <div className='hero'>
                    <h1><span>Pets</span> namorando</h1>
                    <h3>Duis aute irure dolor in reprehenderit in voluptate</h3>
                </div>
                <div className='container'>
                    <Row>

                        {couples.map((c, index) => (
                            <Col key={index} xs={24} md={12} xl={8}>
                                <motion.div initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
                                    <div>
                                        <img src={c.animal1} />
                                    </div>
                                    <div>
                                        <img src={c.animal2} />
                                    </div>
                                </motion.div>
                                <h2>{`${c.animal1.replace('.png', '')} e ${c.animal2.replace('.png', '')}`}</h2>
                            </Col>
                        ))}
                    </Row>
                    <div className="social-box">
                        <p>Publicidade 750x100</p>
                    </div>
                    <Row>
                        {couples.map((c, index) => (
                            <Col key={index} xs={24} md={12} xl={8}>
                                <motion.div initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
                                    <div>
                                        <img src={c.animal1} />
                                    </div>
                                    <div>
                                        <img src={c.animal2} />
                                    </div>
                                </motion.div>
                                <h2>{`${c.animal1.replace('.png', '')} e ${c.animal2.replace('.png', '')}`}</h2>
                            </Col>
                        ))}
                    </Row>
                </div>
                <Footer />
            </div>
        )
    }
}

export default PetsDating;
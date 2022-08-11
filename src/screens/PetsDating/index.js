import { Button, Row } from "antd";
import Col from "antd/es/grid/col";
import React, { Component } from "react";
import Footer from "../../components/Footer";
import { motion } from "framer-motion"
import Header from "../../components/Header";

class PetsDating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: [{ animal1: 'Abigail.png', animal2: 'Lisboa.png' }, { animal1: 'Guido.png', animal2: 'Chukito.png' }, { animal1: 'Lisboa.png', animal2: 'Abigail.png' }, { animal1: 'Bob.png', animal2: 'Naosei.png' }, { animal1: 'Naosei.png', animal2: 'Pindamonhangaba.png' }, { animal1: 'Bob.png', animal2: 'Naosei.png' }, { animal1: 'Abigail.png', animal2: 'Lisboa.png' }, { animal1: 'Guido.png', animal2: 'Chukito.png' }, { animal1: 'Lisboa.png', animal2: 'Abigail.png' }, { animal1: 'Bob.png', animal2: 'Naosei.png' }, { animal1: 'Naosei.png', animal2: 'Pindamonhangaba.png' }, { animal1: 'Bob.png', animal2: 'Naosei.png' }]
        }
    }

    componentDidMount(){
        document.title = "Pets namorando - PettLove"
      }

    onLoadMore = () => {
        this.setState({
            isLoading: true,
        });

        setTimeout(() => {
            this.setState({
                data: [...this.state.data, ...this.state.data.splice(2, 3)],
                isLoading: false,
            });
        }, 1500)
    }


    render() {

        return (
            <div id='petsdating'>
                <Header page={'pets-namorando'} />
                <div className='hero'>
                    <h1><span>Pets</span> namorando</h1>
                    <h3>Duis aute irure dolor in reprehenderit in voluptate</h3>
                </div>
                <div className='container'>
                    <Row>

                        {this.state.data.map((c, index) => (
                            <React.Fragment key={index}>
                                <Col id='col' xs={24} md={12} xl={8}>
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
                                {index == 5 &&
                                    (
                                        <Col className="social" span={24}>
                                            <div className="social-box">
                                                <p>Publicidade 750x100</p>
                                            </div>
                                        </Col>

                                    )}
                            </React.Fragment>
                        ))}
                    </Row>
                    <div className='btn-container'>
                        <Button onClick={this.onLoadMore} loading={this.state.isLoading} type="secondary">Carregar mais antigos</Button>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default PetsDating; 
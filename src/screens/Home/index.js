import { Button } from 'antd';
import React, { Component } from 'react';

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
                        <img className="photo-img" src='photo1.png' />
                        <div>
                            <img src="cadastre-pet.svg" />
                            <h1>Cadastre seu <span>animal</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.</p>
                        </div>
                    </div>
                    <div className="box invert">
                        <img className="photo-img" src='photo1.png' />
                        <div>
                            <img src="sear.svg" />
                            <h1>Procure <span>pretendentes</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.</p>
                        </div>
                    </div>
                    <div className="box">
                        <img className="photo-img" src='photo1.png' />
                        <div>
                            <img src="cadastre-pet.svg" />
                            <h1>Marque um <span>encontro</span></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec egestas, erat et convallis gravida, nisl libero imperdiet dolor, et vestibulum tortor quam in nunc.</p>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home
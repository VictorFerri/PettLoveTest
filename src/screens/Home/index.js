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
                        <Button>Comece agora!</Button>
                    </div>
                </section>
            </div>
        )
    }
}

export default Home
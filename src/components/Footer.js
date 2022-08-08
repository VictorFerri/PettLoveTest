import React, { Component } from "react";
import { BackTop } from 'antd';

class Footer extends Component {
    render() {
        const style = {
            
        }
        return (
            <footer id="footer">
                <div className="box">
                    <div>
                        <img src='logo-completo1.svg' />
                        <div className="pages">
                            <ul>
                                <li>
                                    <p>Sobre nós</p>
                                </li>
                                <li>
                                    <p>Como funciona</p>
                                </li>
                                <li>
                                    <p>Dúvidas frequentes</p>
                                </li>
                                <li>
                                    <p>Blog</p>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <p>Pets namorando</p>
                                </li>
                                <li>
                                    <p>Comece agora!</p>
                                </li>
                                <li>
                                    <p>Contato</p>
                                </li>
                            </ul>
                            <div>
                                <h3>Ajude uma entidade</h3>
                                <p><strong>SOS Vida Animal</strong></p>
                                <p>Banco Itaú: Ag <strong>8804</strong> Conta <strong>01234-5</strong></p>
                                <p>PIX: <strong>43.660.696/0001-95</strong></p>
                            </div>
                        </div>
                        <div className="docs">
                            <ul>
                                <li>Política de privacidade</li>
                                <li>Termos de uso</li>
                                <li>Política de Cookies</li>
                                <li>Política de cancelamento</li>
                            </ul>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div id='top-button'>
                <BackTop style={style}>
                    <img src='topicon1.svg' />
                </BackTop>
                </div>
            </footer>
        )
    }
}

export default Footer
import React, { Component } from "react";
import { BackTop, Input } from 'antd';
import { Button } from "antd";

class Footer extends Component {
    render() {
        return (
            <footer id="footer">
                <div className="box">
                    <div className="logo-container">
                        <img src='logo-completo1.svg' />
                        <div>
                            <p>Receba nossas novidades</p>
                            <div>
                                <Input type="text" placeholder="Digite seu email" />
                                <Button type="secondary" >Cadastrar</Button>
                            </div>
                        </div>
                    </div>
                    <div className='pages-container'>
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
                                <p><strong>SOS Vida Animal<img src='moreicon.svg' /></strong></p>
                                <p>Banco Itaú: Ag <strong>8804</strong> Conta <strong>01234-5</strong></p>
                                <p>PIX: <strong>43.660.696/0001-95</strong><img src='carbon_copy-file.svg' /></p>
                            </div>
                        </div>
                        <div className="social-links">
                            <div>
                                <img src='facebook.svg' />
                            </div>
                            <div>
                                <img src='instagram.svg' />
                            </div>
                            <div>
                                <img src='youtube.svg' />
                            </div>
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
                <div id='top-button'>
                    <div>
                        <p>
                            Pett Love - Relacionamento | CNPJ: 43.660.696/0001-95
                        </p>
                    </div>
                    <BackTop>
                        <img src='topicon1.svg' />
                    </BackTop>
                    <div>
                        <img id='logo' src='clickweblogo.svg' />
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer
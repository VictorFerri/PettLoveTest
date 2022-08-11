import React, { Component } from "react";
import {Link} from 'react-router-dom';
import { Button, Drawer, Menu } from "antd";

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openDrawer: false,
        }
    }
    render() {
        const { openDrawer } = this.state;

        return (
            <header id='header'>
                <Button onClick={() => this.setState({ openDrawer: true })} className='menu' type="primary"><img src='menuIcon.svg' /><span>Menu</span></Button>
                <Link to={'/'}>
                    <img src="logo.svg" />
                </Link>
                <Button type='text' className='login'><img id='loginIcon' src='loginIcon.svg' /><span>Entrar</span></Button>
                <Drawer  onClose={() => this.setState({ openDrawer: false })} placement="left" visible={openDrawer}>
                    <Menu defaultSelectedKeys={this.props.page}>
                        <Menu.Item key='sobre-nos'><Link to='/sobre-nos'>Sobre nós</Link></Menu.Item>
                        <Menu.Item key='como-funciona'><Link to='/'>Como funciona</Link></Menu.Item>
                        <Menu.Item key='duvidas-frequentes'><Link to='/duvidas-frequentes'>Dúvidas frequentes</Link></Menu.Item>
                        <Menu.Item key='blog'><Link to='/blog'>Blog</Link></Menu.Item>
                        <Menu.Item key='pets-namorando'><Link to='/pets-namorando'>Pets namorando</Link></Menu.Item>
                        <Menu.Item key='comece-agora'><Link to='/comece-agora'>Comece agora!</Link></Menu.Item>
                        <Menu.Item key='contato'><Link to='/contato'>Contato</Link></Menu.Item>
                    </Menu>
                </Drawer>
            </header>
        )
    }
}

export default Header
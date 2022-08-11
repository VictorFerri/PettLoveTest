import React, { Component } from "react";
import { Button } from "antd";

class Header extends Component {
    render() {
        return (
            <header id='header'>
                <Button className='menu' type="primary"><img src='menuIcon.svg' /><span>Menu</span></Button>
                <img src="logo.svg" />
                <Button type='text' className='login'><img id='loginIcon' src='loginIcon.svg' /><span>Entrar</span></Button>
            </header>
        )
    }
}

export default Header
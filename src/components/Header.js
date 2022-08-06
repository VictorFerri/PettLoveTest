import React, { Component } from "react";
import { Button } from "antd";
import {FaRegUser} from 'react-icons/fa';

class Header extends Component {
    render() {
        return (
            <header id='header'>
                <Button className='menu' type="primary"><img src='menuIcon.svg' />Menu</Button>
                <img src="logo.svg" />
                <Button type='text' className='login'><img id='loginIcon' src='loginIcon.svg' />Entrar</Button>
            </header>
        )
    }
}

export default Header
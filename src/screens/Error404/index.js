import { Button } from "antd";
import React, { Component } from "react";
import { withRouter } from "react-router-dom"
import Footer from "../../components/Footer";
import Header from "../../components/Header";

class Error404 extends Component {
    constructor(props) {
        super(props);       
    }
    componentDidMount(){
        document.title = "Error - PettLove"
      }
    
    render () {
        return (
            <div id='error'>
                <Header page={this.props.location.pathname.replace('/', '')} />
                <div className='hero'>
                    <p>
                        Página não encontrada :(
                    </p>
                    <Button onClick={() => this.props.history.push('/')} type='secondary'>Voltar</Button>
                </div>
                <Footer />
            </div>
        )
    }
}

export default withRouter(Error404);
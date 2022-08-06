import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { ConfigProvider } from "antd";
import { Routes } from "../../config/routes";
import Error404 from "../../screens/Error404";
import pt_BR from 'antd/es/locale/pt_BR';
import Header from "../../components/Header";
import '../../styles/app.scss';

class Main extends Component {
    render() {
        return (
            <ConfigProvider locale={pt_BR}>
                <Header />
                <Switch>
                    {Routes.map((route, i) => (
                        <Route
                            key={i}
                            exact={route?.exact ?? true}
                            path={route.path}
                            component={(props) => {
                                return <route.component {...props} />;
                            }}
                        />
                    ))}
                    <Route path="*" component={Error404} />
                </Switch>
            </ConfigProvider>
        )
    }
}

export default withRouter(Main);
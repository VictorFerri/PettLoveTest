import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import Main from "./screens/Main";

class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL || '/'
      }>
        <Main />
      </BrowserRouter>
    );
  }
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

// Interface
import Navbar from './interface/navbar'
import Footbar from './interface/footbar'
// Styling
import style from '../assets/style/default/index.scss'

// Content
import News from './content/News'
import Signup from './content/Signup'

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <div className="App">
          <link rel="stylesheet" type="text/css" href={style} />
          <Navbar />
          <div id="container">
            <div id="content" style={{ textAlign: "center" }}>
              <div>
                <Route path="/" component={News} />
                <Route path="/signup" component={Signup} />
              </div>
            </div>
          </div>
          <Footbar />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

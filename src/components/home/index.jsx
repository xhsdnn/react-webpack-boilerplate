import React from 'react';
import ReactDOM from 'react-dom';
import Hello from '../hello/index.jsx';
import './home.css'

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <img src="static/images/logo.svg" alt="" />
        <Hello />
        <p>
          <a href="https://reactjs.org/">React</a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://webpack.js.org/">Webpack</a>
        </p>
      </div>
    );
  }
}

ReactDOM.render(<Home />, document.getElementById('root'));
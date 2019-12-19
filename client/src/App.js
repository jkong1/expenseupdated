import React, {Component} from 'react';
import './App.css';
import RouteConnection from './component/routes'
import Nav_Bar from './component/navbar'
import Nav_Bar2 from './component/navbar2'

class App extends Component {
  constructor(){
    super();
    this.state = {
      auth:null
    }
  }
  componentDidMount(){
    fetch('/api/checktoken')
    .then(res => {
      if(res.status === 200){
        this.setState({
          auth:true
        })
      }
    })
  }

  render(){
    const {auth} = this.state;
    return (
      <div>
        {auth ? (<Nav_Bar2 />) : (<Nav_Bar />)}
        <RouteConnection />
      </div>
    );
  }
}

export default App;

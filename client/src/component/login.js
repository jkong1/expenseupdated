import React, {Component} from 'react'



class Login extends Component{
    constructor(){
        super()
        this.state = {
            username:"",
            password:"",
            display:""
        }
        this.login = this.login.bind(this);
        this.getInfo = this.getInfo.bind(this);
    }
    getInfo = event =>{
        const {name,value} = event.target;
        this.setState({[name]:value});
    
    }
    login(){
        fetch('/api/login',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        }).then((res) => {
            if(res.status === 200){
                window.location.href='/home'
            }else {
                this.setState({
                    display:"Please enter a proper username or password"
                })
            }
        })

    }
    render(){
        const login = {
            textAlign:'center',
            paddingTop:'30px',
            color:'black',
            paddingBottom:'20px'
        }
        const input = {
            textAlign:'center',
            margin:'auto',
            color:'black'
        }
        const text = {
            textAlign:'center',
            margin:'auto',
            color:'black',
            paddingTop:'10px'
        }
        return(
            <div>
                <div style={{margin:'auto', background:'white', width:'50%', height:'500px', marginTop:'50px'}}>
                    <p style={text}>{this.state.display}</p>
                    <h1 style={login}>Login</h1>
                    <div style={input}>
                            <label>Username</label>
                            <input style={{borderRadius:'5px', width:'200px', margin:'auto'}}
                            name="username"
                            className="form-control" 
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.getInfo}
                            ></input>
                    </div>
                    <br />
                    <div style={input}>
                        <label>Password</label>
                        <input style={{borderRadius:'5px', width:'200px', margin:'auto'}}
                        className="form-control"
                        name="password"  
                        placeholder="Password"
                        type="password"
                        value={this.state.password}
                        onChange={this.getInfo}
                        ></input>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <button style={{marginTop:'20px',width:'200px'}} type="button" className="btn btn-primary" onClick={this.login}>Login</button>
                        <br/>
                        <a style={{marginTop:'30px', width:'200px'}} role="button" className="btn btn-primary" href="/signup">Sign Up</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
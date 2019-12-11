import React, {Component} from 'react'



class Login extends Component{
    constructor(){
        super()
        this.login = this.login.bind(this)
    }
    login(){

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
        return(
            <div>
                <div style={{margin:'auto', background:'white', width:'50%', height:'500px', marginTop:'50px'}}>
                    <h1 style={login}>Login</h1>
                    <div style={input}>
                            <label for="formGroupExampleInput">Username</label>
                            <input style={{borderRadius:'5px', width:'200px', margin:'auto'}}
                            class="form-control" 
                            placeholder="Username"
                            ></input>
                    </div>
                    <br />
                    <div style={input}>
                        <label>Password</label>
                        <input style={{borderRadius:'5px', width:'200px', margin:'auto'}}
                        class="form-control"  
                        placeholder="Password"
                        type="password"
                        ></input>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <button style={{marginTop:'20px',width:'200px'}} type="button" class="btn btn-primary">Login</button>
                        <br/>
                        <a style={{marginTop:'30px', width:'200px'}} role="button" class="btn btn-primary" href="/signup">Sign Up</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
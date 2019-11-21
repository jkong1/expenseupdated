import React, {Component} from 'react'



class Login extends Component{
    render(){
        const login = {
            textAlign:'center',
            paddingTop:'50px'
        }
        const input = {
            textAlign:'center',
            margin:'auto',
        }
        return(
            <div>
                <div style={{margin:'auto', background:'white', width:'50%', height:'500px', marginTop:'50px'}}>
                    <h1 style={login}>Login</h1>
                    <div style={input}>
                        <p>Username</p>
                        <input style={{borderRadius:'5px', width:'200px'}}
                        placeholder="Username"
                        ></input>
                    </div>
                    <br />
                    <div style={input}>
                        <p>Password</p>
                        <input style={{borderRadius:'5px', width:'200px'}} 
                        type="password"
                        ></input>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <button style={{marginTop:'20px',width:'200px'}} type="button" class="btn btn-primary">Login</button>
                        <br/>
                        <button style={{marginTop:'30px', width:'200px'}}  type="button" class="btn btn-primary">Sign Up</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
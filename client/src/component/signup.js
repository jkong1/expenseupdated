import React, {Component} from 'react'




class Signup extends Component {
    constructor(){
        super()
        this.state ={
            username:"",
            password:"",
            display:""

        }
        this.getInfo = this.getInfo.bind(this)
        this.submit = this.submit.bind(this)

    }
    getInfo(event){
        const {name,value} = event.target;
        this.setState({[name]:value})
    
    }
    submit(e){
        e.preventDefault();
        fetch('/api/createuser',{
            method:'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: this.state.username,
              password: this.state.password
            })
        }).then((res) => {
            if(res.status === 200){
                window.location.href='/login'
            }else {
                this.setState({
                    display:"Please enter a proper username or password"
                })
            }
        })


    }
    render() {
        return (
            <div className= "mx-auto mt-5" style={{background:'white',width:'500px',height:'500px'}}>
                <p className="text-dark text-center pt-3">{this.state.display}</p>
                <h1 className="text-center text-dark pt-3">Sign Up</h1> 
                <p className="pt-3 pb-1 text-center text-dark">Username</p>
                    <div className='row justify-content-md-center'>
                        <input 
                        name="username"
                        type="text" 
                        className="form-control is-valid col-6" 
                        id="validationServer01"
                        onChange = {this.getInfo}
                        placeholder="Username"
                        value = {this.state.username} 
                        required/>
                        <div class="invalid-feedback text-dark">
                            Please choose a username.
                        </div>
                    </div>
                <div>
                <p className="pt-3 pb-1 text-center text-dark">Password</p>
                <div className='row justify-content-md-center'> 
                    <input
                    name="password" 
                    type="password" 
                    className="form-control col-6" 
                    id="inputPassword4"
                    onChange = {this.getInfo}
                    value={this.state.password} 
                    placeholder="Password" required/>
                    <div className="invalid-tooltip">
                                Please enter a password
                    </div>
                </div>
                <div className='row justify-content-md-center'>
                    <button 
                    type="button" 
                    className="btn btn-primary col-6 mt-3"
                    onClick={this.submit}
                    >Sign Up</button>
                </div>
                </div>
            </div>
        )
    }
}

export default Signup
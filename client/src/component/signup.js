import React, {Component} from 'react'




class Signup extends Component {
    constructor(){
        super()
        this.state ={
            username:"",
            password:""

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
        })

    }
    render() {
        return (
            <div>
                <div className="col-md-2 mb-3">
                    <label for="validationTooltipUsername">Username</label>
                    <div>
                        <input 
                        name="username"
                        type="text" 
                        className="form-control" 
                        id="validationTooltipUsername" 
                        onChange = {this.getInfo}
                        placeholder="Username"
                        value = {this.state.username} 
                        aria-describedby="validationTooltipUsernamePrepend" required/>
                        <div className="invalid-tooltip">
                            Please choose a unique and valid username.
                        </div>
                    </div>
                </div>
                <div className="form-group col-md-2">
                <label for="inputPassword4">Password</label>
                <input
                name="password" 
                type="password" 
                className="form-control" 
                id="inputPassword4"
                onChange = {this.getInfo}
                value={this.state.password} 
                placeholder="Password" required/>
                <div className="invalid-tooltip">
                            Please enter a password
                </div>
                <button 
                type="button" 
                className="btn btn-primary"
                onClick={this.submit}
                >Sign Up</button>
                </div>
            </div>
        )
    }
}

export default Signup
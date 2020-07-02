import React, {Component} from 'react'


class Input extends Component{
    constructor(){
        super();
        this.state = {
            price:"",
            name:"",
            option:"",
            response:"",
            message:null
        }
        this.getInfo = this.getInfo.bind(this);
        this.submitData = this.submitData.bind(this);
    }
    getInfo = event =>{
        const {name,value} = event.target;
        this.setState({[name]:value});
    

    }
    submitData = (e) => {
        e.preventDefault();
        fetch('/api/submitData',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                price: this.state.price,
                name: this.state.name,
                option:this.state.option
            })
            }).then((res) => {
                if(res.status === 200){
                    this.setState({
                        response:"Submission was successful" 
                    })
                }else {
                    this.setState({
                        response:"An error occur please try again"
                    })
                }
            })
    }
    render(){
        const margin = {
            marginTop:'50px'
        }
        return(
            <div style={{textAlign:'center', marginTop:'100px'}}>
                <p style={{color:'white'}}>{this.state.response}</p>
                <form>
                        <select
                        name="option"
                        value={this.state.option} 
                        onChange={this.getInfo}
                        class="custom-select my-1 mr-sm-2 col-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>Select what expense</option>
                            <option value="Travel">Travel</option>
                            <option value="Food & Drink">Food & Drink</option>
                            <option value="Subscription">Subscription</option>
                            <option value="Groceries">Groceries</option>
                            <option value="Bills & Utilities">Bills & Utilities</option>
                        </select>
                </form>
                <input 
                class="col-sm-2 col-form-label" 
                style={margin} type="text" 
                placeholder="Name"
                name="name"
                onChange={this.getInfo}
                value={this.state.name}
                ></input>
                <br />
                <input 
                class="col-sm-2 col-form-label" 
                style={margin} type="text" 
                placeholder="Price"
                name="price"
                onChange={this.getInfo} 
                value={this.state.price}
                ></input>
                <br />
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                    <label class="form-check-label" for="inlineCheckbox1">Monthly</label>
                </div>
                <br />
                <button type="button" style={margin} onClick={this.submitData}  class="btn btn-primary col-sm-2">Submit</button>
            </div>
        )
    }
}

export default Input
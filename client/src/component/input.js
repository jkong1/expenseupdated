import React, {Component} from 'react'


class Input extends Component{
    render(){
        const margin = {
            marginTop:'50px'
        }
        return(
            <div style={{textAlign:'center', marginTop:'100px'}}>
                <form>
                        <select class="custom-select my-1 mr-sm-2 col-sm-2" id="inlineFormCustomSelectPref">
                            <option selected>Select what expense</option>
                            <option value="1">Travel</option>
                            <option value="2">Food</option>
                            <option value="3">Subscription</option>
                        </select>
                </form>
                <input class="col-sm-2 col-form-label" style={margin} type="text" placeholder="Price"></input>
                <br />
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
                    <label class="form-check-label" for="inlineCheckbox1">Monthly</label>
                </div>
                <br />
                <button type="button" style={margin}  class="btn btn-primary col-sm-2">Submit</button>
            </div>
        )
    }
}

export default Input
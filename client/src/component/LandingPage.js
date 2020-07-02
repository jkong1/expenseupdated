import React, {Component} from 'react'

class LandingPage extends Component{

    render(){
        const landpage = {
            textAlign:'center',
            
            paddingTop:'150px',
            color:'white'
        }
        return(
            <div style={landpage}>
                <h1>Expense Master</h1>
                <h1>An easy way to view and manager your money</h1>
            </div>
        )
    }
}
export default LandingPage;
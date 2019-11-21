import React, {Component} from 'react'

class LandingPage extends Component{

    render(){
        const landpage = {
            textAlign:'center',
            paddingTop:'150px',
            color:'#10316b'
        }
        return(
            <div style={landpage}>
                <h1>Ticket Master</h1>
                <h1>An easy way to report and manage ticket report</h1>
            </div>
        )
    }
}
export default LandingPage;
import React, {Component} from 'react'


class Error extends Component{
    render(){
        const errorPage = {
            textAlign:'center',
            paddingTop:'50px'
        }
        return(
            <div style={errorPage}>
                <h1>No page was found</h1>
                <h1>A developer will get to it</h1>
            </div>
        )
    }
}

export default Error;
import React , {Component} from 'react';
import Report from './Report';


class Home extends Component {
    render() {
        return(
            <div>
                <div style={{float:'left', width:'50%'}}>
                    <h1>Report</h1>
                    <Report />
                </div>
                <div style={{float:'left', width:'50%'}}>
                    <h1>Chart</h1>
                </div>
                <div style={{float:'left', width:'50%'}}>
                    <h1>Table</h1>                
                </div>
                <div style={{float:'left', width:'50%'}}>
                    <h1>Top Spending</h1>
                </div>
            </div>
        )
    }
}

export default Home
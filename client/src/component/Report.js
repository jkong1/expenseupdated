import React, {Component} from 'react';


class Report extends Component {
    _isMounted = false;
    constructor(){
        super()
        this.state ={
            items:[],
        }
    }
    componentDidMount(){
        this._isMounted = true;
        this.getdata();
    }
    getdata(){
        fetch('/api/getReport')
        .then((response) => response.json())
        .then((data) => {
            if(this._isMounted){
                console.log(data);
                this.setState({items:data})
            }
        }).catch(error => {
            console.log(error)
            return null
        })     
    }
    componentWillUnmount(){
        this._isMounted = false
    }
    getitems(){
        console.log(this.state.items[0])
    }
    render(){
        return (
            <table class="table table-dark table-hover table-responsive-md" style={{width:'auto'}}>
                <thead className="thead-light" >
                    <tr>
                        <th scope="col">Option</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.items.map(items => <tr><td>{items.option}</td><td>{items.name}</td><td>{items.price}</td></tr>)}
                </tbody>
                <h1>{this.state.data}</h1>
            </table>
        )
    }
}

export default Report;
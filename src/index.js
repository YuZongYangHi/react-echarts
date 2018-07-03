import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Datetime  from './datetime'

class Publice extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            time: "ben",
            start: "",
            stop: ""
        }
    }
    handleChangeTime(value) {
        this.setState({
            time: value,
            start: value
        })
        this.handleBasice()
    }
    handleBasice() {
       /*do date */


        if (this.state.time == 'ben') {
            this.setState({
                start: 'a' ,
                stop: 'b' 
            })
        } else {
            this.setState({
                start:'c',
                stop: 'd'
            })
        }
    }
    componentWillMount() {
        this.handleBasice()
    }
    render() {
        return (
            <div>
                <App {...this.state}></App>
                <Datetime time={this.state.time} change={this.handleChangeTime.bind(this)}/>
            </div>
        )
    }
}
ReactDOM.render(<Publice/>, document.getElementById('root'));
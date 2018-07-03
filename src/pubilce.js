import React,{Component} from 'react';

export default class Publisher extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            post: ''
        }
    }
    componentWillMount = () => {
      this.setState({
          post: this.props.match.params.user
      })
    };
    render() {
        return (
            <div>
                <h1>{this.state.post}</h1>
            </div>
        )
    }
}
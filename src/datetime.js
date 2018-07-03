import './time-style.css'
import React,{Component} from 'react';
import { Select } from 'antd';
const Option = Select.Option;

export default class Datetime extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="time-style">
               <Select defaultValue={this.props.time} style={{ width: 120 }} onChange={(e) => {this.props.change(e) } }>
                    <Option value="ben">本周</Option>
                    <Option value="shang">上周</Option>
                 </Select>
            </div>
        )
    }
}
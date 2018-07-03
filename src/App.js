import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import echarts from 'echarts'
import QS from 'qs' ;

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            "CDN": [],
            "DATABASE": [],
            "VIDEO": [],
            "STORAGE": []
        }
    }
   componentDidUpdate() {
        this.showChart(this.state)
    }
    componentWillMount() {
        this.setState({
                CDN: [300,150,240,310,400,400],
                STORAGE: [400,550,210,130,450,231,141],
                VIDEO: [700,321,412,541,221,422,122],
                STORAGE: [320,195,120,123,442,231,512],
                DATABASE:[600,150,123,216,214,223,156],
        }) 

    }
    componentWillReceiveProps(nextprops) {
        //父更新state时子调用进行请求相关数据(本周，上周)
        let start = nextprops.time
        if (String(start) === "ben") {
            this.setState({
                CDN: [300,150,240,310,400,400,231],
                STORAGE: [400,550,210,130,450,231,141],
                VIDEO: [700,321,412,541,221,422,122],
                STORAGE: [320,195,120,123,442,231,512],
                DATABASE:[600,150,123,216,214,223,156],
            })
        } else {
            this.setState({
                CDN: [600,250,170,360,240,310,400,123],
                STORAGE: [600,350,470,560,240,310,100],
                VIDEO: [600,250,170,360,240,310,400],
                STORAGE: [620,240,180,350,270,330,430],
                DATABASE:[600,350,470,360,240,210,340],
               
            })
        }
    }
    showChart(netstate) {
        console.log(netstate)
        var myChart = echarts.init(document.getElementById('main'));
        console.log(this.props.start)
        myChart.setOption({
            title: {
                text: ``
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['CDN', 'DATABASE', 'VIDEO', 'STORAGE']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['Monday', 'Tuesday', 'Wednesday', 'Friday', 'Thursday', 'Saturday', 'Sunday']
            },
            yAxis: {
                type: 'value'
            },

            series: [
                {
                    name: 'CDN',
                    type: 'line',
                    stack: '总量',
                    data: netstate.CDN
                },
                {
                    name: 'DATABASE',
                    type: 'line',
                    stack: '总量',
                    data: netstate.DATABASE
                },
                {
                    name: 'VIDEO',
                    type: 'line',
                    stack: '总量',
                    data: netstate.VIDEO
                },
                {
                    name: 'STORAGE',
                    type: 'line',
                    stack: '总量',
                    data: netstate.STORAGE
                }
            ]
        }, true)
    }
    componentDidMount() {
        this.showChart(this.state)
    }

    render() {
        return (
            <div id="main" style={{ width: 1406, height: 500, float: "left" }}></div>
        );
    }
}
export default App;

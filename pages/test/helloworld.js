import React,{Component} from 'react'
import {connect} from 'dva'

@connect((state)=>(state))
class HelloWorld extends Component{
    constructor(props) {
        super(props);
        this.state={
            info:''
        }
    }

    componentDidMount() {
        this.props.dispatch({
            type:'hello/testGithub'
        });
        this.props.dispatch({
            type:'hello/testSouhu'
        });
        this.props.dispatch({
            type:'hello/testDouban'
        });
    }

    render() {
        return(
            <div>
                hello world! {this.state.info}
            </div>
        );
    }
}
export default HelloWorld;
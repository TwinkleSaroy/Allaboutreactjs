import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(){
        super();
          this.state={
            name:'twinkle'
          }
          console.log("constructor");
         
      }
        componentWillUnmount(){
          console.log('will mount');
        }
        componentDidMount(){
          console.log('did mount')
        }
      btnEvt(){
        this.setState({
      name:'saroy'
        })
      }
      
    render() {
        return (
            <div>
                 <h2 style={{color:'blue'}}>This is Class component</h2>
                 <h2>Use of state for updation</h2>
        <h1>{this.state.name}</h1>
        <button onClick={this.btnEvt.bind(this)}  style={{color:'blue'}}>update</button>
            </div>
        )
    }
}

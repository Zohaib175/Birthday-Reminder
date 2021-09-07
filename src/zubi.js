import React, {Component } from 'react'
import Army from './withArm';
 class Zubi extends Component {
    state = { 
        gunshot : 0
    };
    handlegunshot = () => {
        this.setState({gunshot: this.state.gunshot + 1 })
    }
    render() {
         return (
         <div>
           <h3 onMouseOver={this.handlegunshot}>
            Zubi {this.props.hocgunname} gunshot: {this.state.gunshot}</h3>
         </div> 
          )
        }
      }
      export default Army(Zubi)
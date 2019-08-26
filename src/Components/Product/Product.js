import React, {Component} from 'react'
import { thisExpression } from '@babel/types';

export default class Product extends Component {
    render() {

    
        return(
            <div>
                <h1>Hi</h1>
                <div className='item-box'>
                <ul>{this.props.name}</ul>
                <ul>{this.props.price}</ul>
                <img src={this.props.imgurl} alt =''/>
                </div>
               Product

            </div>
        )
    }
}
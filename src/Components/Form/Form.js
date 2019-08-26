import React, {Component} from 'react'
import axios from 'axios'


export default class Form extends Component {
    constructor() {
        super() ;
        this.state = {
            name: '',
            price: 0,
            imgurl:''
        }
    }

    

    inputName = (val) => {
        this.setState({name: val})
    }
    inputPrice =(val) => {
        this.setState({ price: val})
    }

    inputImage=(val)=> {
        this.setState({imgurl: val})
    }

    addItem =(data) => {
     const {name, price, imgurl} = this.state
    const body = {name,price,imgurl} 
        this.setState({addItem: data, name: '', price:0, imgurl: ''})
       
    }

    clearInputBox=(data) => {
        this.setState({clearInputBox: data, name:'', price: 0, imgurl:''})
    }

    render() {
    
        return(
            <div className ='item-box'>
                <div>
                    Form
                <input placeholder ="Name" onChange={(e) =>this.inputName(e.target.value)} value ={this.state.name} />
                <input placeholder ="Price" onChange={(e) =>this.inputPrice(e.target.value)} value={this.state.price} />
                <input placeholder ="Image URL" onChange={(e) => this.inputImage(e.target.value)} value={this.state.imgurl} />
           
                <button type ="reset" onClick ={this.state.inputReset}> Cancel </button>
                <button className = "button" onClick ={this.state.addItem}> Add </button>
                </div>
            </div>
        )
    }
}
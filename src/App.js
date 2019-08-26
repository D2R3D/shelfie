import React, {Component} from 'react'
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form'
import Header from './Components/Header/Header'
import Product from './Components/Product/Product'
import axios from 'axios'




export default class App extends Component {
  constructor(props) {
    super(props);

    this.state ={
        inventory: [{name:'Derek',price: 20, imgurl:'https://vignette.wikia.nocookie.net/iso33private/images/9/95/Charizard.png/revision/latest?cb=20170727171344'}, {name:'me', price: 100, imgurl: ''},
      {name: 'test', price: 30, imgurl: 'https://vignette.wikia.nocookie.net/iso33private/images/9/95/Charizard.png/revision/latest?cb=20170727171344'}]
    }
  }

  componentDidMount=() => {
    this.getInventory()
  }

  getInventory = (data) => {
    axios.get('/api/inventory').then((response) => {
      this.setState({
        inventory: response.data
      })
    })
  }


  render() {
    
    return (
      <div>
      <Dashboard inventory = {this.state.inventory} />
      <Form />
      <Header />
      <Product />
      </div>

    )
  }
}
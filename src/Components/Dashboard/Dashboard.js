import React, {Component} from 'react'
import Product from '../Product/Product'



class Dashboard extends Component {
   

  render() {

       let mapInventory = this.props.inventory.map((inventory, i) => {
           return <Product key = {i} inventory ={inventory}/>
       })
  
    
    
        return(    
            <div>  
            <div>
                
            <Product />
         
            </div>
            {mapInventory}
            </div>   
        )
    }
}

        
export default Dashboard;
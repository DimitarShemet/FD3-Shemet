import React, { Fragment } from 'react'
import './Card.css'

class Card extends React.Component{
     
  state = {
    id:this.props.code,
    product:this.props.product,
    price:this.props.price,
    url:this.props.url,
    balance: this.props.balance
    }
  
    render() {
      console.log(this.state.product)
      return (
       
          <div>
            {this.props.workMode===1
                ?  <div className='MyComponent__Card'>
                  <span className='MyComponent__Card__title'> {this.props.product}</span> <br></br>
                    <span>{"Название товара: "+this.props.product}</span><br></br>
                    <span>{"Цена товара: "+this.props.price}</span> <br></br>
                    </div>
                    : ""
                }
            {this.props.workMode===2
                ?  <div className='MyComponent__Card'>
                  <span>ID: {this.props.id}</span> <br></br>

                  <label >Name:</label>
                 <input type="text"  value={this.state.product} /> <br></br>

                 <label >Price:</label>
                 <input type="text"  value={this.state.price} /> <br></br>

                 <label >URL: </label>
                 <input type="text"  value={this.props.url} /> <br></br>

                 <label >Quanity: </label>
                 <input type="text"  value={this.state.balance} /> <br></br>
                    </div>
                    : ""
                }
           
          </div>
      );
      
  }
    
    }
    
    export default Card
    
    
    
    
    
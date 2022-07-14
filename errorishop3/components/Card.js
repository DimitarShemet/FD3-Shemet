import React, { Fragment } from 'react'
import './Card.css'

class Card extends React.Component{
     
  state = {
    id:this.props.code,
    product:this.props.product,
    price:this.props.price,
    url:this.props.url,
    balance: this.props.balance,
    productErr: "",
    priceErr: "",
    urlErr: "",
    balanceErr: ""
    }

 changeName =(EO)=>{
  this.nameErr(EO.target.value)
  this.setState({product:EO.target.value})
 }

 nameErr= (err) => {
  if(err===""){
  this.setState({productErr:"Введите название продукта "})
  console.log("Ошибка")
  }
  else
  this.setState({productErr:""})
  
}
 changePrice =(EO)=>{
  this.priceErr(EO.target.value)
  this.setState({price:EO.target.value})
 }
 
 priceErr= (err) => {
  if(err===""){
    this.setState({priceErr:"Введите цену продукта "})
    console.log("Ошибка")
    }
    else
    this.setState({priceErr:""})
}

 changeUrl =(EO)=>{
  this.urlErr(EO.target.value)
  this.setState({url:EO.target.value})
 }

 urlErr= (err) => {
  if(err===""){
    this.setState({urlErr:"Введите url продукта "})
    console.log("Ошибка")
    }
    else
    this.setState({urlErr:""})
}

 changeBalance =(EO)=>{
  this.balanceErr(EO.target.value)
  this.setState({balance:EO.target.value})
 }

  balanceErr= (err) => {
    if(err===""){
      this.setState({balanceErr:"Введите остаток продукта "})
      console.log("Ошибка")
      }
      else
      this.setState({balanceErr:""})
}

    render() {
      console.log(this.state.product)
      console.log(this.state.price)
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
                 <input type="text" onChange={this.changeName}  value={this.state.product}/>  {this.state.productErr
                ?      <span > {this.state.productErr} </span> 
                    : ""
                } <br></br>
                
                 <label >Price:</label>
                 <input type="text"  onChange={this.changePrice}  value={this.state.price} />  {this.state.priceErr
                ?      <span > {this.state.priceErr}</span> 
                    : ""
                }<br></br>

                 <label >URL: </label>
                 <input type="text"  onChange={this.changeUrl} value={this.state.url} /> {this.state.urlErr
                ?      <span > {this.state.urlErr}</span> 
                    : ""
                } <br></br>

                 <label >Quanity: </label>
                 <input type="text" onChange={this.changeBalance}  value={this.state.balance} /> {this.state.balanceErr
                ?      <span > {this.state.balanceErr}</span> 
                    : ""
                }<br></br>
                 <input type="button"   defaultValue="Save" /> <input type="button" value="Cancel"/>
                    </div>
                    : ""
                }
           
          </div>
      );
      
  }
    
    }
    
    export default Card
    
    
    
    
    
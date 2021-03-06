
import React from 'react'
class Product extends React.Component{
         
  state = {
   productName:this.props.productName,
   price: this.props.price,
   url:this.props.url,
   balance:this.props.balance,
   selectedItem:this.props.selectedItem,
   code: this.props.code,
 
    }
  
    productClicked=(EO)=>{
      EO.stopPropagation()
     this.props.cbSelected(this.props.code, this.props.productName,this.props.price,1)
     return{
      
     }
  }
  EditClicked=(EO)=>{                  // Данный метод даёт значения value компоненту Card
    EO.stopPropagation()
    this.props.cbEdit(this.props.code, this.props.productName,this.props.price,this.props.url,this.props.balance,2)
    this.props.cbSelected(this.props.code, this.props.productName,this.props.price,2)
 }
    clickReset=(EO)=>{
      EO.stopPropagation()
      var question =confirm('Удалить строку?');
      if(question===true)
        this.props.cbDeleted(this.props.code)
      else{
        alert("Строка не будет удалена")
        return
      }
     
     
    }
    render(){  
      console.log(this.props.productName)
    return <tr onClick={this.productClicked} style={{backgroundColor:(this.props.selectedItem===this.props.code && this.props.workMode!==3 &&this.props.workMode!=="default" )?'orange':'white'}}>
      <td>{this.props.productName}</td>
      <td>{ this.props.price}</td>
      <td>{this.props.url}</td>
      <td>{this.props.balance}</td>
      <td><input type={"button"} value={"Edit"} onClick={this.EditClicked} disabled={this.props.inputState} ></input> <input type={"reset"} value={"Delete"}  onClick={this.clickReset} disabled={this.props.inputState|| this.props.workMode==2}></input></td>
    </tr>
  

    }
    
    }
    
    export default Product
    
    
    
    
    
    
    
    
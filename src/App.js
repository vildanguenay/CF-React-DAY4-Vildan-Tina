import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoItems from './TodoItems'

class App extends Component {
  inputElement = React.createRef() //To refer to the input, we create a ref with inputElement =React.createRef().
  constructor() {//React.Component is the base class for all class based React JS components. Whenever a class inherits the class React.Component its constructor will automatically assign attribute state to the class with initial value set to null. We can change it by overriding the method constructor.
 
   super()
   this.state = {
     items: [],
     currentItem: {
       text: '',
       key: '',
     },
   }
 }

 // deleteItem filters the received key from the items state. Then sets the items to filtered items.
 deleteItem = key => {
   const filteredItems = this.state.items.filter(item => {
     return item.key !== key
   })
   this.setState({
     items: filteredItems,
   })
 }

 handleInput = e => { //The handleInput gets the event
   const itemText = e.target.value //it gets the value from the input box 
   const currentItem = { text: itemText, key: Date.now() } // It makes a new const "currentItem", that has key as current date and text as the input data. The key is Date.now() which is the number of milliseconds from 1970 to now. It can only take a maximum of 1 input per millisecond. 
   this.setState({ //it sets the state to the object of currentItem.
     currentItem,
   })
 }

 addItem = e => {
   e.preventDefault() //The preventDefault will prevent reloading from submitting the form.
   const newItem = this.state.currentItem //It gets the value in the input box from the state currentItem.
   if (newItem.text !== '') { //Since we do not want to add empty value to our todo, we check that.
     const items = [...this.state.items, newItem] //If it’s not empty, items array is destructured and newItem is added. 
     this.setState({ //We have to set items[] to the state, we call this.setSate.
       items: items,
       currentItem: { text: '', key: '' }, // It also makes sense to reset the currentItem to clear the input box.
     })
   }
 }

 render() {
   return (
     <div className="App">
       <TodoList
         addItem={this.addItem}
         inputElement={this.inputElement} // used for setting the focus on the input field
         handleInput={this.handleInput} // is called everytime the input box content changes
         currentItem={this.state.currentItem}
       />
       <TodoItems
         entries={this.state.items}
         deleteItem={this.deleteItem} //we have created a new property in App.js as deleteItem.
       />
     </div>
   )
 }
}

export default App


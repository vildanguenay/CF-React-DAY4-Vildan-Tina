import React, { Component } from 'react'

class TodoItems2 extends Component { //Component TodoItems pass all items as a prop.
 createTasks = item => { //The function createTasks returns li for each passed item. It uses the key we provided earlier. 
   return ( 	//Adding an onClick listener to deleteItem with the key.  This executes deleteItem with the key as a parameter.
     <li key={item.key} onClick={() => this.props.deleteItem(item.key)}>
       {item.text}
     </li>
   )
 }
 render() {
   const todoEntries = this.props.entries
   const listItems = todoEntries.map(this.createTasks) //All these list items are saved to listItems using a mapping function. This gets used in the ul in return statement.



   return <ol className="theList">{listItems}</ol>
 }
}

export default TodoItems2
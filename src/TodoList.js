import React, { Component } from 'react'

class TodoList extends Component {
 componentDidUpdate() { //ComponentDidUpdate is called to focus on the input box referred by the inputElementreference.
   this.props.inputElement.current.focus() //this.props.inputElement.current.focus() sets the focus in the input area so we can continue typing the next item in the todo list.
 }
 render() {
   return (
     <div className="todoListMain">
       <div className="header">
         <form onSubmit={this.props.addItem}>
           <input
             placeholder="Task"
             ref={this.props.inputElement}
             value={this.props.currentItem.text}
             onChange={this.props.handleInput}
           />
           <button type="submit"> Add Task </button>
         </form>
       </div>
     </div>
   )
 }
}

export default TodoList

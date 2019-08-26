import React, { Component } from 'react';
import './form.css';

class Form extends Component {
  
  constructor() {//React.Component is the base class for all class based React JS components. Whenever a class inherits the class React.Component its constructor will automatically assign attribute state to the class with initial value set to null. We can change it by overriding the method constructor.
   super();
   this.state = {
       first_name: '',
       last_name: '',
       age: ''
     };

     this.handleChange = this.handleChange.bind(this); //to connect data with the event handler (data binding)
     this.handleSubmit = this.handleSubmit.bind(this);
 }

  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
      console.log(evt.target.value);
  }

  handleSubmit(evt) {
    alert('Hello ' + this.state.first_name + " " + this.state.last_name + "! How are you? " + "Your age is: " + this.state.age);
    evt.preventDfault();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} className="form">
        <label>First Name</label>
        <input type="text" name="first_name" onChange = {this.handleChange} />

        <label>Last Name</label>
        <input type="text" name="last_name" onChange = {this.handleChange}/>

        <label>Age</label>
        <input type="text" name="age" onChange = {this.handleChange}/>

        <input type="submit" value="Submit"/>

      </form>
    );
  }
}

export default Form;


import React, { Component } from 'react'
import Example from './Example'
import Experience from './Experience';
import ITExp from './ITexp';
import CV from './CV';

export class UserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step:1,
      FileName:{},
      Picture:'',
      firstName:'',
      lastName:'',
      email:'',
      occupation:'',
      city:'',
      bio:'',
      experience:[],
      CC:1, 
      Java:1, 
      J2EE:1,
      HTML5:1,
      CSS3:1, 
      Javascript:1,
      PHP5:1, 
      SQL:1, 
      Symfony:1, 
      Hibernate:1, 
      LDA:1,
    }
  }

  //proceed to next step
  nextStep = () => {
    const {step}=this.state;
    console.log(this.state);

    this.setState({
      step: step + 1
    })
  }
  //proceed to previous step
  prevStep = () => {
    const {step}=this.state;
    this.setState({
      step: step - 1
    })
  }
  //handle fields change
  handleChange = input => e => {
    this.setState({[input]:e.target.value})
    console.log(this.state)
  }

  handleChangeExp = e => {
    this.setState({
      experience:[...this.state.experience, ...e]
    })
    console.log(this.state)
    console.log(this.state.experience[0])
  }
  
  onSubmit = fields => {
    //console.log('app comp got this :', fields);
    //console.log(this.state);
    this.state={...this.state, ...fields};
    console.log(this.state);
  }

  

  render() {
    const {step} = this.state
    const { FileName, Picture, experience, CC, Java, J2EE, HTML5, CSS3, Javascript, PHP5, SQL, Symfony, Hibernate, LDA,
       firstName, lastName, adress, phoneNumber, email,
        occupation, personnality, city, bio, job, gender, pointCC}=this.state
    const values = { FileName, Picture, experience, CC, Java, J2EE, HTML5, CSS3, Javascript, PHP5, SQL, Symfony, Hibernate, LDA,
       firstName, lastName, adress, phoneNumber, email,
        occupation, personnality, city, bio, job, gender, pointCC}

    switch (step) {
      case 1:
      return (
        <Example
          //onSubmit = {(fields)=>this.onSubmit(fields)}
          nextStep={this.nextStep}
          handleChange={(e)=>this.handleChange(e)}
          values = {values}
        />
      )
      case 2:
      return(
        <Experience
          //onSubmit = {(fields)=>this.onSubmit(fields)}
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChangeExp={this.handleChangeExp}
          values = {values}
        />
      )
      case 3:
      return(
        <ITExp 
        prevStep={this.prevStep}
        nextStep={this.nextStep}
        handleChange={this.handleChange}
        values={values}
        />
      )
      case 4:
      return(
       <CV
        values={values}
        prevStep={this.prevStep}
        />
      )
    }
  }
}

export default UserForm

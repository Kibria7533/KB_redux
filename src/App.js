import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      button:"ADD",
      editableid:""
    }
  }
  save = (e) => {
    this.setState({ name: e.target.value });
  }
  storesave=e=>{
    e.preventDefault();
    if(this.state.button=="ADD"){
    this.props.dispatch({type:'ADD',payload:this.state.name});
    this.setState({name:""});
    }
    else
    {
         this.props.dispatch({type:"EDIT",payload:this.state.name,id:this.state.editableid})
         this.setState({button:"ADD",name:""});
    }

  }
  ed=(index)=>{
     const id=index.index;
    this.props.store.map((item,index)=>{
       if(index===id)
      this.setState({name:item,button:"EDIT",editableid:id});
     })
   
    
  }

  render() {
    return (
      <div className="App container" style={{ width: "50%" }}>
        <h1>My Redux-React Crud</h1>
        <form onSubmit={this.storesave}>
          <input className="form-control form-control-lg" name="name" value={this.state.name} onChange={this.save} type="text" placeholder="Add your name" />
    <button type="submit" className="btn btn-warning" style={{ marginTop: 30 }}>{this.state.button}</button>
        </form>
       
        <hr></hr>
        <h2 className="text-align left">Your name list:</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody>
          {this.props.store.map((item,index)=>{
            return(
              <tr key={index}>
                 <th >{index+1}</th>
            <td>{item}</td>
        
                 <td><button type="button" className="btn btn-secondary" onClick={()=>this.ed({index})}>Edit</button></td>
                 <td><button type="button" value={index} onClick={()=>{this.props.dispatch({type:"DELETE",id:{index}})}}className="btn btn-danger">Delete</button></td>
               </tr>

            )
                 

            })}
            


          </tbody>
        </table>


      </div>
    );

  }

}
function mapStateToProps(state){
  return{
    store:state.names
  }
}
export default connect(mapStateToProps)(App);

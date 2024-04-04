import React,{Component} from "react";
import Header from "./Header"
import "./ShowSubscribers.css";
import './common/common.css';
  /*let subscribers=[
    {
      id: 1,
      name:"Santhosh",
      phone: "9740100174"
    },
    {
      id:2,
      name:"Harish",
      phone:"7948481394"
    }
  ] */
  class ShowSubscribers extends Component{
    constructor(){
      super();
      this.state={
        subscribersListToShow:[]
      }
    }
  render(){
    return (
    <div>
      <Header heading=" Phone Directory"/>
      <div className="compement-body-container">
        <button className="custom-btn add-btn">Add</button>
      <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
        </div>
        {
          this.state.subscribersListToShow.map(sub =>{
            return <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn">Delete</button>
                </span>
              </div>
          })
        }
      </div>
      </div>
  );
 }
}

export default ShowSubscribers;

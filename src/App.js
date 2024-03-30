import Header from "./Header"
import "./App.css";
function App() {
  let subscribers=[
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
  ]
  return (
    <div>
      <Header/>
      <div className="compement-body-container">
        <button className="custom-btn add-btn">Add</button>
      <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
        </div>
        {
          subscribers.map(sub =>{
            return <div key={sub.id} className="grid-container">
              <span className="grid-item">{sub.name}</span>
              <span className="grid-item">{sub.phone}</span>
              </div>
          })
        }
      </div>
      </div>
  );
 }

export default App;

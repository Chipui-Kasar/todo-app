import "./App.css";
import React, { useState } from "react";

function App() {
  const [List, setList] = useState(["Sky Diving", "Maldives", "Shimla"]);
  const [newList, setNewList] = useState("");
  const [message, setMessage] = useState("");
  const [imessage, setiMessage] = useState("");

  const deleteItem = listindex => {
    List.splice(listindex, 1); //0 for adding and 1 for deleting
    setList(List => [...List]);
    setMessage(`Item Deleted successfully`);
  };

  const inputCapture = event => {
    setNewList(event.target.value);
  };
  const save = () => {
    if (newList === "") {
      setiMessage("Please type something");
    } else {
      setList(List => [...List, newList]); //a = a+b
      setMessage(`${newList} Added successfully`);
      setNewList("");
      setiMessage("");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row App m-4">
          <h1>My Bucket List</h1>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="row">
              <div className="heading text-center mb-2 text-white fw-bold fs-3">
                Add New List
              </div>
            </div>
            <div className="row bg-white p-4 rounded mb-5">
              <label className="text-center text-danger">{imessage}</label>

              <input
                value={newList}
                onChange={inputCapture}
                type="text"
                className="form-control"
                placeholder="Enter New List"
                autofocus=""
              />
              <button
                onClick={save}
                type="button"
                className="btn btn-primary mt-3"
              >
                Submit
              </button>
            </div>
          </div>

          <div className="col-md-1"></div>

          <div className="col-md-8">
            <div className="row">
              <div className="heading text-center mb-2 text-white fw-bold fs-3">
                {List.length} Bucket List
              </div>
            </div>
            <p className="text-center bg-white text-success">{message}</p>
            <div className="row bg-white p-4 rounded">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Sl no</th>
                    <th>List</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {List.map((listName, index) => {
                    return (
                      <tr key={index}>
                        <td>{index}</td>
                        <td>{listName}</td>
                        <td>
                          <button
                            onClick={deleteItem.bind(this, index)}
                            type="button"
                            className="btn btn-danger"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";

const ToDoList = () => {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  const timestamp = Date.now();
  const currentDate = new Date(timestamp);
  const day = currentDate.toDateString();

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setToDo(e.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() =>
            setToDos([
              ...toDos,
              { id: Date.now(), text: toDo, status: false, delStatus: false },
            ])
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          if (!obj.delStatus) {
            return (
              <div className="todo">
                <div className="left">
                  <input
                    type="checkbox"
                    onClick={(e) => {
                      setToDos(
                        toDos.filter((obj2) => {
                          if (obj2.id === obj.id) {
                            obj2.status = e.target.checked;
                          }
                          console.log(obj2);
                          return obj2;
                        })
                      );
                    }}
                    name=""
                    id=""
                  />
                  <p>{obj.text}</p>
                </div>
                <div className="right">
                  <i
                    className="fas fa-times"
                    onClick={() => {
                      setToDos(
                        toDos.filter((delToDo) => {
                          if (delToDo.id === obj.id) {
                            delToDo.delStatus = true;
                          }
                          return delToDo;
                        })
                      );
                    }}
                  ></i>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className="toDoListView">
        <div className="TodoTable">
            <h3 className="tableTitle">Active</h3>
          {toDos.map((obj2) => {
            if (!obj2.status && !obj2.delStatus) {
              return <h3 className="tableElement">{obj2.text}</h3>;
            }
          })}
        </div>
        <div className="TodoTable">
        <h3 className="tableTitle">Inactive</h3>
          {toDos.map((obj2) => {
            if (obj2.status && !obj2.delStatus) {
              return <h3 className="tableElement">{obj2.text}</h3>;
            }
          })}
        </div>
        <div className="TodoTable">
        <h3 className="tableTitle">Deleted</h3>
          {toDos.map((obj2) => {
            if (obj2.delStatus) {
              return <h3 className="tableElement">{obj2.text}</h3>;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ToDoList;

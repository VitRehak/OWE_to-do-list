import { useEffect } from "react";
import ToDoListForm from "./components/ToDoListForm";
import ToDoListItem from "./components/ToDoListItem";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from "react-redux";
import { setItems } from "./toDoListItemSlice";

function App() {
  const toDoListItems = useSelector((state) => state.toDoListItems.items);
  const dispatch = useDispatch();

  const updateToDoListItems = async () => {
    const newToDoListItems = await fetch("http://192.168.1.134:8080/todo");
    const data = await newToDoListItems.json();
    dispatch(setItems(data));
  };

  useEffect(() => {
    updateToDoListItems();
  }, []);

  return (
    <div className="App container">
      <h1 className="mt-4 text-center">To Do List</h1>
      <ToDoListForm />
      <ul style={{ listStyle: "none" }}>
        {toDoListItems.map((toDoItem) => (
          <ToDoListItem props={toDoItem} key={toDoItem.id} />
        ))}
      </ul>
    </div>
  );
}

export default App;

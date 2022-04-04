import React from "react";
import { addItem } from "./../toDoListItemSlice";
import priorityTheme from "./../priorityTheme";
import usePriority from "./../usePriority";
import { useDispatch } from "react-redux";

function ToDoListForm() {
  const [localPriority, setLocalPriority] = usePriority(3);
  const dispatch = useDispatch();

  const handleAdd = async function (value) {
    let item = await fetch("http://192.168.1.134:8080/todo", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    });
    dispatch(addItem(await item.json()));
  };

  return (
    <form
      className="w-75 mx-auto"
      onSubmit={(event) => {
        const newToDoListItems = {
          name: event.target.name.value,
          text: event.target.text.value,
          priority: event.target.priority.value,
        };
        event.preventDefault();
        handleAdd(newToDoListItems);
      }}
    >
      <div className="form-group mt-4">
        <label htmlFor="name" className="form-lable">
          Name Of New Task
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          placeholder="Name of task"
        />
      </div>

      <div className="form-group mt-4">
        <label htmlFor="text" className="form-lable">
          Description Of Task
        </label>
        <input
          type="text"
          className="form-control"
          name="text"
          placeholder="Description of task"
        />
      </div>

      <div className="form-check mt-4">
        <label htmlFor="priority" className="form-lable">
          <h4>
            Priority <span className={priorityTheme(localPriority)}>{localPriority}</span>
          </h4>
        </label>
        <input
          type="range"
          className="form-range"
          name="priority"
          max="5"
          min="1"
          value={localPriority}
          onChange={(input) => {
            if (input.target.value !== undefined)
            setLocalPriority(input.target.value);
          }}
        />
      </div>
      <div className="mt-4">
        <button type="submit" className="btn btn-primary w-100 ">
          Add
        </button>
      </div>
    </form>
  );
}

export default ToDoListForm;

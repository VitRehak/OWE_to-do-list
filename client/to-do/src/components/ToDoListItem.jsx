import React from "react";
import { useDispatch } from "react-redux";
import { updateItem, deleteItem } from "./../toDoListItemSlice";
import priorityTheme from "../priorityTheme";

const ToDoListItem = ({ props}) => {
  const dispatch = useDispatch();

  const handleDelete = async function (value) {
    await fetch(`http://192.168.1.134:8080/todo/${value}`, {
      method: "DELETE",
    });
    dispatch(deleteItem({
      id: value
    }))
  };

  const handleDoneChange = async function (value) {
    await fetch(`http://192.168.1.134:8080/todo/${value}`, {
      method: "PUT",
    });
    dispatch(updateItem({
      id: value
    }))
  };

  return (
    <li className="mt-5">
      <div className="card mx-auto">
        <div className="card-body">
          <h4 className="card-title ">
            {props.name}{" "}
            <span className={priorityTheme(props.priority)}>
              {props.priority}
            </span>
          </h4>
          <p className="card-text">{props.text}</p>
          <div className="row justify-content-around">
            <input
              style={{ width: "38.5px", height: "38.5px" }}
              className=" mb-md-0 mb-4 col-md-4"
              type="checkbox"
              defaultChecked={props.done}
              onClick={async () => await handleDoneChange(props.id)}
            />
            <button
              onClick={async () => await handleDelete(props.id)}
              className="btn btn-danger col-md-4"
            >
              DELETE
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default ToDoListItem;

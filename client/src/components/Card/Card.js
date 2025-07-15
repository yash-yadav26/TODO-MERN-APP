import React from "react";
import EditTodo from "../EditTodo";
import { useState } from "react";

const Card = ({ allTask }) => {
  const [showModel, setShowModel] = useState(false)

  const handleEdit = () => {
    setShowModel(true)
  }
  return (
    <>
      <div className="d-flex flex-wrap gap-3 justify-content-start align-items-stretch">
      {allTask?.map((task, i) => (
        <>
          <div
            className="card border-primary mb-3 mt-3  "
            style={{ maxWidth: "18rem" ,  minHeight: "100%" }}
            key={i}
          >
            <div className="card-header">
              <div className="chead">
                <h6>{task?.title.substring(0, 10)}</h6>
                <h6
                  className={
                    task?.isCompleted === true ? "task-cmp " : "task-inc"
                  }
                >
                  {task?.isCompleted === true ? "Completed " : "incomlete"}
                </h6>
              </div>
            </div>
            <div className="card-body">
              <h6 style={{ fontWeight: "bold" }}>{task?.title}</h6>
              <p className="card-text">{task?.description}</p>
              <h6>
                Date : {task?.createdAt ? task.createdAt.substring(0, 10) : "No date"}
              </h6>

            </div>
            <div className="card-footer bg-transparent border-primary">
              <button className="btn btn-warning" title="EDIT Task" onClick={handleEdit}>
                <i className="fa-solid fa-pen-to-square"></i>
              </button>
              <button className="btn btn-danger ms-2" title="Delete Task">
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
          <div>{showModel && <EditTodo task={task} setShowModel={setShowModel} />}</div>
        </>
      ))}
      </div>
    </>
  );
};

export default Card;
import React from 'react'
import toast from 'react-hot-toast'
import TodoServices from '../../Services/TodoServices';

const PopModel = ({showModel , setshowModel , title , setTitle , description , setDescription , getUserTask}) => {
  // handle close
const handleClose=()=>{
    setshowModel(false)
  }
  // handle sumbit
const handleSubmit = async()=>{
  try {
    const userData = JSON.parse(localStorage.getItem('todoapp'))
    const createdBy = userData && userData.user._id
    const data = {title , description , createdBy}
    if(!title || !description){
      return toast.error('plz provide title or description')
    } 

    const todo = await TodoServices.createTodo(data)
    setshowModel(false)
    toast.success('todo created sucesfully')
    getUserTask()
    console.log(todo);
    setTitle('')
    setDescription('')
  } catch (error) {
    console.log(error);
    
  }
}
  return (
    <>
      {showModel && (
        <div
          className="modal"
          tabIndex="-1"
          role="dialog"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add New Task</h5>
                <button
                  className="btn-close"
                  aria-label="close"
                  onClick={handleClose}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="floatigTextarea"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  ></textarea>
                  <label htmlFor="floatigTextarea">Description</label>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Create
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PopModel;
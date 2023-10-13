import { useState } from "react";

const App = () => {

 // useState Hooks

  const [task, setTask] = useState("");
  const [tasklist, setTasklist] = useState([]);

  let displayList = "";
  
  // Login Code For the Making List 

  if (tasklist.length > 0) {
    displayList = tasklist.map((t, i) => {
      return (
        <li key={i} className='flex align-center justify-between bg-white m-2 p-2 rounded-md text-left'>
          {" "}
          {t.task}
          <button
            onClick={() => {
              deleteHandeler(i);
            }}
            className='bg-red-500 hover:bg-red-400 text-white px-3 py-2 rounded'
          >
            Delete
          </button>
        </li>
      );
    });
  } else {
    displayList = <div className='p-2 m-2 text-red-500 font-bold text-xl'>{"Nothing To Do... Enjoy !! 🙌😊 "}</div>;
  }

 // Button Handeler Funtions'

  const submitHandler = (e) => {
    e.preventDefault();
    if (task.length != 0) {
      setTasklist([...tasklist, { task }]);
    }
    setTask("");
  };

  const deleteHandeler = (i) => {
    let oldTask = [...tasklist];
    oldTask.splice(i, 1);
    setTasklist(oldTask);
  };

  return (
    <>
      <div>
        <h1 className='flex flex-col  bg-gradient-to-r from-pink-500 to-blue-500 text-white font-bold text-2xl text-center p-3 m-3 rounded-md border-3 '>
          To Do List
        </h1>
      </div>
      <div>
        <form onSubmit={submitHandler}>
          <input
            className='text border-2 bg-slate-100 m-4 p-2 text-bold  rounded-md  focus:ring-1 focus:ring-sky-500 focus:outline-none w-[60%] max-sm:w-[92%] '
            placeholder='Enter Task'
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />

          <button className='m-4 p-2 font-bold w-[25%] max-sm:w-[92%] rounded-lg  text-white bg-sky-600 hover:bg-sky-500 '>
            Add
          </button>
        </form>
      </div>
      <div className='m-auto max-[320px]:w-[70%] md:w-[75%]'>
        <ul className='bg-slate-800 m-4 p-1 rounded-lg'>{displayList}</ul>
      </div>
    </>
  );
};

export default App;

//  Task Done For Today 🚀✨
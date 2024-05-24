import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addList,todoList, deleteList, editList } from './features/todoList';

export default function TodoList() {
    const dispatch = useDispatch();
    const TodoList = useSelector(todoList);
    console.log(TodoList, "TodoList");    
    const [task, setTask] = useState("");
    const [description, setDescription] = useState("");
    const [needEdit, setNeedEdit] = useState(false);
    const [editId,setEditId] = useState(null);

    const handleList = ()=> {
       if(!needEdit){
        const id = Date.now().toString().slice(8, 12);
        dispatch(addList({id,task, description}));
        setDescription("");
        setTask("");
       }else{
        dispatch(editList({id:editId,task, description}));
        setNeedEdit(false);
        setEditId(null);
        setTask("");
        setDescription("");
       };
}

    const handleTask = (e:any)=> {setTask(e.target.value)}
    const handleDeleteTask = (id:any)=> {dispatch( deleteList(id) )}
    const handleDescription = (e:any)=> {setDescription(e.target.value)}

    const handleEditTask = (currentObj:any)=> {
        setNeedEdit(true);
        setEditId(currentObj.id);
        const editId = currentObj.id;
        const editTask = currentObj.task;
        const editDescription = currentObj.description;
        setTask(currentObj.task);
        setDescription(currentObj.description);
        dispatch(editList({editId,editTask, editDescription}));
    };

  return (
    <div className='flex justify-center'>
        <div className='flex flex-col'>
            <div>
                <input className='mx-5 h-10 p-1 border-green-400 border-4 rounded-3xl' value={task} onChange={handleTask} type='text' placeholder='Task'/>
                <input className='mx-5 h-10 p-1 border-green-400 border-4 rounded-3xl' value={description} onChange={handleDescription} type="text" placeholder='Description'/>
                <button className='mx-5 h-10 border-green-400 border-2 p-2 rounded-lg' onClick={handleList}>{needEdit?"Edit":"Add"}</button>
            </div>
            <div className='flex flex-col justify-center mt-10'>
            {TodoList?.map((current:any)=>(
                    <div className='border-2 border-green-400 rounded-md flex flex-row py-1 my-1 justify-between' key={current.id}>
                       <div className='flex flex-row '>
                        <p className=' text-emerald-800 text-lg mx-3 w-32 border-r-2'>{current.task}</p>
                        <p className=' text-emerald-800 text-lg mx-3 w-32'>{current.description}</p>
                       </div>
                       <p className='cursor-pointer' onClick={()=> handleEditTask(current)}>Edit</p>
                        <p className='border-2 bg-neutral-200 cursor-pointer border-red-400 rounded-full p-2 h-8 w-8 flex items-center relative left-300 justify-center' onClick={()=> handleDeleteTask(current.id)}>-</p>
                    </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}


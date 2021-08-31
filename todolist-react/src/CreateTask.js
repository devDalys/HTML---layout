import React, { useEffect,  useState } from 'react'
import './app.css'
function CreateTask(props){
    console.log(props.lastChildId)
    // const getId = (idx) =>{
    //     let id = 0;
    //     if (idx){id = idx }else {id = 1}
    //     console.log(id);
    //     return id;
    // }
    const add_btn = (event) =>{
        event.preventDefault();
        let value = document.querySelector('#AddTask__input').value;
        let id = props.lastChildId;
        let item = {id: id++, text: value, done: false};
        if(item.text){props.onFormSubmit(item); props.onCloseForm(false)} else alert('Введите текст задачи')
        document.querySelector('#AddTask__input').value = '';
        // props.onCloseForm(false);
    }
    const closeBtn = (event) => {
        props.onCloseForm(false)
    }

return(
    <div className = "Addtask">
        <form className= 'inputForm'>
            <input type="text" name="AddTask"  id="AddTask__input"  placeholder = 'Введите текст задачи'  />
            <button type = "submit" onClick={add_btn} >Добавить задачу</button>
            <button className = 'closeForm' onClick = {closeBtn}>&times;</button>
        </form>
    </div>
    )
}
export default CreateTask;
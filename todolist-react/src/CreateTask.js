import React from 'react'
import './app.css'
function CreateTask(props){
    const add_btn = (event) =>{
        event.preventDefault();
        let value = document.querySelector('#AddTask__input').value;
        let id = props.lastChildId;
        let item = {id: Date.now(), text: value, done: false};
        if(item.text){props.onFormSubmit(item); props.onCloseForm(false)} else alert('Введите текст задачи')
        document.querySelector('#AddTask__input').value = '';
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
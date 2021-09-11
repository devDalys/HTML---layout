import React from 'react'
import './app.css'
function CreateTask(props){
    const animationform =()=>{
        const animated = document.querySelector('.Addtask');
        animated.classList.add('.hide')
        animated.classList.add('hide');
        animated.addEventListener('animationend',()=>{
            props.onCloseForm(false);
        })
    }
    const add_btn = (event) =>{
        event.preventDefault();
        let value = document.querySelector('#AddTask__input').value;
        let id = props.lastChildId;
        let item = {id: Date.now(), text: value, done: false};
        if(item.text){props.onFormSubmit(item); } else alert('Введите текст задачи')
        document.querySelector('#AddTask__input').value = '';
    }
    const closeBtn = (event) => {
        event.preventDefault();
        animationform();
    }
return(
    <div className = "Addtask">
        <form className= 'inputForm'>
            <input type="text" name="AddTask"  id="AddTask__input"  placeholder = 'Введите текст задачи'  />
            <button type = "submit" onClick={add_btn} className='add_task-btn' >Добавить задачу</button>
            <button className = 'closeForm' onClick = {closeBtn}></button>
        </form>
    </div>
    )
}
export default CreateTask;
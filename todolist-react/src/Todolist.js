import React, { useEffect, useState } from 'react'
import Listitem from './Listitem';
import CreateTask from './CreateTask';
function Todolist() {
  const exportDataFromLS = () => {
    let result = localStorage.getItem('data');
    console.log(result);
    result = JSON.parse(result);
    if (!result) { result = [] }
    setItem(result);
    let idx = Math.max(...result.map(x => x.id));
    setId(idx);
    return (idx);
  }
  const addItem = (newItem) => {
    let newData = [...item, newItem]
    setItem(newData)
    localStorage.setItem('data', JSON.stringify(newData));
  }
  const deleteItem = (itemId) => {
    let newArray = item.filter(item => itemId != item.id)
    setItem(newArray);
    localStorage.setItem('data', JSON.stringify(newArray));
  }
  const taskDone = (itemId) => {
    console.log(item.filter(item => itemId == item.id))

  }
  const [item, setItem] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const openForm = () => { setShowForm(!showForm) };
  const CloseForm = (CloseForm) => { setShowForm(CloseForm) }
  const [id, setId] = useState(0);


  useEffect(exportDataFromLS, []);
  return (
    <div className="App">
      <header className='app__header'>
        <input type="checkbox" name="select__all" id="select__all" />
        <h4 className="main__title">СПИСОК ЗАДАЧ: </h4>
        <button className="add__btn" onClick={openForm}>
        </button>
      </header>
      {showForm && <CreateTask onFormSubmit={addItem} onCloseForm={CloseForm} lastChildId={id} />}
      <Listitem item={item} onDeleteItem={deleteItem} taskDone={taskDone} />
    </div>

  )
}
export default Todolist;
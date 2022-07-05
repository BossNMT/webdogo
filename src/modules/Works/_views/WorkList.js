import React, { useEffect, useState } from 'react';
import WorkForm from '../_components';

const WorkList = () => {
  const [todoList, setTodoList] = useState([]);

  function handleTodoFormSubmit(formValue) {
    console.log('tesst', formValue);
    const newTodo = {
      ...formValue,
    };
    const newTodoList = [...todoList];
    // if (formValue.workName === '') return alert('Vui lòng nhập tên công việc');
    // if (formValue.status === '')
    //   return alert('Vui lòng chọn trạng thái công việc');
    newTodoList.push(newTodo);

    setTodoList(newTodoList);
    localStorage.setItem('workList', JSON.stringify(newTodoList));
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('workList')) === null) return -1;
    setTodoList(JSON.parse(localStorage.getItem('workList')));
  }, []);

  // delete
  const deleteTodo = (index) => {
    const listLocal = JSON.parse(localStorage.getItem('workList'));
    // const index = listLocal.findIndex((e) => e.id == id);
    listLocal.splice(index, 1);
    localStorage.setItem('workList', JSON.stringify(listLocal));
    setTodoList(listLocal);
  };

  //edit
  const editTodo = (index, value) => {
    const listLocal = JSON.parse(localStorage.getItem('workList'));
    listLocal[index].workName = value;
    localStorage.setItem('workList', JSON.stringify(listLocal));
    setTodoList(listLocal);
  };

  return (
    <>
      <WorkForm
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        onSubmit={handleTodoFormSubmit}
        todoList={todoList}
      />
    </>
  );
};
export default WorkList;

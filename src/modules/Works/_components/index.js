/* eslint-disable react/prop-types */
import React, { useState } from 'react';

WorkList.propTypes = {};

function WorkList(props) {
  // ctrl + . tìm lỗi
  const { todoList, deleteTodo, editTodo } = props;
  const { onSubmit } = props;
  const [value, setValue] = useState('');
  const [valueSelect, setValueSelect] = useState('');

  // xử lý ô inp
  // lấy value từ ô inp
  function handleValueChange(e) {
    console.log(e.target.value);
    setValue(e.target.value);
  }

  // sử lý ô select
  function handleValueSelectChange(e) {
    console.log(e.target.value);
    setValueSelect(e.target.value);
  }

  // khi ấn submit thì lấy value
  function handleSubmit(event) {
    // không reload lại trang khi ấn enter, hàm có sẵn
    event.preventDefault();
    if (!onSubmit) return;
    const formValue = {
      workName: value,
      status: valueSelect,
    };
    onSubmit(formValue);
    setValue('');
    setValueSelect('');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nhập tên công việc"
          value={value}
          onChange={handleValueChange}
          required
        />
        <select onChange={handleValueSelectChange} value={valueSelect}>
          <option value="">-- Chọn trạng thái --</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
          <option value="Refuse">Refuse</option>
        </select>
        <input type="submit" value="Thêm" />
      </form>

      <table>
        <thead>
          <tr>
            <td>Stt</td>
            <td>Tên công việc</td>
            <td>Trạng thái</td>
            <td>Xử lý</td>
          </tr>
        </thead>
        <tbody>
          {todoList.map((x, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{x.workName}</td>
              <td>{x.status}</td>
              <td>
                <button onClick={() => editTodo(index, 'test')}>Sửa</button>
              </td>
              <td>
                <button onClick={() => deleteTodo(index)}>Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WorkList;

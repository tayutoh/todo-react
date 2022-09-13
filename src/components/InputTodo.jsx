import React from "react";

const style = {
  backgroundColor: "#c1ffff",
  padding: "20px",
  width: "500px",
  margin: "0 auto 30px",
  borderRadius: "8px",
  boxShadow: "0 0 10px #29b3b3"
};

export const InputTodo = (props) => {
  const { todoText, onChange, onClick, disabled } = props;
  return (
    // <div className="input-area">
    <div style={style}>
      <input
        id="add-text"
        placeholder="TODOを入力"
        value={todoText}
        onChange={onChange}
        disabled={disabled}
      />
      <button id="add-button" onClick={onClick} disabled={disabled}>
        追加
      </button>
    </div>
  );
};

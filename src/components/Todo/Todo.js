import React, { useState } from "react";
import { Row, Checkbox, Tag } from "antd";
import { useDispatch } from "react-redux";
// import { toggleTodoStatus } from "../../redux/actions";
import todoListSlice from "../TodoList/todosSlice";

const priorityColor = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo(props) {
  const { name, priority, completed, id } = props;
  const [checked, setChecked] = useState(completed);

  const dispatch = useDispatch();
  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoListSlice.actions.toggleTodoStatus(id));
  };

  return (
    <Row
      justify="space-between"
      style={{
        marginBottom: 5,
        ...(checked ? { opacity: 0.5, textDecoration: "line-through" } : {}),
      }}
    >
      <Checkbox checked={checked} onChange={toggleCheckbox}>
        {name}
      </Checkbox>
      <Tag color={priorityColor[priority]}>{priority}</Tag>
    </Row>
  );
}

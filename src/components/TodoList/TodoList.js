import React, { useState } from "react";
import Todo from "../Todo/Todo";
import { Row, Col, Input, Select, Button, Tag } from "antd";
import { useDispatch, useSelector } from "react-redux";
// import { addTodo } from "../../redux/actions";
import { v4 as uuidv4 } from "uuid";
import { todosRemainingSelector } from "../../redux/selectors";
import todoListSlice from "./todosSlice";

export default function TodoList() {
  const [todoName, setTodoName] = useState("");
  const [todoPriority, setTodoPriority] = useState("Medium");

  const todoList = useSelector(todosRemainingSelector);

  const dispatch = useDispatch();
  const handleInpputChange = (e) => {
    setTodoName(e.target.value);
  };

  const handlePriorityChange = (value) => {
    setTodoPriority(value);
  };

  const handleAddButtonClick = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority: todoPriority,
        completed: false,
      })
    );

    setTodoName("");
    setTodoPriority("Medium");
  };

  return (
    <Row style={{ height: "100%" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            id={todo.id}
            name={todo.name}
            completed={todo.completed}
            priority={todo.priority}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input
            placeholder="Add new todo"
            value={todoName}
            onChange={handleInpputChange}
          />
          <Select value={todoPriority} onChange={handlePriorityChange}>
            <Select.Option value="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}

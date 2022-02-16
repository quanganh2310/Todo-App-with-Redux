import React, { useState } from "react";
import { Form, Input, Radio, Select, Tag } from "antd";
import { useDispatch } from "react-redux";
// import {
//   priorityFilterChange,
//   searchFilterChange,
//   statusFilterChange,
// } from "../../redux/actions";
import filtersSlice from "./filtersSlice";

const { Search } = Input;

export default function Filters() {
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");
  const [filterPriority, setFilterPriority] = useState([]);
  const dispatch = useDispatch();

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value);
    dispatch(filtersSlice.actions.searchFilterChange(e.target.value));
  };

  const handleFilterStatusChange = (e) => {
    setFilterStatus(e.target.value);
    dispatch(filtersSlice.actions.statusFilterChange(e.target.value));
  };

  const handlePriorityChange = (value) => {
    setFilterPriority(value);
    dispatch(filtersSlice.actions.priorityFilterChange(value));
  };

  return (
    <Form layout="vertical" size="middle">
      <Form.Item label="Search" name="search">
        <Search
          placeholder="Search"
          value={searchText}
          onChange={handleSearchTextChange}
          enterButton
        />
      </Form.Item>
      <Form.Item label="Filter By Status" name="status">
        <Radio.Group value={filterStatus} onChange={handleFilterStatusChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">Todo</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Filter By Priority" name="priority">
        <Select
          mode="multiple"
          allowClear
          placeholder="Please select"
          value={filterPriority}
          onChange={handlePriorityChange}
          style={{ width: "100%" }}
        >
          <Select.Option value="High" label="High">
            <Tag color="red">High</Tag>
          </Select.Option>
          <Select.Option value="Medium" label="Medium">
            <Tag color="blue">Medium</Tag>
          </Select.Option>
          <Select.Option value="Low" label="Low">
            <Tag color="gray">Low</Tag>
          </Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
}

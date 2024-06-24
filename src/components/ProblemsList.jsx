import React, { useState } from "react";
import { Table, Tag, Switch } from "antd";

const ProblemsList = ({ data }) => {
  // Load completedProblems from localStorage, defaulting to an empty array if not present
  const initialCompletedProblems =
    JSON.parse(localStorage.getItem("completedProblems")) || [];
  const [completedProblems, setCompletedProblems] = useState(
    initialCompletedProblems
  );

  // Update localStorage whenever completedProblems changes
  React.useEffect(() => {
    localStorage.setItem(
      "completedProblems",
      JSON.stringify(completedProblems)
    );
  }, [completedProblems]);

  const handleToggleComplete = (record) => {
    const isChecked = completedProblems.includes(record.name);

    const updatedCompletedProblems = isChecked
      ? completedProblems.filter((name) => name !== record.name)
      : [...completedProblems, record.name];

    setCompletedProblems(updatedCompletedProblems);
  };

  const columns = [
    {
      title: "Sr. No.",
      dataIndex: "srno",
      key: "srno",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Problem Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <a href={record.leetcodeLink} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status, record) => (
        <Switch
          checked={completedProblems.includes(record.name)}
          onChange={() => handleToggleComplete(record)}
        />
      ),
    },
    {
      title: "Difficulty",
      dataIndex: "difficulty",
      key: "difficulty",
      render: (difficulty) => (
        <Tag
          color={
            difficulty === "Easy"
              ? "green"
              : difficulty === "Medium"
              ? "orange"
              : "red"
          }
        >
          {difficulty}
        </Tag>
      ),
    },
    {
      title: "Hints",
      dataIndex: "hints",
      key: "hints",
      render: (hints) => (
        <ul>
          {hints.map((hint, index) => (
            <li key={index}>{hint}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Notes",
      dataIndex: "notes",
      key: "notes",
    },
    {
      title: "Tags",
      dataIndex: "tags",
      key: "tags",
      render: (tags) => (
        <ul>
          {tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Solution",
      dataIndex: "solution",
      key: "solution",
    },
    {
      title: "Best TC",
      dataIndex: "timeComplexity",
      key: "timeComplexity",
    },
  ];

  console.log(completedProblems.length);

  return (
    <Table
      columns={columns}
      dataSource={data}
      rowKey={(record, index) => index.toString()} // Use index as the row key if data items don't have unique IDs
      pagination={false}
      style={{ marginTop: 20 }}
    />
  );
};

export default ProblemsList;

import { Row, Col } from "antd";
import ProblemsList from "./components/ProblemsList";
import allProblems from "./data/problems"; // Import your JSON data

const App = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Row gutter={16}>
        <Col span={24}>
          <h1>Problem List</h1>
          <ProblemsList data={allProblems} />
        </Col>
      </Row>
    </div>
  );
};

export default App;

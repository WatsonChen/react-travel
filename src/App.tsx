import React from "react";
import styles from "./App.module.css";
import { Header, Footer } from "./components";
import { Row, Col } from "antd";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      {/* detail Content */}
      <div className={styles["page-content"]}>
        <Row>
          <Col span={6} style={{ background: "blue" }}>
            左側
          </Col>
          <Col span={18} style={{ background: "red" }}>
            右側
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default App;

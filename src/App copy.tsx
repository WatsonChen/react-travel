import React from "react";
import styles from "./App.module.css";
import { Header, Footer, SideMenu, Carousel } from "./components";
import { Row, Col } from "antd";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      {/* detail Content */}
      <div className={styles["page-content"]}>
        <Row>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
      </div>
      <Footer />
    </div>
  );
}

export default App;

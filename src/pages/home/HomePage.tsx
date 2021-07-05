import React from "react";
import {
  Header,
  Footer,
  SideMenu,
  Carousel,
  ProductCollection,
  BusinessPartner,
} from "../../components";
import { Row, Col, Typography } from "antd";
import { productList1, productList2, productList3 } from "./mockups";
import sideImage from "../../asstes/images/sider_2019_02-04.png";
import sideImage2 from "../../asstes/images/sider_2019_02-04-2.png";
import sideImage3 from "../../asstes/images/sider_2019_12-09.png";
import styles from "./HomePage.module.css";

export class HomePage extends React.Component {
  render() {
    return (
      <>
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
            <ProductCollection
              title={
                <Typography.Title level={3} type="secondary">
                  爆款推薦
                </Typography.Title>
              }
              sideImage={sideImage}
              products={productList1}
            ></ProductCollection>
            <ProductCollection
              title={
                <Typography.Title level={3} type="success">
                  新品上架
                </Typography.Title>
              }
              sideImage={sideImage2}
              products={productList2}
            ></ProductCollection>
            <ProductCollection
              title={
                <Typography.Title level={3} type="warning">
                  國際推薦
                </Typography.Title>
              }
              sideImage={sideImage3}
              products={productList3}
            ></ProductCollection>
          </Row>
        </div>
        <BusinessPartner />
        <Footer />
      </>
    );
  }
}

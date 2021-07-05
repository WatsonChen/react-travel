import React from "react";
import styles from "./BusinessPartner.module.css";
import { Row, Col, Divider, Typography } from "antd";
import businessPartnerIcon1 from "../../asstes/images/facebook-807588_640.png";
import businessPartnerIcon2 from "../../asstes/images/follow-826033_640.png";
import businessPartnerIcon3 from "../../asstes/images/microsoft-80658_640.png";
import businessPartnerIcon4 from "../../asstes/images/icon-720944_640.png";

const companies = [
  { src: businessPartnerIcon1 },
  { src: businessPartnerIcon2 },
  { src: businessPartnerIcon3 },
  { src: businessPartnerIcon4 },
];

export const BusinessPartner: React.FC = () => {
  return (
    <div className={styles.content}>
      <Divider orientation="left">
        <Typography.Title level={3}>合作企业</Typography.Title>
      </Divider>
      <Row>
        {companies.map((c, index) => (
          <Col span={6} key={"bussiness-partner-" + index}>
            <img
              alt="bussiness-partner"
              src={c.src}
              style={{
                width: "80%",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

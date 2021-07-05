import React from "react";
import { Layout, Typography } from "antd";

export const Footer: React.FC = () => {
  return (
    <Layout.Footer>
      <Typography.Title level={3} style={{ textAlign: "center" }}>
        CopyRight @ React Travel
      </Typography.Title>
    </Layout.Footer>
  );
};

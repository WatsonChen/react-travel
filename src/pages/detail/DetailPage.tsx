import React from "react";
import { RouteComponentProps } from "react-router-dom";

interface MatchParams {
  touristId: string;
}

export const DetailPage: React.FC<RouteComponentProps<MatchParams>> = (
  props
) => {
  return <h3>這是旅遊的詳細頁面, 旅遊id = {props.match.params.touristId}</h3>;
};

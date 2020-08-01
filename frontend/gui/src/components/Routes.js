import React from "react";
import { Route } from "react-router-dom";
import { ArticleList } from "../containers/ArticleList";
import { ArticleDetail } from "../containers/ArticleDetailView";

export const BaseRouter = () => {
  return (
    <div>
      <Route exact path="/" component={ArticleList} />
      <Route exact path="/:articleID" component={ArticleDetail} />
    </div>
  );
};

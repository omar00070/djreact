import React, { useState, useEffect } from "react";
import { Card } from "antd";
import axios from "axios";

export const ArticleDetail = (props) => {
  const [article, setArticle] = useState({ data: { title: "", content: "" } });

  useEffect(() => {
    const articleID = props.match.params.articleID;
    console.log(articleID);
    axios.get(`http://127.0.0.1:8000/api/${articleID}`).then((res) => {
      setArticle({
        data: res.data,
      });
    });
  }, [props.match.params.articleID]);

  return (
    <Card title={article.data.title}>
      <p>{article.data.content}</p>
    </Card>
  );
};

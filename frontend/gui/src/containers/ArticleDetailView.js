import React, { useState, useEffect } from "react";
import { Card, Button } from "antd";
import axios from "axios";
import { CustomForm } from "../components/Form";

export const ArticleDetail = (props) => {
  const [article, setArticle] = useState({ data: { title: "", content: "" } });

  const handleDelete = () => {
    const articleID = props.match.params.articleID;
    axios.delete(`http://127.0.0.1:8000/api/${articleID}/`);
    props.history.push("/");
  };

  useEffect(() => {
    const articleID = props.match.params.articleID;
    console.log(articleID);
    axios.get(`http://127.0.0.1:8000/api/${articleID}/`).then((res) => {
      setArticle({
        data: res.data,
      });
    });
  }, [props.match.params.articleID]);

  return (
    <>
      <Card title={article.data.title}>
        <p>{article.data.content}</p>
      </Card>
      <br />
      <CustomForm
        requestType="put"
        articleID={props.match.params.articleID}
        btnText="Update"
      />
      <form onSubmit={handleDelete}>
        <Button type="danger" htmlType="submit">
          Delete
        </Button>
      </form>
    </>
  );
};

import React, { useState, useEffect } from "react";
import { Article } from "../components/Article";
import { CustomForm } from "../components/Form";
import axios from "axios";

export const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/").then((res) => {
      setArticles({
        data: res.data,
      });
    });
  }, []);

  return (
    <>
      <Article data={articles.data} />
      <br />
      <CustomForm requestType="post" btnText="Create" />
    </>
  );
};

import React from "react";
import { Form, Input, Button } from "antd";
import axios from "axios";

export const CustomForm = ({ requestType, articleID, btnText }) => {
  const handleFormSubmit = (event, requestType, articleID) => {
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;
    switch (requestType) {
      case "post":
        return axios
          .post("http://127.0.0.1:8000/api/", {
            title: title,
            content: content,
          })
          .then((res) => console.log(res))
          .catch((error) => console.error(error));
      case "put":
        return axios
          .put(`http://127.0.0.1:8000/api/${articleID}/`, {
            title: title,
            content: content,
          })
          .then((res) => console.log(res))
          .catch((error) => console.error(error));
    }
  };

  return (
    <div>
      <Form
        onSubmitCapture={(event) =>
          handleFormSubmit(event, requestType, articleID)
        }
      >
        <Form.Item label="Title">
          <Input name="title" placeholder="some title" />
        </Form.Item>
        <Form.Item label="Content">
          <Input name="content" placeholder="some content" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            {btnText}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

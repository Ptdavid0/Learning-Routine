import React from "react";
import { Button, Form, Input } from "antd";
import "./styles.css";

const Login: React.FC = () => {
  const onFinish = () => {};

  return (
    <div className="container">
      <div className="signin-div">
        <div>
          <span>Welcome to CodeLeap network!</span>
        </div>
        <div>
          <Form
            name="basic"
            layout="vertical"
            initialValues={{ remember: true }}
            // onFinish={onFinish}
          >
            <Form.Item
              label="Please enter your username"
              name="username"
              className="username-formItem"
            >
              <Input className="username-input" placeholder="Ricky Sanchez" />
            </Form.Item>
            <Form.Item>
              <Button className="signin-button" htmlType="submit">
                ENTER
              </Button>
            </Form.Item>
          </Form>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Login;

import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../redux/models";
import Actions from "../../redux/actions";
import "./styles.css";

const Login: React.FC = () => {
  const onFinish = () => {
    dispatch(setUsername(user));
  };

  const [user, setUser] = useState("");

  const { setUsername } = Actions;

  const username = useSelector((state: AppState) => state.username);
  const dispatch = useDispatch();

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
            onFinish={onFinish}
          >
            <Form.Item
              label="Please enter your username"
              name="username"
              className="username-formItem"
            >
              <Input
                className="username-input"
                placeholder="Ricky Sanchez"
                onChange={({ target: { value } }) => setUser(value)}
              />
            </Form.Item>
            <Form.Item>
              <Button
                className="signin-button"
                htmlType="submit"
                disabled={username ? false : true}
              >
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

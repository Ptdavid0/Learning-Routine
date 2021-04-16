import React from "react";
import { Button, Form, Input } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../redux/models";
import { setUsername } from "../../redux/actions";
import "./styles.css";
import { useHistory } from "react-router";

const Login: React.FC = () => {
  const username = useSelector((state: AppState) => state.username);
  const dispatch = useDispatch();
  const history = useHistory();

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
            onFinish={() => history.push("/list")}
          >
            <Form.Item
              label="Please enter your username"
              name="username"
              className="username-formItem"
            >
              <Input
                className="username-input"
                placeholder="Ricky Sanchez"
                onChange={({ target: { value } }) =>
                  dispatch(setUsername(value))
                }
              />
            </Form.Item>
            <Form.Item>
              <Button
                className="signin-button"
                htmlType="submit"
                disabled={!username}
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

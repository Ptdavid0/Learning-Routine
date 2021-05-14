import React, { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { AppState } from "../../redux/models";

import "./styles.css";

const List: React.FC = () => {
  const username = useSelector((state: AppState) => state.username);
  const history = useHistory();

  const checkLogin = useCallback(() => {
    if (!username) {
      history.push("/");
    }
  }, [history, username]);

  useEffect(checkLogin, [checkLogin]);

  return <div>Champions</div>;
};

export default List;

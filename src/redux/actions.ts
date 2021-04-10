const Actions = {
  ENTER_USERNAME: "Enter new username for the application",

  setUsername: (username: string) => ({
    type: Actions.ENTER_USERNAME,
    payload: username,
  }),
};

export default Actions;

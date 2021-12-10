const reducer = (state, action) => {
  const { name, value } = action;
  const newState = {
    ...state,
    [name]: value,
  };
  return newState;
};

const SignUpForm = () => {
  const [state, dispatch] = useReducer(reducer, {
    fname: '',
    sname: '',
    email: '',
    password: '',
  });
  const handlerInput = ({ target: { name, value } }) => {
    const action = { name, value };
    dispatch(action);
  };

  return (
    <div>
      <h2>sign up</h2>
      <form>
        <input
          type="text"
          name="fname"
          value={state.fname}
          onChange={handlerInput}
        />
        <input
          type="text"
          name="sname"
          value={state.fname}
          onChange={handlerInput}
        />
        <input
          type="email"
          name="email"
          value={state.fname}
          onChange={handlerInput}
        />
        <input
          type="password"
          name="password"
          value={state.fname}
          onChange={handlerInput}
        />
      </form>
    </div>
  );
};

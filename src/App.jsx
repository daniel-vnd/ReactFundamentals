

const App = () => {

  let status = false;

  return (
    <div>
      <h1>Login Status</h1>
      {status && <button>Logout</button>}
    </div>
  );
};

export default App;
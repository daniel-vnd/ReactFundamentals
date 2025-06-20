
// 24. JSX Conditional Rendering Using Immidiatly Invoked Function

const App = () => {

  let status = true;

  return (
    
    <div>
      <h1>Login Status</h1>
      {(() => {

        if (status == true) {
          return <button>Logout</button>
        } else {
          return <button>Login</button>
        }

      })()}
    </div>
  );
};

export default App;
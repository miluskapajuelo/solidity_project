import './App.css';

function App() {
  const wave =()=>{
    console.log('hi')
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hi Waves here!</h1>
      </header>
      <section className="wave">
        <button className="btn-grad" onClick={wave}>
          Wave at Me
        </button>
      </section>
      <section>
        <h5>hey hey</h5>
      </section>
    </div>
  );
}

export default App;

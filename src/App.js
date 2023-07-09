import { Navbar, Landing } from './components';

function App() {

  return (
      <div className="App">
        {/* Navbar */}
        <div className="w-full">
          <Navbar />
        </div>

        <div className="w-full">
          <Landing />
        </div>
      </div>
  );
}

export default App;

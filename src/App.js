import "./App.css";
import Router from "./Router";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {
  return (
    <>
      <div className="App">
        <div className="flex font-sans">
          <div className="flex-none left-side relative">
            <Sidebar />
          </div>
          <div className="flex-auto right-side p-6">
            <Router />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

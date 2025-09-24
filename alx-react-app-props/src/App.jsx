import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header';
import MainContent from './components/MainContent';
import UserContext from "./components/UserContext";
import ProfilePage from './components/ProfilePage';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile'


import { useState } from 'react'
import { useContext } from "react";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <>
      <div>
        <WelcomeMessage />
        <Header />
        <MainContent />

        <UserContext.Provider value={userData}>
      <div>
        <h1>Welcome to My App</h1>
        {/* ProfilePage can now access userData via context */}
        <ProfilePage />
      </div>
    </UserContext.Provider>

        <Footer />
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
        

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;

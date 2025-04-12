import { useState } from 'react'
import './App.css'
import WelcomeScreen from './components/WelcomeScreen'
import SigninPage from './components/SigninPage'
import CreateAccountForm from './components/CreateAccountForm'
import AccountSettings from './components/AccountSettings'

function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState('welcome'); // 'welcome' | 'form' | 'settings'
  const [userData, setUserData] = useState(null);

  const handleCreateAccountClick = () => {
    setPage('form');
  };
  const handleSigninPageClick = () => {
    setPage('signin')
  }

  const handleFormSubmit = (data) => {
    setUserData(data); // Save form data
    setPage('settings');
  };

  return (
    <>
     {page === 'welcome' && <WelcomeScreen onCreateAccount={handleCreateAccountClick} onSigning={handleSigninPageClick} />}
      {page === 'form' && <CreateAccountForm onSubmit={handleFormSubmit} />}
      {page === 'settings' && <AccountSettings user={userData} />}
      {page === 'signin' && <SigninPage onSubmit={handleFormSubmit}/>}
      
    {/* <WelcomeScreen /> */}
    {/* <SigninPage /> */}
    {/* <CreateAccountForm /> */}
    {/* <AccountSettings/> */}
    </>
  )
}

export default App

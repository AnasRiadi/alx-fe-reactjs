import React from 'react';
import './App.css';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <div>
      <WelcomeMessage />
      <Header />
      <MainContent />

      <div>
        <UserProfile 
          name="Alice" 
          age="25" 
          bio="Loves hiking and photography" 
        />
        <UserProfile 
          name="Bob" 
          age="30" 
          bio="Avid traveler and foodie" 
        />
        <UserProfile 
          name="Charlie" 
          age="28" 
          bio="Enjoys playing guitar and painting" 
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;

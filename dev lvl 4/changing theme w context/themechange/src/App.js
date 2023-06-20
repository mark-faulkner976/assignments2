import './App.css';
import Header from './components/Header'
import Button from './components/Button'
import {ThemeContext, ThemeContextProvider} from './themeContext'
import React, {useContext} from "react";
import Footer from './components/Footer';

function App() {

  const {color} = useContext(ThemeContext)

  return (
    <>
      <ThemeContextProvider>
        <div className={`App ${color}-theme`}>
          <Header />
          <Button />
          <Footer />
        </div>
      </ThemeContextProvider>
    </>
  );
}

export default App;

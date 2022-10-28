import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import PostsList from './components/PostsList/PostsList';
import PostContextProvider from './postContext';
import Button from './components/Button/Button'

function App() {
  return (
    <>
    <PostContextProvider>
      <Navbar />
      <PostsList />
      {/* <Button text={'Register'} /> */}
      <Button>Register</Button>
      <Footer />
    </PostContextProvider>
    </>
  )
};

export default App;

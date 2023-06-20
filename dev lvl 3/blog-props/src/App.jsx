import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import BlogPost from './components/BlogPost.jsx'
import data from './data'


//title subTitle author date
export default function App() {
  const books = data.map(book => {
    return (
      <BlogPost 
        key={book.title}
        title={book.title}
        subTitle={book.subTitle}
        author={book.author}
        date={book.date}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      {books}
      <Footer />
    </div>
  )
}


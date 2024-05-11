import './App.css'
import { useState } from 'react'
import Blogs from './components/Blogs'
import Bookmarks from './components/Bookmarks'
import Header from './components/Header'

function App() {
    const [bookmark, setBookmarks] = useState([]);
    const [readingTime, setReadingTime] = useState(0);

    const handleBookmark = blog => {
        blog = [...bookmark, blog]
        setBookmarks(blog);
    }

    const totalReadingTime = (id, time) => {
        setReadingTime(time + readingTime);
        const remainingBookmarks = bookmark.filter(item => item.id !== id);
        setBookmarks(remainingBookmarks);
    }

    return (
        <div className='xl:container xl:mx-auto p-10'>
            <Header></Header>
            <main className='lg:flex lg:gap-6 mt-8'>
                <Blogs handleBookmark={handleBookmark} totalReadingTime={totalReadingTime}></Blogs>
                <Bookmarks bookmark={bookmark} readingTime={readingTime}></Bookmarks>
            </main>
        </div>
    )
}

export default App

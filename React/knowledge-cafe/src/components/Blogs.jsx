import { useEffect, useState } from "react"
import Blog from "./Blog"
import PropTypes from 'prop-types'

const Blogs = ({ handleBookmark, totalReadingTime }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div className="lg:w-2/3">
      <h1 className="text-3xl font-bold mb-6">Blogs</h1>
      <div className="flex flex-col gap-16">
        {
          blogs.map(blog => <Blog key={blog.id} blog={blog} handleBookmark={handleBookmark} totalReadingTime={totalReadingTime}></Blog>)
        }
      </div>
    </div>
  );
}

Blogs.propTypes = {
  handleBookmark: PropTypes.func,
  totalReadingTime: PropTypes.func
}

export default Blogs;
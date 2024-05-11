import PropTypes from 'prop-types'
import BookmarkIcon from '../assets/images/bookmark-white.png'

const Blog = ({ blog, handleBookmark, totalReadingTime }) => {
  const { id, title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;

  return (
    <div>
      <div>
        <img className='rounded w-full' src={cover} alt="" />
      </div>
      <div className='mt-4'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <img src={author_img} width={40} height={40} alt="" />
            <div>
              <h3>{author}</h3>
              <p>{posted_date}</p>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <p>{reading_time} min read</p>
            <button onClick={() => handleBookmark(blog)}>
              <img src={BookmarkIcon} width={20} height={20} alt="Bookmark" />
            </button>
          </div>
        </div>
        <div className='mt-4'>
          <h1 className='text-3xl lg:text-4xl font-bold'>{title}</h1>
        </div>
        <div className='flex gap-4 mt-4'>
          {
            hashtags.map((tag, idx) => <p key={idx}>#{tag}</p>)
          }
        </div>
        <div className='mt-4'>
          <button onClick={() => totalReadingTime(id, reading_time)} className='text-purple-800 font-semibold underline'>Mark as read</button>
        </div>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmark: PropTypes.func,
  totalReadingTime: PropTypes.func
}

export default Blog;
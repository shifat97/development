import PropTypes from 'prop-types'
import Bookmark from './Bookmark';

const Bookmarks = ({ bookmark, readingTime }) => {

  return (
    <div className="lg:w-1/3 mt-10 lg:mt-0">
      <h1 className="text-3xl font-bold mb-6">Bookmarks</h1>
      <div>
        <div className="bg-purple-100 p-4 text-center border border-purple-800 rounded-md">
          <h2 className="text-purple-800 font-bold">Spent time on read: {readingTime}min</h2>
        </div>
        <div className="bg-gray-100 mt-6 px-6 py-8 rounded-md">
          <h1 className="font-bold">Bookmarked Blogs: {bookmark.length}</h1>
          <div>
            {
              bookmark.map((item, index) => <Bookmark key={index} item={item}></Bookmark>)
            }
          </div>
        </div>
      </div>
    </div>
  );
};

Bookmarks.propTypes = {
  bookmark: PropTypes.array,
  readingTime: PropTypes.number
}

export default Bookmarks;
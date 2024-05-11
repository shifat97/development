import PropTypes from 'prop-types'

const Bookmark = ({ item }) => {
  return (
    <div className="mt-4">
      <p className="text-sm font-semibold p-4 bg-white rounded-md">{item.title}</p>
    </div>
  );
};

Bookmark.propTypes = {
  item: PropTypes.object
}

export default Bookmark;
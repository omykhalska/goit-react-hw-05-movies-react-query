import PropTypes from 'prop-types';

export function Reviews({ reviews }) {
  if (reviews.length === 0) {
    return <p>К этому фильму пока что нет рецензий.</p>;
  }

  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <b>Автор: {author}</b>
          <p>"{content}"</p>
        </li>
      ))}
    </ul>
  );
}

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
    }),
  ).isRequired,
};

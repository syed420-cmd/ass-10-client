import PropTypes from 'prop-types';

const Button = ({ style, displayName, type, id, handleClick }) => {
  return (
    <div className='w-full'>
      <button
        type={type}
        id={id}
        onClick={handleClick}
        className='bg-blue-400 hover:bg-blue-500 text-white font-semibold transition-all py-3 px-7 font-montserrat rounded '
        style={style}
      >
        {displayName}
      </button>
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  id: PropTypes.string,
  style: PropTypes.object,
  handleClick: PropTypes.func,
};

export default Button;

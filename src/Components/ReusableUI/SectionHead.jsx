import PropTypes from 'prop-types';

const SectionHead = ({ title, subTitle }) => {
  return (
    <div
      data-aos='fade-down'
      className='text-center mx-auto mb-0 max-w-screen-md lg:mb-16'
    >
      <h2 className='mb-4 text-5xl md:text-4xl tracking-tight font-bold text-gray-900'>
        {title}
      </h2>
      <p className='font-light text-gray-500 text-lg w-11/12 mx-auto'>{subTitle}</p>
    </div>
  );
};

SectionHead.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default SectionHead;

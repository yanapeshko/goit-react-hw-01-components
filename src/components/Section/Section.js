import PropTypes from 'prop-types';

const Section = ({ classNames = '', children }) => {
  return <section className={classNames}>{children}</section>;
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;

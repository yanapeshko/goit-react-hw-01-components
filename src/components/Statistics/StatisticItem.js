import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
import onRandomColorGenerator from '../../helpers/generators/onRandomColorGenerator';

const StatisticItem = ({ item, colors }) => {
  return (
    <li
      key={item.id}
      className={styles.item}
      style={{
        backgroundColor: colors[onRandomColorGenerator(0, colors.length - 1)],
      }}
    >
      <span className={styles.label}>{item.label}</span>
      <span className={styles.percentage}>{item.percentage}%</span>
    </li>
  );
};

StatisticItem.defaultProps = {
  label: 'label',
  percentage: 0,
};

StatisticItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};
export default StatisticItem;

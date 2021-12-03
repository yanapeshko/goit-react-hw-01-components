import React from 'react';
import PropTypes from 'prop-types';
import { getRandomColor } from '../../helpers/generators/getRandomColor';
import s from './StatisticItem.module.css';

const StatisticItem = ({ item, colors }) => {
  return (
    <li
      key={item.id}
      className={s.item}
      style={{
        backgroundColor: colors[getRandomColor(0, colors.length - 1)],
      }}
    >
      <span className={s.label}>{item.label}</span>
      <span className={s.percentage}>{item.percentage}%</span>
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

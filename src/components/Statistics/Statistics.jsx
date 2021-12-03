import React from 'react';
import PropTypes from 'prop-types';
import StatisticItem from '../StatisticItem/StatisticItem.jsx';
import s from './Statistics.module.css';

const Statistics = ({ title, stats, colors }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}

      <ul className={s.statsList}>
        {stats.map(item => (
          <StatisticItem item={item} colors={colors} />
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: 'title',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({}).isRequired).isRequired,
};

export default Statistics;

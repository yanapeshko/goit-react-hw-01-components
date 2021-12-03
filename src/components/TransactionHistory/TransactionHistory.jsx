import React from 'react';
import PropTypes from 'prop-types';
import TransactionItem from '../Transactions/Transactions.jsx';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({ transactionData }) => {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{transactionData.map(TransactionItem)}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  transactionData: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default TransactionHistory;

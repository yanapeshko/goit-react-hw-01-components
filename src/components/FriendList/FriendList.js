import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

const FriendList = ({ friendsData }) => {
  return (
    friendsData.length > 0 && (
      <ul className={styles.friendList}>{friendsData.map(FriendListItem)}</ul>
    )
  );
};

FriendList.propTypes = {
  friendsData: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default FriendList;

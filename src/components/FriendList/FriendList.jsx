import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ friendsData }) => {
  return (
    friendsData.length > 0 && (
      <ul className={s.friendList}>{friendsData.map(FriendListItem)}</ul>
    )
  );
};

FriendList.propTypes = {
  friendsData: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};

export default FriendList;

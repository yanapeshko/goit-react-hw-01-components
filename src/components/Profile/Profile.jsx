import React from 'react';
import PropTypes from 'prop-types';
import ProfileStats from '../ProfileStats/ProfileStats.jsx';
import s from './Profile.module.css';

const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatar} alt={username} className={s.avatar} />
        <p className={s.name}>{username}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ProfileStats {...stats} />
    </div>
  );
};

Profile.defaultProps = {
  username: 'unknown user',
  tag: 'no tag',
  location: 'no location',
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape().isRequired,
  }).isRequired,
};

export default Profile;

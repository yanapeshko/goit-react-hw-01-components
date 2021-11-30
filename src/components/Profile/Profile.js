import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import ProfileStats from './ProfileStats';

const Profile = ({ user }) => {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img src={avatar} alt={username} className={styles.avatar} />
        <p className={styles.name}>{username}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
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

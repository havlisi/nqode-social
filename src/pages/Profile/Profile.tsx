import { UserCircleIcon } from '@heroicons/react/16/solid';
import { useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import SinglePost from 'src/components/SinglePost/SinglePost';
import Button from 'src/components/core/Button/Button';
import { Post } from 'src/models/Post';
import { User } from 'src/models/User';
import classes from 'src/pages/Profile/Profile.module.scss';
import { getUserByUsername, getUserPosts } from 'src/services/UserService';

const Profile = () => {
  const loggedInUser = JSON.parse(localStorage.getItem('user')!);
  const [posts, setPosts] = useState<Post[]>([]);
  const [user, setUser] = useState<User>();
  const { username } = useParams();

  const fetchUser = useCallback(async () => {
    const response = await getUserByUsername(username!);
    setUser(response.data);
  }, []);

  const fetchUserPosts = useCallback(async () => {
    if (user) {
      const response = await getUserPosts(user.id);
      setPosts(response.data);
    }
  }, [user]);

  useEffect(() => {
    fetchUser();
    fetchUserPosts();
  }, []);

  return (
    <div className={`${classes['c-profile']}`}>
      <div className={`${classes['c-profile__side-card']}`}>
        <div className={`${classes['c-profile__profile-info']}`}>
          <h2 className={`${classes['c-profile__title']}`}>Profile</h2>
          <UserCircleIcon className={`${classes['c-profile__user-icon']}`} />
          <div className={`${classes['c-profile__name']}`}>
            <span>{user && user.firstName}</span> &nbsp;
            <span>{user && user.lastName}</span>
          </div>
          <span className={`${classes['c-profile__username']}`}>@{user && user.username}</span>
        </div>
        <div className={`${classes['c-profile__button']}`}>
          {loggedInUser.username !== user?.username ? (
            <Link to='/'>
              <Button label='Add friend' />
            </Link>
          ) : (
            <Link to={`/profile/${loggedInUser.username}/edit`}>
              <Button label='Edit account' />
            </Link>
          )}
        </div>
      </div>
      <div className={`${classes['c-profile__posts-container']}`}>
        {!posts.length ? (
          <div className={`${classes['c-profile__posts']}`}>
            <span>No posts uploaded</span>
            <img width='250' src='../src/assets/images/not_found.svg' alt='No posts' />
          </div>
        ) : (
          <div className={`${classes['c-profile__posts']}`}>
            {posts.map((singlePost) => (
              <SinglePost post={singlePost} key={singlePost.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import classes from 'src/components/SinglePost/SinglePost.module.scss';
import { Post } from 'src/models/Post';
import Button from '../core/Button/Button';
import { UserCircleIcon } from '@heroicons/react/16/solid';
import { getUserById } from 'src/services/UserService';
import { User } from 'src/models/User';

interface SinglePostProps {
  post: Post;
}

const SinglePost: React.FC<SinglePostProps> = ({ post }) => {
  const [user, setUser] = useState<User>();

  const fetchUser = useCallback(async () => {
    const response = await getUserById(post!.userId);
    setUser(response.data);
  }, [post]);

  useEffect(() => {
    fetchUser();
  }, []);

  console.log(post);
  console.log(user);

  return (
    <div className={classes['c-post']}>
      <div className={classes['c-post__user']}>
        <UserCircleIcon className={classes['c-post__user-icon']} />
        <div className={classes['c-post__user-info']}>
          <span>
            {user?.firstName} {user?.lastName}
          </span>
          <span>@{user?.username}</span>
        </div>
      </div>
      <div className={classes['c-post__post-info']}>
        {/* <div className={classes['c-post__post-content']}>{post.text}</div> */}
        <div className={classes['c-post__button']}>
          <Link to={`/edit/${post.id}`}>
            <Button label='Edit' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SinglePost;

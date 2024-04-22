import { UserCircleIcon } from '@heroicons/react/16/solid';
import { useState } from 'react';
import classes from 'src/components/NewPost/NewPost.module.scss';
import Button from '../core/Button/Button';
import { createPost } from 'src/services/PostService';
import ValidationMessage from '../core/ValidationMessage/ValidationMessage';

const NewPost = () => {
  const loggedInUser = JSON.parse(localStorage.getItem('user')!);
  const [post, setPost] = useState({
    text: '',
    userId: loggedInUser.id
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = () => {
    if (post.text != '') {
      createPost(post)
        .then((response) => {
          setPost(response.data);
          console.log(response.data);
          setErrorMessage('');
        })
        .catch((error) => {
          setErrorMessage(error.response.data.message);
        });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setPost({
      ...post,
      text: e.target.value
    });

  return (
    <div className={classes['c-post']}>
      <div className={classes['c-post__user']}>
        <UserCircleIcon className={classes['c-post__user-icon']} />
        <div className={classes['c-post__user-info']}>
          <span>
            {loggedInUser.firstName} {loggedInUser.lastName}{' '}
          </span>
          <span>@{loggedInUser.username}</span>
        </div>
      </div>
      <div className={classes['c-post__post-info']}>
        <textarea
          className={classes['c-post__post-content']}
          value={post.text}
          name='text'
          rows={12}
          onChange={handleInputChange}
          placeholder='Write text here...'
        />
        <ValidationMessage message={errorMessage} />
        <div className={classes['c-post__button']}>
          <Button label='Submit' onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default NewPost;

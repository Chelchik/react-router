import React from 'react'
import { useAuth } from '../hook/useAuth'
import { redirect, useNavigate, useNavigation } from 'react-router';
import NewPost from './NewPost';

function CreatePost() {
  const {signout} = useAuth();
  const navigate = useNavigate();
  const navigation = useNavigation();

  return (
    <div className='createPost'>
        <h2>Create a post</h2>
        <NewPost submitting={navigation.state === 'submitting'} />
        <button onClick={() => signout(() => navigate('/', {replace: true}))}>Login out</button>
    </div>
  )
}

const createPost = async ({title, body, userId}) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    headers: { 'Content-Type' : 'application/json' },
    body: JSON.stringify({title, body, userId})
  });

  const newPost = await res.json();

  return newPost;
}

export const createPostAction = async ({request}) => {
  const formData = await request.formData();

  const newPost = {
    title: formData.get('title'),
    body: formData.get('body'),
    userId: formData.get('userId')
  };

  const post = await createPost(newPost);
  console.log(post);
  
  return redirect('/blog/' + post.id);
}

export default CreatePost
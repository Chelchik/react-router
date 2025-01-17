import React from 'react';
import { useActionData, useLoaderData, useNavigation, /*useParams*/ } from 'react-router-dom';
import UpdatePost from './UpdatePost';

function EditPost() {
  // const {id} = useParams();
  const data = useActionData();
  const {post, id} = useLoaderData();
  const navigation = useNavigation();

  return (
    <div className='edit-box'>
        {data?.message && <div style={{color: 'blue'}}>{data.message}</div>}
        <h3>Edit post {id}</h3>
        <UpdatePost {...post} submitting={navigation.state === 'submitting'} />
    </div>
  )
}

const updatePost = async (post) => {
 const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.get('id')}`, {
    method: 'PUT',
    body: post 
 })

 return res.json()
}

export const updatePostAction = async ({request}) => {
  const formData = await request.formData();

  if (!formData.get('title') || !formData.get('body')) {
    return {message: "All field are required!!"}
  }

  const updatedPost = await updatePost(formData);

  return {message: `Post ${updatedPost.id} was successfully updated`}
}

export default EditPost;
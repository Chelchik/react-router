import React, { Suspense, useEffect, useState } from 'react'
import { Await, useAsyncValue, useLoaderData, useNavigate, useParams } from 'react-router'
import { Link } from 'react-router-dom';

const Post = () => {
  const post = useAsyncValue();

  return (
    <>
      <h3>{post.title}</h3>

      <span>{post.body}</span>
    </>
  )
}

const Comments = () => {
  const comments = useAsyncValue()

  return (
    <div className='comments-box'>
      <h2>Comments</h2>
      {
        comments.map((comment) => {
          return <div className='comment-box' key={comment.id}>
            <h3>{comment.email}</h3>
            <h4>{comment.name}</h4>
            <p>{comment.body}</p>
          </div>
        })
      }
    </div>
  )
}

function SignalePhage() {
  const { post, id, comments } = useLoaderData();
  const navigate = useNavigate();

  const goBack = () => navigate('/blog', { state: 123 });

  // const goHome = () => navigate('/', { replace: true })

  return (
    <div className='post-box'>
      <div className='post'>
        <Suspense fallback={<h2>Post is Loading...</h2>}>
          <Await resolve={post}>
            <Post />
          </Await>
        </Suspense>

        <Suspense fallback={<h2>Comments is Loading...</h2>}>
          <Await resolve={comments}>
            <Comments />
          </Await>
        </Suspense>

        <Link to={`/blog/${post.id}/edit`}>Edit this post</Link>

        <div className='btn-box'>
          <button className='go-back-btn' onClick={goBack}>Go back</button>
          {/* <button className='go-home-btn' onClick={goHome}>Go home</button> */}
        </div>
      </div>
    </div>
  )
}

async function getPostById(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return await response.json();
}

async function getCommentsById(id) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
  return await response.json();
}

export const postLoader = async ({ params }) => {
  const id = params.id;

  return { post: await getPostById(id), id, comments: getCommentsById(id) }
}

export default SignalePhage;
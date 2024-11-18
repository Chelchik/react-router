import React, { Suspense, useEffect, useState } from 'react'
import { Await, defer, json, Link, resolvePath, useLoaderData, useSearchParams } from 'react-router-dom';
import BlogFilter from './BlogFilter';

function Blog() {
  const {posts} = useLoaderData()
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get('post') || '';
  const latest = searchParams.has('latest');

  const startsFrom = latest ? 80 : 1;

  return (
    <div className='blog-box'>
      <h3>Blogs</h3>

      <BlogFilter postQuery={postQuery} latest={latest} setSearchParams={setSearchParams} />

      <Link to="/blog/new">Add new post</Link>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Await resolve={posts}>
          {
            (resolvedPosts) => (<>
              <div className='blog-links-box'>
                {
                  resolvedPosts.filter(
                    post => post.title.includes(postQuery) && post.id >= startsFrom
                  ).map((post) => {
                    return <Link to={`${post.id}`} className='postLink' key={post.id}>{post.title}</Link>
                  })
                }
              </div>
            </>)
          }
        </Await>
      </Suspense>
    </div>
  )
}

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  // if (!response.ok) {
  //   throw new Response('', {status: response.status, statusText: 'Not found'})
  // }

  return response.json();
}

export const blogLoader = async () => {  
  // if (!posts.length) {
  //   throw json({message: "Not Found", reason: "Wrong url"}, {status: 404});
  // }

  return defer({
    posts: getPosts()
  });
}

export default Blog;

import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import Header from './components/Header';
import Layout from './components/Layout';

import LoginPhage from './Phages/LoginPhage';
import CreatePost, { createPostAction } from './Phages/CreatePost';
import Home from './Phages/Home';
import About from './Phages/About';
import Blog, { blogLoader } from './Phages/Blog';
import SignalePhage, { postLoader } from './Phages/SignalePhage'
import EditPost, { updatePostAction } from './Phages/EditPost';

import RequireAuth from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';
import NotFound from './Phages/NotFound';
import ErrorPage from './Phages/ErrorPage';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />} >
    <Route index element={<Home />} />
    <Route path='about/*' element={<About />}>
      <Route path="contacts" element={<p>Our contact</p>} />
      <Route path="team" element={<p>Our team</p>} />
    </Route>
    <Route path='about-us' element={<Navigate to="/about" replace />} />
    <Route path='blog' element={<Blog />} loader={blogLoader} /*errorElement={<ErrorPage />}*/ />
    <Route path='blog/:id' element={<SignalePhage />} loader={postLoader} />
    <Route path='blog/:id/edit' element={<EditPost />} loader={postLoader} action={updatePostAction} />
    <Route path='blog/new' element={
      <RequireAuth>
        <CreatePost />
      </RequireAuth>
    } action={createPostAction} />
    <Route path='login' element={<LoginPhage />} />
    <Route path='*' element={<NotFound />} />
  </Route>
))

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;

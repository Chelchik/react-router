import React from 'react'
import { Form } from 'react-router-dom'

function NewPost({submitting}) {
  return (
    <Form action="/blog/new" method='post' id='createPostForm'>
        <label>
            Title:
            <input type="text" name='title' />
        </label>

        <label>
            Body:
            <input type="text" name='body' />
        </label>

        <input type="hidden" name='userId' value="1" />
        <input type="submit" value="Add post" className='submit' disabled={submitting} />
    </Form>
  )
}

export default NewPost;
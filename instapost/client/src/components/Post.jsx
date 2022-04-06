import React from "react";
import moment from "moment";

import ShowMore from './ShowMore.jsx';

function Post(props) {
  console.log('post', props)

  // function handleShowMoreClick() {

  // }

  function mapPosts(props) {
    return props.allPosts.map((post) => {
      // if post.body.length is less than 144
      if (post.body.length < 144) {
        return (
          <div key={post._id} className='post'>
            <div className='post__byline'>
              <div className='center'>
                <img
                  className='avatar'
                  src='https://www.w3schools.com/w3images/avatar6.png'
                  alt='user avatar'
                />
                <span className='post__byline__user'>{`${post.username}`}</span>
              </div>
              {moment().startOf('hour').fromNow()}
            </div>
            <div className='post__image'>
              <img src={`${post.imageUrl}`} />
            </div>
            <p>{post.body}</p>

            <div className='post__actions'>
              <div className='post__likes'>{`Likes: ${post.likes}`}</div>
              <div className='post__buttons'>
                <button>Like</button>
                <button>Comment</button>
              </div>
            </div>
          </div>
        )
        // else
      } else {
        // return only 144 characters and render ShowMore
        return (
          <div key={post._id} className='post'>
            <div className='post__byline'>
              <div className='center'>
                <img
                  className='avatar'
                  src='https://www.w3schools.com/w3images/avatar6.png'
                  alt='user avatar'
                />
                <span className='post__byline__user'>{`${post.username}`}</span>
              </div>
              {moment().startOf('hour').fromNow()}
            </div>
            <div className='post__image'>
              <img src={`${post.imageUrl}`} />
            </div>
            <p>{post.body.slice(0, 145)}...</p>
            <ShowMore />

            <div className='post__actions'>
              <div className='post__likes'>{`Likes: ${post.likes}`}</div>
              <div className='post__buttons'>
                <button>Like</button>
                <button>Comment</button>
              </div>
            </div>
          </div>
        )
      }
    })
  }

  return (
    <div>{mapPosts(props)} </div>
  );
}

export default Post;

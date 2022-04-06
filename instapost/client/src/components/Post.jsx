import React from "react";
import moment from "moment";

import ShowMore from './ShowMore.jsx';

function Post(props) {
  console.log('post', props)

  function handleShowMoreClick() {
    console.log("I've been clicked!")
  }

  function createBodySections(post) {
    const characterCount = post.body.length;
    const bodyArr = post.body.split('\n');
    const len = bodyArr.length;

    if (characterCount < 144 || props.postLength) {
      if (len % 2 === 0) {

        const firstHalf = bodyArr.slice(0, (len / 2) + 1).join(' ');
        const secondHalf = bodyArr.slice((len / 2) + 1).join(' ');
        return (
          <div>
            <p>{firstHalf}</p>
            <p>{secondHalf}</p>
          </div>
        )
      } else {
        const firstHalf = bodyArr.slice(0, Math.floor((len / 2)) + 1).join(' ');
        const secondHalfPlusOne = bodyArr.slice(Math.floor((len / 2)) + 1).join(' ');
        return (
          <div>
            <p>{firstHalf}</p>
            <p>{secondHalfPlusOne}</p>
          </div>
        )
      }
    } else {
      return (
        <div>
          <p>{post.body.slice(0, 145)}...</p>
          <ShowMore handleShowMore={handleShowMoreClick} />
        </div>
      )
    }
  }

  function mapPosts(props) {
    return props.allPosts.map((post) => {
      // create an array to sentences from the body of the post
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
          {createBodySections(post)}

          <div className='post__actions'>
            <div className='post__likes'>{`Likes: ${post.likes}`}</div>
            <div className='post__buttons'>
              <button>Like</button>
              <button>Comment</button>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div>{mapPosts(props)} </div>
  );
}

export default Post;

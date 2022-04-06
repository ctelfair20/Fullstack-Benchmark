import React from "react";

import Post from "./Post.jsx";

function Feed(props) {
  console.log('feed props :', props)
  return (
    <div className='feed'>
      {/* section for post form */}

      {/* section for all posts */}
      <Post postLength={props.postLength} allPosts={props.allPosts} />
    </div>
  );
}

export default Feed;

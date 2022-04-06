import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Feed from './components/Feed.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allPosts: [],
      fullPost: false
    }
  }

  componentDidMount() {
    $.ajax({
      method: 'GET',
      url: '/api/posts',
      contentType: 'application/json',
      success: (data) => {
        console.log(data);
        this.setState({
          allPosts: data
        })
      },
      error: (err) => {
        throw err;
      }
    })
  }

  render() {
    return (
      <div>
        <div className="nav">
          <span className="nav__logo" >
            Instapost
          </span>
        </div>

        <div className="main">
          <Feed postLength={this.state.fullPost} allPosts={this.state.allPosts} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

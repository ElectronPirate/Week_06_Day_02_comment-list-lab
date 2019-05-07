import React, {Component} from 'react';
import CommentList from '../components/CommentList.js';
import CommentForm from '../components/CommentForm'


class CommentBox extends Component {

  constructor(props){
    super(props)
    this.state = {
      comments: [

        { id: 1,
          author: "Seneca",
          text: "Luck is what happens when preparation meets opportunity."
        },
        { id: 2,
          author: "Dr. Suess",
          text: "Don't cry because it's over, smile because it happened."
        }

      ]

    }
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
  }

  handleCommentSubmit(newComment){
    const updatedComments = [...this.state.comments, newComment]
    this.setState({comments: updatedComments})
  }

  render(){
    return (
      <div className="comment-box">
      <h2>Comments</h2>
      <CommentForm handleCommentSubmit={this.handleCommentSubmit} />
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentBox;

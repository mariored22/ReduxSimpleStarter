import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {showdetails} from '../actions/index';

class ShowDetails extends Component{
  
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.showdetails(id);
  }

  render(){
    const { post } = this.props;
    if (!post) {
      return <div>Loadingg...</div>;
    }

    return (  
      <div key = {post.id} >
      <Link to = "/" >
      Back
      </Link>
      <h1>Rank: {post.rank} </h1>
      <h2>Name: {post.name} </h2> 
      <h2>Price: {post.price_usd}</h2>
    </div>
    );
  }
}
function mapStateToProps({users}, ownProps){
  return {
    post: users[ownProps.match.params.id]
  }
}

export default connect(mapStateToProps,{showdetails} )(ShowDetails);
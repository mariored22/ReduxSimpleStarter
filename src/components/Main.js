import React, {Component} from 'react';
import {connect} from 'react-redux';
import {userlist} from '../actions/index';
import { Link } from 'react-router-dom';
import _ from 'lodash';
class Main extends Component{

  componentWillMount(){
    this.props.userlist();
  }
  

  coinlist(){
    return _.map(this.props.users, coins => {
     const icons = coins.symbol.toLowerCase();
 const llink = "https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/32/icon/";


      return(
        <Link to = {`details/${coins.id}`} >
        <div key={coins.rank} >
         <img height="32" width="32" src={llink + icons + ".png"} key={coins.rank}  />

          {coins.id}
          {coins.price_usd}
        </div>
        </Link>
      );
    })
  }

  render(){
    return (
      <div className = "user-list">
        <h2> Users List </h2>
        {this.coinlist()}
     </div>
    );
  }
}
function mapStateToProps(state){
return{
  users: state.users
}
}

export default connect(mapStateToProps, {userlist})(Main);



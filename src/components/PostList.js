import React from 'react';
import { connect } from 'react-redux';
import {fetchPostListActionCreator} from '../actions';

class PostList extends React.Component {
    componentDidMount(){
        this.props.fetchPostListActionCreator();
    }
    
    render(){   
        return(
            <div>Project List</div>
        );  
    }
}

export default connect(null, { fetchPostListActionCreator })(PostList);
import React from 'react';
import { connect } from 'react-redux';

class UserHeader extends React.Component {   

    render() {
        const { user } = this.props
        if(!user) {
            return null;
        }
        return(
            <h1>{user.name}</h1>
        );
    }
}

// below two items can be separated into a file to keep this component presentational only.
const mapStateToProps = (state, ownProps) => {
    // it is common to handle all state/props related logic in here:
    return { user: state.users.find(user => user.id === ownProps.userId) };
    //state.users is set with combined action after fetching all posts: no action from here.
}
export default connect(mapStateToProps)(UserHeader);
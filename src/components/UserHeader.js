import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions'

class UserHeader extends React.Component {   
    componentDidMount() {
        this.props.fetchUser(this.props.userId)
    }
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
}
export default connect(mapStateToProps, { fetchUser })(UserHeader);
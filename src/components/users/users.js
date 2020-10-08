import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchUsersAction } from '../../redux/actions/add-user-action';
import './styles.css';

class UserContainer extends Component{

    componentWillMount() {
        this.props.fetchUsersAction();

    }

    render() {

        
        const { users } = this.props;
        return (
            <div>
                {
                    users.loading ? (
                        <h2>Loading...</h2>
                    ) : users.error ? (
                    <h2>Щось пішло не так: {users.error}</h2>
                    ) : (
                        <div>
                            <div className="users-wrapper">
                                {users.map((user, index) => 
                                <div key={index} className="user-container">
                                    <img className="user-avatar" src={user.avatar} alt="avatar"/>
                                    <div className="user-name"> {user.name} </div>
                                    <div className="user-username"> {user.username} </div>
                                </div>)}
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    return {
        users: store.user.users
    }
}

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchUsers: () => dispatch(fetchUsers())
//     }
// }

export default connect(
    mapStateToProps,
    {fetchUsersAction: fetchUsersAction}
)(UserContainer);
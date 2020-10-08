import React, { Component } from 'react';
import { fetchUsersAction } from '../../redux/actions/add-user-action';
import { fetchTweetsAction } from '../../redux/actions/add-tweet-action';
import { connect } from 'react-redux';
import { postTweetThunkCreator } from '../../redux/actions/post-tweet-action';
import './styles.css';

const mapStateToProps = (store) => {
    return {
        users: store.user.users,
        tweets: store.tweet.tweets,
    }
}

// const {tweets} = this.props;
class AddTweet extends Component {

    state = {
        content: '',
        image: '',
        name: '',
        // id: tweets.length,
        // userId: tweets.length,
    }

    componentWillMount() {
        this.props.fetchUsersAction();
        this.props.fetchTweetsAction();
    }

    selectContent = (event) => {
        this.setState({
            content: event.currentTarget.value,
        })
    }
    
    selectImage = (event) => {
        this.setState({
            image: event.target.value,
        })
    }

    selectName = (event) => {
        this.setState({
            name: event.currentTarget.value,
        });
    }

    resetInputs = () => {
        this.setState({
            content: '',
            image: '',
        })
    }

    addNewTweet = () => {
        postTweetThunkCreator(this.state);
        this.resetInputs();
    }

    render() {
        const { users, tweets } = this.props;
        console.log('Needed one users: ', users, 'tweets: ', tweets);
        return(
            <div className="add-tweet-wrapper">
                <label className="new-tweet-items">Choose a user:</label>
                        <select className="new-tweet-items" onChange={this.selectName.bind(this)} value={this.state.user} name="user" id="users">
                            {users.map((user,index) => (
                                <option className="new-user-option"  key={index} >{user.name}</option>
                            ))}
                        </select>
                <div className="inputs-wrapper">
                    <input 
                        type="content"
                        placeholder="Type your messare here" 
                        className="new-tweet-items new-tweet-content"
                        value={this.state.content}
                        onChange={this.selectContent.bind(this)} />
                    <input
                        type="url"
                        placeholder="Paste your image here" 
                        className="new-tweet-items new-tweet-image"
                        value={this.state.image}
                        onChange={this.selectImage.bind(this)} />
                </div>
                <button
                    type="button"
                    className="submit-button"
                    onClick={() => {
                        this.addNewTweet()
                    }}
                >Add new tweet</button>
            </div>
        )
    }
}


export default connect(
    mapStateToProps,
    {fetchUsersAction: fetchUsersAction,
        fetchTweetsAction: fetchTweetsAction},
)(AddTweet);
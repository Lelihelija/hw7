import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTweetsAction } from '../../redux/actions/add-tweet-action';
import './styles.css';

class TweetsList extends Component {

    componentWillMount() {
        this.props.fetchTweetsAction();
    }

    render() {
        const { tweets } = this.props;
        console.log(tweets , 'swot tweets');

        return(
            <div className="tweets-list-wrapper">
                So, there will be tweets!
                {tweets.map((tweet, i) => 
                <div key={i} className="tweets-container">
                    <p>{tweet.content}</p>
                    <img className="tweets-image" src={tweet.image} alt="tweet"/>
                </div>)}
            </div>
        )
    }
}

const mapStateToProps = (store) => {
    console.log('tweets:',store, store.tweet.tweets);
    return {
        tweets: store.tweet.tweets
    }
}

export default connect(
    mapStateToProps,
    {fetchTweetsAction: fetchTweetsAction}
)(TweetsList);
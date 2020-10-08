import React, { Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';

class AddUser extends Component {

    state = {
        name: "",
        username: {
            value: '',
            isValid: false,
            validationRules: {
                regExp: /^([a-zA-Z0-9-])$/, //має почнатися з @
            }
        },
        avatar: "", //посилання
    }

    selectName = (event) => {
        this.setState({
          name: event.currentTarget.value,
        });
    };

    usernameValidation = username => this.state.username.validationRules.regExp.test(String(username));

    selectUsername = (event) => {
        this.setState({
            username: {
                ...this.state.username,
                value: event.target.value,
                // isValid: this.usernameValidation(event.target.value)
            }
        })
    };

    selectAvatar = (event) => {
        this.setState({
          avatar: event.currentTarget.value,
        });
    };

    resetInputs = () => {
        this.setState({
            name: "",
            username: {...this.state.username, value: "", isValid: false},
            avatar: "",
        })
    };

    addNewUser = () => {
        let newUserData = {
            name: this.state.name,
            username: `@${this.state.username.value}`,
            avatar: this.state.avatar,
        }
        console.log(newUserData, this.state);
        // postUserAction(newUserData);
        this.resetInputs();
    };

    render () {
        return(
            <div className="new-post-form-wrapper">
                <div className="inputs-wrapper">
                    <input 
                        type="name"
                        placeholder="Type your name here" 
                        className="new-post-items new-post-name"
                        value={this.state.name}
                        // isEmpty={!this.state.name.length}
                        onChange={this.selectName.bind(this)} />
                    <div className="username-wrapper">@ 
                        <input
                            type="username"
                            placeholder="Type your username here" 
                            className="new-post-items new-post-username"
                            value={this.state.username.value} 
                            // isEmpty={!this.state.username.value.length}
                            onChange={this.selectUsername.bind(this)} />
                    </div>
                    <input
                        type="url"
                        placeholder="Paste your avatar here" 
                        className="new-post-items new-post-avatar"
                        value={this.state.avatar}
                        // isEmpty={!this.state.avatar.value.length}
                        onChange={this.selectAvatar.bind(this)} />
                </div>
                <button
                    type="button"
                    className="submit-button"
                    onClick={() => {
                        // this.addNewUser.bind(this);
                        this.addNewUser()
                        
                        }}>Add new user</button>
            </div>
        )
    }
}


// const mapStateToProps = (store, ownProps) => {
//     console.log(store, store.user.users);
//     return {
//         users: store.user.users
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         fetchUsers: () => dispatch(fetchUsers())
//     }
// }

// export default connect(
//     mapStateToProps,
//     {fetchUsersAction: fetchUsersAction}
// )(UserContainer);

export default AddUser;

// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// // import addPostReducer from '../redux/add-post-reducer';
// import addPost from '../redux/add-post-action';
// import {passNewDataToPost, selectName} from '../redux/post-interactions-action';

// let users = [
//     {
//         isActive: 'false',
//         id: 5,
//         username: 'Хіната Іванович',
//     },
//     {
//         isActive: 'false',
//         id: 6,
//         username: 'Цукі Григорович',
//     },
//     {
//         isActive: 'false',
//         id: 7,
//         username: 'Даічі Мирославович',
//     },
//     {
//         isActive: 'false',
//         id: 8,
//         username: 'Ю Нішиноя Батькович',
//     },
// ];

// // let date = setDate();

// class NewPostForm extends Component {

//     state = {
//         name: "",
//         content: {
//             text: "",
//           },
//           image: {
//             src: "",
//           },
//         //   date: setDate(),
//       };
    
//     selectName = (event) => {
//         this.setState({
//           name: event.currentTarget.value,
//         });
//     };
    
//     selectImage = (event) => {
//         this.setState({ image: { ...this.state.image, src: event.currentTarget.value,} });
//     };

//     typedText = (event) => {
//         this.setState({ content: { ...this.state.content, text: event.currentTarget.value,} });
//     };

//     addNewPostFn = (e) => {
//         this.props.addPost(this.state);
//     }

//     render() {

//         return (
//             <div className="new-post-form-wrapper">
//                 <div className="inputs-wrapper">
//                     <div className="new-user-post">
//                         <label className="new-user-label">Choose a username:</label>
//                         <select className="new-user-option" onChange={this.selectName.bind(this)} value={this.state.name} name="user" id="users">
//                             {users.map((user,index) => (
//                                 <option className="new-user-option"  key={user.id} state={user.isActive} >{user.username}</option>
//                             ))}
//                         </select>
//                         <input className="new-post-items image-link" onChange={this.selectImage.bind(this)} value={this.state.image.src} type="url" name="url" placeholder="Paste a photo link here or choose one" list="defaultURLs"/>
//                         <datalist id="defaultURLs">
//                             <option value="https://s.yimg.com/aah/computergear/r2d2-dalek-loved-star-trek-t-shirt-26.gif"/>
//                             <option value="https://www.geekalerts.com/u/Doctor-Who-Star-Wars-Darthmen-T-Shirt.jpg"/>
//                             <option value="https://i.pinimg.com/originals/80/8b/ce/808bce96f0e3b7149bbae9a81c307e21.png"/>
//                         </datalist>
//                         <textarea className="textarea new-post-items" name="addText" id="" onChange={this.typedText.bind(this)} value={this.state.content.text} rows="5" placeholder="type your message here"></textarea>
//    {/* onChange={(e) => this.props.addPost(e.target.value)}  */}
//                     </div>
//                     <div className="new-post-btn-wrapper">
//                         <button type="button" className="new-post-btn new-post-items" onClick={this.addNewPostFn}>Add new post</button>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// const getStateToProps = (state) => {
//     return {
//         post: state.addPostReducer,
//         // data: state.getNewDataReducer,
//     }
// }

// const getDispatchToProps = (dispatch) => {
//     return {
//         addPost: e => dispatch(addPost(e)),
//         // passNewDataToPost: () => dispatch(passNewDataToPost())
//     }
// }

// export default connect(getStateToProps, getDispatchToProps)(NewPostForm);
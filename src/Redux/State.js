const ADD_POST = 'ADD-POST';
const ADD_USER = 'ADD-USER';

let store = {
  _data :{
    ReviewsData : [
      { id: 1, name: 'Andrey' },
      { id: 2, name: 'Kubat' },
      { id: 3, name: 'Nazira' },
      { id: 4, name: 'Ermek' },
      { id: 5, name: 'Artem' },
      { id: 6, name: 'Andrey' },
    ],
     MessageData: [
      { id: 1, mess: 'Hi!' },
      { id: 2, mess: 'How are you?' },
      { id: 3, mess: 'I am fine!' },
    ]
  },
  getData(){
    return this._data;
  },
  _rerenderEntireTree() {
    console.log('state changed');
  },
  // addPost(postMess) {
  //   let newPost ={
  //     id:4,
  //     mess: postMess
  //   };
  //   this._data.MessageData.push(newPost);
  //   this._rerenderEntireTree();
  // },
  // addUser(User){
  //   let newUser ={
  //     id:7,
  //     name: User
  //   };
  //   this._data.ReviewsData.push(newUser);
  //   this._rerenderEntireTree();
  // },
  suscriber(obsrever){
    this._rerenderEntireTree = obsrever;
  },
  dispatch(action){
    if(action.type === ADD_POST){
      let newPost ={
        id:4,
        mess: action.postMess
      };
      this._data.MessageData.push(newPost);
      this._rerenderEntireTree();
    }else if(action.type === ADD_USER){
      let newUser ={
        id:7,
        name: action.User
      };
      this._data.ReviewsData.push(newUser);
      this._rerenderEntireTree();
    }
  }
}

export const addPostActionCreator =(text) =>{
  return {
    type: ADD_POST, postMess: text
  }
}
export const addUserActionCreator =(text) =>{
  return {
    type: ADD_USER, User: text
  }
}

export default store;
window.store = store;

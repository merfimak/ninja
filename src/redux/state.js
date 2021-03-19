//константы делаем что бы не ошибистя в строках
const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';



let store = {
	_state: {
		profilePage:{
			postData: [
			  {id: 1, massage:"hellow, i love porn", likesCount: 12},
			  {id: 2, massage:"kolj ebanashka", likesCount: 3},
			],
			newPostText: "newPostText---perdole"
		},
		massagesPage:{
			massagesData: [
			{id: 1, massage:"hi"},
			{id: 2, massage:"hui"},
			{id: 3, massage:"hoi"},
			{id: 3, massage:"hei"},
			],
			dialogsData: [
				{id: 1, name:"Pasha"},
				{id: 2, name:"Dima"},
				{id: 3, name:"Vova"},
				{id: 4, name:"Sasha"}
			],
			NewMessageBody:'',
		},
	},	
	_collSubscriber() {//эта функция переделывается в rerenderEntireTree
	console.log('dfdf')
	},


	getState(){
		return this._state;
	},
	subscribe(observer) {
	this._collSubscriber = observer;
	},

	dispatch(action){
		if(action.type === "ADD_POST"){
			let newPost = {
				id: 3,
				massage: this._state.profilePage.newPostText,
				likesCount: 4
			};
			this._state.profilePage.postData.push(newPost);
			this._state.profilePage.newPostText = '';
			this._collSubscriber();
		} else if(action.type === "UPDATE_NEW_POST_TEXT"){
			this._state.profilePage.newPostText = action.newText;
			this._collSubscriber();
		}  else if(action.type === "UPDATE_NEW_MESSAGE_BODY"){
			this._state.massagesPage.NewMessageBody = action.body;
			this._collSubscriber();
		}  else if(action.type === "SEND_MESSAGE"){
			let body = this._state.massagesPage.NewMessageBody;
			this._state.massagesPage.massagesData.push({id: 6, massage:body});
			this._state.massagesPage.NewMessageBody = '';
			this._collSubscriber();
		}
	}

}


//action creator импортим его в MyPosts.js
export const addPostActionCreator = () =>{
  return{
    type: ADD_POST,
  }
}
//action creator импортим его в MyPosts.js
export const updateNewPostActionCreator = (text) =>{
  return{
    type: UPDATE_NEW_POST_TEXT,
    newText:text
  }
}

//action creator импортим его в Dialogs.js
export const sendMessageCreator = () =>{
  return{
    type: SEND_MESSAGE,
  }
}
//action creator импортим его в Dialogs.js
export const updateNewMessageCreator = (body) =>{
  return{
    type: UPDATE_NEW_MESSAGE_BODY,
    body:body
  }
}

window.store = store;
export default store;


/*let rerenderEntireTree = () => {
	console.log('dfdf')
}



let state = {
	profilePage:{
		postData: [
		  {id: 1, massage:"hellow, i love porn", likesCount: 12},
		  {id: 2, massage:"kolj ebanashka", likesCount: 3},
		],
		newPostText: "newPostText---perdole"
	},
	massagesPage:{
		massagesData: [
		{id: 1, massage:"hi"},
		{id: 2, massage:"hui"},
		{id: 3, massage:"hoi"},
		{id: 3, massage:"hei"},
		],
		dialogsData: [
			{id: 1, name:"Pasha"},
			{id: 2, name:"Dima"},
			{id: 3, name:"Vova"},
			{id: 4, name:"Sasha"}
		]
	},
}


export const addPost = () => {
	let newPost = {
		id: 3,
		massage: state.profilePage.newPostText,
		likesCount: 4
	};
	state.profilePage.postData.push(newPost);
	state.profilePage.newPostText = '';
	rerenderEntireTree();
}

export const updateVewPostText = (newText) => {
	
	state.profilePage.newPostText = newText;
	//console.log(newText)
	rerenderEntireTree();
}


export const subscribe = (observer) => {
	rerenderEntireTree = observer;
}*/


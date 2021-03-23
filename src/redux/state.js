import profileReducer from './prpofile_reducer.js'
import dialogReducer from './dialog_reduser.js'



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




		

this._state.profilePage = profileReducer(this._state.profilePage, action);	//Reducer возвращает нам state 	
this._state.massagesPage = dialogReducer(this._state.massagesPage, action);		
this._collSubscriber();



	}

}






window.store = store;
export default store;







/*const profileReducer = (state, action) => {

console.log(state.newPostText)
console.log(action)


if(action.type === "ADD_POST"){
			let newPost = {
				id: 3,
				massage: state.newPostText,
				likesCount: 4
			};
			state.postData.push(newPost);
			state.newPostText = '';
		} else if(action.type === "UPDATE_NEW_POST_TEXT"){
			state.newPostText = action.newText;
		}

	return state;
}*/







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


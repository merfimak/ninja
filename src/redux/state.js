
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
		]
	},
	},
	getState(){
		return this._state;
	},
	_collSubscriber() {
	console.log('dfdf')
	},
	addPost() {
	let newPost = {
		id: 3,
		massage: this.state.profilePage.newPostText,
		likesCount: 4
	};
	this.state.profilePage.postData.push(newPost);
	this.state.profilePage.newPostText = '';
	this.rerenderEntireTree();
	},
	updateVewPostText(newText) {
	this.state.profilePage.newPostText = newText;
	this.rerenderEntireTree();
	},
	subscribe(observer) {
	this._collSubscriber = observer;
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


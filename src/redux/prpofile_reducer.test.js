import profileReducer, {addPostActionCreator, deletePost} from './prpofile_reducer.js';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

test('length of posts should be incremented', () => {
  let action = addPostActionCreator("test")


let state = {
  postData: [
        {id: 1, massage:"hellow, i love porn", likesCount: 12},
        {id: 2, massage:"kolj ebanashka", likesCount: 3},
        {id: 3, massage:"kolj ebanashka", likesCount: 3},
        {id: 4, massage:"kolj ebanashka", likesCount: 3},
      
      ]

}
  let newState = profileReducer(state, action)
  expect(newState.postData.length).toBe(5);
  //expect(newState.postData[3].massage).toBe("test");
});







test('after delete length of posts should be decremented', () => {

  let action = deletePost(1)
let state = {
  postData: [
        {id: 1, massage:"111hellow, i love porn", likesCount: 12},
        {id: 2, massage:"222kolj ebanashka", likesCount: 3},
        {id: 3, massage:"333kolj ebanashka", likesCount: 3},
        {id: 4, massage:"444kolj ebanashka", likesCount: 3},
      ]

}

 let newState = profileReducer(state, action)
 
  expect(newState.postData.length).toBe(3);
  expect(newState.postData[2].massage).toBe('444kolj ebanashka');
});
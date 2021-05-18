import * as axios from 'axios';//в axios есть куча всего, * значит что все что есть в axios мы запиздячили в наш axios и теперь через него у нас есть доступ ко всему что там есть.
 



//делаем инстанс для axios с помощю его метода create.
const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		"API-KEY": "2583b1fb-2ae2-4907-b2bb-c13b3b0c66fa"
	}
})


export const usersAPI = {
	getUsers(currentPage = 1, pageSize = 10){
	return  instance.get(`users?page=${currentPage}&count=${pageSize}`)
	.then(response => {
		return response.data;
	});
},

	unFollow(id){
	console.log(id)
	return  instance.delete('follow/'+id)
	.then(response => {

		return response.data;
		});
	},

	follow(id){
	return  instance.post('follow/'+id)
	.then(response => {

		return response.data;
	});



}

}




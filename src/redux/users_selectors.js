export const getUsersSelector = (state) => {
	return state.usersPage.users
}

export const getPageSize = (state) => {
	return state.usersPage.pageSize
}

export const gettotalUsersCounter = (state) => {
	return state.usersPage.totalUsersCounter
}

export const getcurrentPage = (state) => {
	return state.usersPage.currentPage
}

export const getisFetching = (state) => {
	return state.usersPage.isFetching
}

export const getfollowingInProgress = (state) => {
	return state.usersPage.followingInProgress
}
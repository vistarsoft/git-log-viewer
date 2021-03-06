export default Object.freeze({
	START_GET_COMMITS: 100,
	END_GET_COMMITS: 101,

	TOGGLE_FILTER: 200,
	UPDATE_FILTER: 201,
	SET_ALL_USERS: 202,
	SET_USERS: 203,
	SET_MESSAGE: 204,
	SET_FROM_DATE: 205,
	SET_TO_DATE: 206,
	RESET_FILTER: 207,

	START_LOADING: 300,
	END_LOADING: 301,

	CHANGE_PAGE: 400,
	CHANGE_PAGE_SIZE: 401,
	UPDATE_PAGER: 402,
	
	UPDATE_REPOSITORY: 500,
	CHANGE_BRANCH: 501,

	CHANGE_TAB: 600,

	UPDATE_SELECTION: 700,

	CONTROL_START_ACTION: 800,
	CONTROL_STOP_ACTION: 801,

	FILES_UPDATE: 900,
	FILES_SET_PROGRESS: 901,

	TARGET_UPDATE: 1000,

	DIFF_TYPE_UPDATE: 1100,

	READY_UPDATE: 1200,

	OUTPUT_UPDATE: 1300,

	EXPORTING_START: 1400,
	EXPORTING_UPDATE: 1401,
	EXPORTING_ADD_LOG: 1402
})
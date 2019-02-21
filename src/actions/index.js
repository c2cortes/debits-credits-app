export const FETCH_MOVEMENTS = 'FETCH_MOVEMENTS';
export const STORE_MOVEMENT = 'STORE_MOVEMENT';

////////***  Movements Actions  ***/////////

export function fetchMovements(){

	let request = {  data: JSON.parse(localStorage.getItem('movements')) }

	if(request.data == null || request.data == undefined) {
		localStorage.setItem('movements', JSON.stringify({ data:[] }));
		request = {  data: JSON.parse(localStorage.getItem('movements')) }
	}

	return{
		type: FETCH_MOVEMENTS,
		payload: request.data ? request.data : []
	}
}

export function storeMovement(params){
	const request = JSON.parse(localStorage.getItem('movements'));
	request.data.unshift(params);
	localStorage.setItem('movements', JSON.stringify({ data: request.data }));

	return{
		type: STORE_MOVEMENT,
		payload: request.data
	}
}
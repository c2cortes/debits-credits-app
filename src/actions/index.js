export const FETCH_MOVEMENTS = 'FETCH_MOVEMENTS';
export const STORE_MOVEMENT = 'STORE_MOVEMENT';

////////***  Movements Actions  ***/////////

export function fetchMovements(){

	//localStorage.setItem('movements', JSON.stringify({ data:[{ concept: 'Client payment', amount: '2000', type: 'debit' }, { concept: 'Dinner', amount: '500', type: 'credit' }] }));

	const request = {  data: JSON.parse(localStorage.getItem('movements')) }

	console.log('request => ', request)

	return{
		type: FETCH_MOVEMENTS,
		payload: request.data
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
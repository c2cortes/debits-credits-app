export const FETCH_MOVEMENTS = 'FETCH_MOVEMENTS';
export const API_URL = 'http://localhost:3000/';

////////***  Debits Actions  ***/////////

export function fetchMovements(){

	localStorage.setItem('movements', JSON.stringify({ data:[{ concept: 'Client payment', amount: '2000', type: 'debit' }, { concept: 'Dinner', amount: '500', type: 'credit' }] }));

	const request = {  data: JSON.parse(localStorage.getItem('movements')) }

	console.log('request => ', request)

	return{
		type: FETCH_MOVEMENTS,
		payload: request.data
	}
}
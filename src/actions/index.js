export const FETCH_DEBITS = 'FETCH_DEBITS';
export const API_URL = 'http://localhost:3000/';

////////***  Debits Actions  ***/////////

export function fetchDebits(){
	const request = {  data: JSON.parse(localStorage.getItem('debits')) }
	return{
		type: FETCH_DEBITS,
		payload: request
	}
}
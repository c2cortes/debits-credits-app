import { FETCH_DEBITS, STORE_DEBIT } from '../actions/index';

export default function(state = null, action){
	switch (action.type) {
		case FETCH_DEBITS:
			return action.payload.data;
		case STORE_DEBIT:
			return action.payload.data;
	}
	return state;
}
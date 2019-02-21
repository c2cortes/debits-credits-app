import { FETCH_MOVEMENTS, STORE_MOVEMENTS } from '../actions/index';

export default function(state = null, action){
	switch (action.type) {
		case FETCH_MOVEMENTS:
			return action.payload.data;
		case STORE_MOVEMENTS:
			return action.payload.data;
	}
	return state;
}
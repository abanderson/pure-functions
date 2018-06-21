let initialState = {
	counters: []
};

// This reducer isn't pure! It updates the nested "counters" array of the original 
//     state object
const reducer = (state = initialState, action) => {
	let { type, counterIndex } = action;

	let stateCopy = {
		counters: [...state.counters]
	};

	if (type == "INCREMENT") {

		stateCopy.counters[counterIndex]++;

		return stateCopy;

	} else if (type == "ADD_COUNTER") {

		stateCopy.counters.push(0);

		return stateCopy;

	} else {

		return stateCopy;

	}
}


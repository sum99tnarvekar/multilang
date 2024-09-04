const langReducer = (state="english", action) => {
    switch(action.type) {
        case "marathi":
        case "korean":
        case "english":
            return action.payload;
        default:
            return state;
    }
}

export default langReducer ;
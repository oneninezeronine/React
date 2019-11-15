import {
    createStore
} from 'redux';

const counter = (state = {
    name: 'yao',
    skill: ['ps', 'js']
}, action) => {
    switch (action.type) {
        // 修改的动作
        case "SETNAME":
            return {
                ...state,
                name: 'lin'
            }
            default:
                return state;
    }
}

const store = createStore(counter);

export default store;
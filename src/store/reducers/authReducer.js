import { SIGN } from "../actions/authActions"

const initialValues = {
    userId: null,
}

export default authReducer = (state = initialValues, action) => {
    switch (action.type) {
        case SIGN:
            return {
                userId: action.userId
            };
    }
    return state
}
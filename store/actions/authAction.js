export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';

export const signup = (email, password) => {
    return async dispatch => {
        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAX4SUGFN5egImlgPZUKPyiQoSfhYlHpvk',
            {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            }
        )

        if (!response.ok) {
            const res = await response.json()
            throw new Error(res.error.message)
        }

        const responseData = await response.json();
        console.log(responseData)
        dispatch({ type: SIGNUP, userId: responseData.userId, token: token })
    }

}

export const login = (email, password) => {
    return async dispatch => {
        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAX4SUGFN5egImlgPZUKPyiQoSfhYlHpvk',
            {
                method: 'POST',
                header: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    returnSecureToken: true
                })
            }
        )

        if (!response.ok) {
            const res = await response.json()
            throw new Error(res.error.message)
        }

        const responseData = await response.json();
        console.log(responseData)
        dispatch({ type: LOGIN })
    }

}
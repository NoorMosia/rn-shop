export const LOGIN = 'LOGIN';
export const SIGNUP = 'SIGNUP';

export const signup = (email, password) => {

    return async dispatch => {
        const response = await fetch(
            'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyAX4SUGFN5egImlgPZUKPyiQoSfhYlHpvk',
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
            throw new Error('Something went wrong')
        }

        const responseData = await response.json();
        console.log(responseData);
    }

}
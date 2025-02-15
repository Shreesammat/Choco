const useFetch = () => {
    const signIn = async (url, data) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if(!response.ok) {
            throw new Error('Failed to sign in');
        }
        console.log(response);
        return response.json();
    };
    const signUp = async (url, data) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if(!response.ok) {
            throw new Error('Failed to sign up');
        }
        console.log(response);
        return response.json();
    }
    return { signIn, signUp };
}

export default useFetch;
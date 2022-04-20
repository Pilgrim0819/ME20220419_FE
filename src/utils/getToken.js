import Cookies from 'universal-cookie';

const getToken = () => {
    const cookies = new Cookies();

    return cookies.get('auth-token')
}

export default getToken;
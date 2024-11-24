import {useContext, createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type AuthContextProps = {
    user: UserProps | null;
    handleLogin: Function;
};

type UserProps = {
    id: string,
    nome: string,
    email: string,
    senha: string,

}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider = ({children}: any) => {
    const [user, setUser] = useState<UserProps | null>(null);

    useEffect(() => {
        loadingUser()
    },[])

    const loadingUser = async () => {
        const response = await AsyncStorage.getItem(
            '@loginApp:user'
        );
        if(response) {
            const data = JSON.parse(response);
            setUser(data)
        }
    }

    const handleLogin = ({id, nome, email, senha}: any) => {
        console.log(nome, email, senha);
        setUser({
            id,
            nome,
            email,
            senha,
        })
        AsyncStorage.setItem('@loginApp:user', JSON.stringify({nome, email, senha}));
    };

    return(
        <AuthContext.Provider value={{handleLogin, user}}>{children}</AuthContext.Provider>

    )
}
export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
}

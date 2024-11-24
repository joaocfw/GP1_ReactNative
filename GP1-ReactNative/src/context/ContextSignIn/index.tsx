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

export const AuthProvider = ({ children }: any) => {
    const [user, setUser] = useState<UserProps | null>(null);

    useEffect(() => {
        loadingUser();
    }, []);

    const loadingUser = async () => {
        try {
            const response = await AsyncStorage.getItem('@loginApp:user');
            if (response) {
                const data = JSON.parse(response);
                setUser(data);
            }
        } catch (error) {
            console.error("Erro ao carregar usuário:", error);
        }
    };

    const handleLogin = async ({ id, nome, email, senha }: UserProps) => {
        const userData = { id, nome, email, senha };
        setUser(userData);

        try {
            await AsyncStorage.setItem('@loginApp:user', JSON.stringify(userData));
        } catch (error) {
            console.error("Erro ao salvar usuário:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ handleLogin, user }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => {
    const context = useContext(AuthContext);
    return context;
};

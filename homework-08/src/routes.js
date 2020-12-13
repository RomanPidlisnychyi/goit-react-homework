import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';

export default [
    {
        path: '/',
        exact: true,
        label: 'Home',
        private: true,
        restricted: false,
        component: HomeView,
    },
    {
        path: '/login',
        restricted: true,
        exact: true,
        label: 'Login',
        private: false,
        component: LoginView,
    },
    {
        path: '/register',
        exact: true,
        restricted: true,
        label: 'Register',
        private: false,
        component: RegisterView,
    },
];

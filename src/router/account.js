import Account from '../views/Account';
export default [{
    path: '/account/login',
    meta: {
        ignoreAuth: true
    },
    component: Account.Login
}, {
    path: '/account/locked',
    component: Account.Locked
}];
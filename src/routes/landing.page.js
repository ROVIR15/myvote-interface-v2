import Home from '../views/home.main'
import HowTo from '../views/how-to.main'
import AboutUs from '../views/about-us.main'
import Success from '../views/successReg'

import Login from '../views/login'
import Register from '../views/register'

export const landingPageRoutes = [{
    path: '/home',
    component: Home,
    label: 'HOME'
}, {
    path: '/how-to',
    component: HowTo,
    label: 'BAGAIMANA CARANYA'
},{
    path: '/about-us',
    component: AboutUs,
    label : 'ABOUT US'
}, {
    path: '/login',
    component: Login,
    label  : 'LOGIN',
}, {
    path: '/register',
    component: Register,
    label : 'REGISTER'
}, {
    path: "/success-register",
    component: Success
},
{
    redirect: 'true',
    from: '/',
    to: '/home'
}]
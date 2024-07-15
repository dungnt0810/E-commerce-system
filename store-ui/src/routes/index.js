import Home from "~/pages/home";
import Login from "~/pages/login";

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    // { path: '/search', component: Search, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };

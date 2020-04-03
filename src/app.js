import './sass/app';
import { renderHomePage } from './js/view/home';
import { renderContactPage } from './js/view/contact';
import { renderResumePage } from './js/view/resume';

//components
const HomePage = {
    render: () => {
        renderHomePage();
    }
}

const ExplorePage = {
    render: () => {
        //TODO: Insert html
    }
}

const ResumePage = {
    render: () => {
        renderResumePage();
    }
}

const ContactPage = {
    render: () => {
        renderContactPage();
    }
}

const ErrorPage = {
    render: () => {
        //TODO: Insert
    }
}

const routes = [
    {path: '/', component: HomePage},
    {path: '/explore', component: ExplorePage},
    {path: '/resume', component: ResumePage},
    {path: '/contact', component: ContactPage}
];

const router = () => {
    //get current path
    const path = window.location.hash.slice(1).toLocaleLowerCase() || '/';
    //get component mapping
    const { component = ErrorPage } =  getPage(path, routes) || {};
    //embed component in html
    component.render();
}

const getPage = (path, routes) => {
    return routes.find(
        route => route.path.match(new RegExp(`^\\${path}$`, 'gm'))
    ) || undefined;
}

const showPage = () => {
    document.getElementsByTagName('body')[0].classList.add('all-loaded');
}

window.addEventListener('load', router);
window.addEventListener('load', showPage);
window.addEventListener('hashchange', router);
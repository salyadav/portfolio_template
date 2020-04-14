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
    document.getElementsByTagName('body')[0].classList.add('all-loaded');
    //get current path
    const path = window.location.hash.slice(1).toLocaleLowerCase() || '/';
    //get component mapping
    const { component = ErrorPage } =  getPage(path, routes) || {};
    //embed component in html
    component.render();
    document.querySelector('body').classList.add('page-loaded');
}

const getPage = (path, routes) => {
    return routes.find(
        route => route.path.match(new RegExp(`^\\${path}$`, 'gm'))
    ) || undefined;
}

const windowScroll = () => {
    //To fade-in navigation bar black opacity
    let offsetConst = 200;
    if (window.location.hash === '') {
        offsetConst = 40; //height of my navigation bar
    }
    if (window.pageYOffset > 0) {
        const opacity = window.pageYOffset/offsetConst;
        document.getElementById('navigation-header').style.backgroundColor='rgba(0, 0, 0, '+ opacity +')';
    }
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
window.addEventListener('scroll', windowScroll);
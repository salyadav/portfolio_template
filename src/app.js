import './sass/app';
import { renderHomePage } from './js/view/home';
import { renderContactPage } from './js/view/contact';

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
        //TODO: Insert html
    }
}

const ContactPage = {
    render: () => {
        renderContactPage();
    }
}

const ErrorPage = {
    render: () => {
        return `
            <div>Error page</div>
        `;
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

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
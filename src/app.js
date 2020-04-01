import './sass/home';
import './home.html';
//components
const HomePage = {
    render: () => {
        return `
            <div>Home Page</div>
        `;
    }
}

const ExplorePage = {
    render: () => {
        return `
            <div>Explore Page</div>
        `;
    }
}

const ResumePage = {
    render: () => {
        return `
            <div>Resume Page</div>
        `;
    }
}

const ContactPage = {
    render: () => {
        return `
            <div>Contact Page</div>
        `;
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
    // document.getElementById('page').innerHTML = component.render();
    $(document).ready(function(){
        $('#page').load("home.html");
    });

}

const getPage = (path, routes) => {
    return routes.find(
        route => route.path.match(new RegExp(`^\\${path}$`, 'gm'))
    ) || undefined;
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
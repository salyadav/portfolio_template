import '../../sass/home';

export function renderHomePage() {
    let homeHeader = document.createElement('div');
    homeHeader.setAttribute('id', 'home-header');
    homeHeader.classList.add('home-header');
    homeHeader.innerHTML = _constructHomeHeader();
    document.getElementById('home').appendChild(homeHeader);

    document.getElementById('page').innerHTML = _constructHomePage();
}

function _constructHomePage() {
    return `
        <div>OK Tested check</div>
    `;
}

function _constructHomeHeader() {
    return `
            <p class='home-header-elevator'>Travel Monger Techie, Illustrator, and lunatic for Great Designs</p>
            <p class='home-header-name'>SALONI YADAV</p><br>
            <button type='button'>LEARN MORE</button>
    `;
}
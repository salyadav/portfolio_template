import '../../sass/home';

export function renderHomePage() {
    _toggleBold();
    
    let homeHeader = document.createElement('div');
    homeHeader.setAttribute('id', 'home-header');
    homeHeader.classList.add('home-header');
    homeHeader.innerHTML = _constructHomeHeader();
    document.getElementById('home').appendChild(homeHeader);

    document.getElementById('page').innerHTML = _constructHomePage();
}

function _toggleBold() {
    document.getElementsByClassName('do-bold')[0].classList.remove('do-bold');
    document.getElementById('nav-home').classList.add('do-bold');
}

function _constructHomeHeader() {
    return `
            <p class='home-header-elevator'>Travel Monger Techie, Illustrator, and lunatic for Great Designs</p>
            <p class='home-header-name'>SALONI YADAV</p><br>
            <button type='button'>LEARN MORE</button>
    `;
}

function _constructHomePage() {
    return `
        <div class='home-page'>
            <div>
                <p class='home-page-whoami'>Who am I?</p>
                <p class='home-page-whoamians'>
                    Full-time Bored Whatever Engineer. Full-stack Corporate Murgi by profession. Creative Murgi by heart.
                    A travel monger, UX Design enthusiast, scrupulous organizer, and a perpetual learner. 
                    Skilled in Java, HTML/SASS, JS and JS frameworks... Yada Yada Yada! Seriously, who cares?
                </p><br>
                <p class='home-page-whoamians'><i>
                    Do checkout my blog 
                    <a href='https://www.figfrags.com' target='_blank'>FigFrags</a> 
                    for some creative content and illustrations.
                    If you liked the content, feel free to get in touch with my writer 
                    <a href='https://www.linkedin.com/in/ashwinipetchiappan/' target='_blank'>Ashwini</a>.                   
                </i></p>
            </div>
        </div>
    `;
}
import '../../sass/resume';
import icon from '../../assets/profile_picture.jpg';

export function renderResumePage() {
    _toggleBold();

    if(document.getElementById('home-header')) {
        document.getElementById('home-header').style.display = 'none';
    }
    document.getElementById('page').innerHTML = _constructResumePage();

    //I am importing the image in js explicitly and setting it in html 
    //Because only when I import, webpack will be able to resolve the dependency and bundle this img in dist
    //Use CopyWebpackPlugin to be able to directly set the src in the html
    document.getElementById('resume-aboutme-pic').src = icon;
}

function _toggleBold() {
    document.getElementsByClassName('do-bold')[0].classList.remove('do-bold');
    document.getElementById('nav-resume').classList.add('do-bold');
}

function _constructResumePage() {
    return `
        <div class='resume-aboutme'>
            <div class='resume-aboutme-pic'>
                <img id='resume-aboutme-pic' alt='Saloni profile picture'/>
            </div>
            <div class='resume-aboutme-summary'>
                <p class='resume-aboutme-summary-head'>ABOUT ME</p>
                <p class='resume-aboutme-summary-text'>
                    Do I really need to proselytize myself? Well, if you insist...
                    I’m creative all the time, hard-working if need be.
                    I work because paycheck demands it. I travel coz soul demands it.
                    But regardless, I am awesome at what I do. Be it working. Be it chilling.
                </p>
            </div>
        </div>
        <ul class='resume-profiles'>
            <a>
                <li class='resume-profiles-email' title='Send an email'></li>
            </a>
            <a href='https://www.linkedin.com/in/saloni-yadav/' target='_blank'>
                <li class='resume-profiles-linkedin' title='View linkedin profile'></li>
            </a>
            <a href='https://github.com/salyadav' target='_blank'>
                <li class='resume-profiles-github' title='View github profile'></li>
            </a>
            <a href='https://stackoverflow.com/users/12325211/saloni-yadav' target='_blank'>
                <li class='resume-profiles-stackoverflow' title='View stackoverflow profile'></li>
            </a>
            <a href='https://www.instagram.com/nayan_yadayada/' target='_blank'>
                <li class='resume-profiles-insta' title='Checkout instagram illustrations'></li>
            </a>
        </ul>
        ${_getWorkEx()}
    `;
}

function _getWorkEx() {
    return `
        <div class='resume-workex'>
        </div>
    `;
}
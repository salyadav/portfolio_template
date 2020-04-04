import '../../sass/resume';
import icon from '../../assets/profile_picture.jpg';

export function renderResumePage() {
    _toggleBold();

    if(document.getElementById('home-header')) {
        document.getElementById('home-header').style.display = 'none';
    }
    document.getElementById('page').innerHTML = _constructResumePage();

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
        ${_getWorkEx()}
    `;
}

function _getWorkEx() {
    return `
        <div class='resume-workex'>
        </div>
    `;
}
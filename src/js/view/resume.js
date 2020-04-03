export function renderResumePage() {
    _toggleBold();

    if(document.getElementById('home-header')) {
        document.getElementById('home-header').style.display = 'none';
    }
    document.getElementById('page').innerHTML = _constructResumePage();
}

function _toggleBold() {
    document.getElementsByClassName('do-bold')[0].classList.remove('do-bold');
    document.getElementById('nav-resume').classList.add('do-bold');
}

function _constructResumePage() {
    return `
        <div>resume</div>
    `;
}
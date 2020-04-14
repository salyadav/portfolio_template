import '../../sass/resume';
import icon from '../../assets/profile_picture.jpg';
import '../../assets/Oracle.jpg';

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
    document.querySelector('.resume-workex').addEventListener('DOMContentLoaded', _csrExCarousal());
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
        ${_getTechStack()}
        ${_getWorkEx()}
        ${_getCsrEx()}
    `;
}

function _getTechStack() {
    return `
        <div class='resume-techsheet'>
            <div class='resume-techsheet-head'>Technical Sheet</div>
            <div class='resume-techsheet-item'>
                <table>
                    <tr>
                        <td class='resume-techsheet-item-head'>Languages</td>
                        <td>Java, JavaScript, TypeScript, HTML, CSS</td>
                    </tr>
                    <tr>
                        <td>Frameworks</td>
                        <td>SpringMVC, ExtJS, Knockout.js, JET, SASS</td>
                        
                    </tr>
                    <tr>
                        <td>Build tools</td>
                        <td>Webpack, NPM, Apache Maven</td>
                    </tr>
                    <tr>
                        <td>Database</td>
                        <td>MySQL, Oracle SQL Developer</td>
                    </tr>
                    <tr>
                        <td>Editors</td>
                        <td>VS Code, Eclipse, Sublime, IntelliJ</td>
                    </tr>
                    <tr>
                        <td>Versioning</td>
                        <td>Git, TortoiseSVN</td>
                    </tr>
                </table>
            </div>
        </div>
    `;
}

function _getWorkEx() {
    return `
        <div class='resume-workex'>
            <div class='resume-workex-head'>Experience</div>
            <div class='resume-workex-item'>
                <img src='../../assets/Oracle.jpg' class='resume-workex-item-img' alt='oracle logo'/>
                <div class='resume-workex-item-about'>
                    <div class='resume-workex-item-about-head'>
                        APPLICATION ENGINEER
                    </div>
                    <div class='resume-workex-item-about-content'>
                        <strong>Duration:</strong> 3 Years (2017-20)<br>
                        <p><strong>Tech stack:</strong> <br>
                        Frontend (ExtJS, OJET, TypeScript, HTML, JavaScript)<br>
                        Backend (Java, Spring MVC, MySQL)</p>
                        <p><strong>Other Contributions:</strong> <br>
                        Hack-a-thon Winner, UX Enhancement.<br>
                        Collaborative Event Organizer.<br>
                        Oracle Corporate Social Responsibility Volunteer.</p>                     
                    </div>
                </div>
            </div>
            <div class='resume-workex-item'>
                <img src='../../assets/NitTrichy.png' class='resume-workex-item-img' alt='nitt campus'/>
                <div class='resume-workex-item-about'>
                    <div class='resume-workex-item-about-head'>
                        NIT TRICHY
                    </div>
                    <div class='resume-workex-item-about-content'>
                        <strong>Degree:</strong> B.Tech in Electronics and Communication Engineering (2013-17)<br>
                        <p><strong>GPA:</strong> 9.06 (First Class with Distinction)</p>
                        <p><strong>Bachelor's Thesis: </strong>ECG signal compression using Discrete Anamorphic Stretch Transform.</p>
                        <p><strong>Other Responsibilities: </strong><br>
                        Spider RnD Club Workshop's Head.<br>
                        Campus Placement Committee, Digital Lead.
                    </div>
                </div>
            </div>
        </div>
    `;
}

function _getCsrEx() {
    return `
        <div class='resume-csr'>
            <div class='resume-csr-head'>~ To the Community ~</div>
            <div class='resume-csr-item'>
                <div class="resume-csr-item-pg">
                    AUTISM FEST 2019, KORAMANGALA, BANGALORE
                </div>
                <img src='../../assets/Oracle_CSR1.jpg'/>
            </div>
            <div class='resume-csr-item'>
                <div class="resume-csr-item-pg">
                    SLUMS AMIDST AN AFFLUENT CITY, JP NAGAR, BAGALORE
                </div>
                <img src='../../assets/Oracle_CSR3.JPG'/>
            </div>
            <div class='resume-csr-item'>
                <div class="resume-csr-item-pg">
                    A BOOK - A DAY, KRM ORACLE OFFICE, BANGALORE
                </div>
                <img src='../../assets/Oracle_CSR4.JPG'/>
            </div>
            <div id='resume-csr-item-5' class='resume-csr-item'>
                <div class="resume-csr-item-pg">
                    A BOOK - A DAY, ORACLE EMPLOYEES' KIDS OFFICE TOUR 
                </div>
                <img src='../../assets/Oracle_CSR5.jpg'/>
            </div>
            <div class='resume-csr-item'>
                <div class="resume-csr-item-pg">
                    COTTOLENGO SCHOOL FOR SPECIAL CHILDREN, WHITEFIELD
                </div>
                <img src='../../assets/Oracle_CSR6.jpg'/>
            </div>
            <div class='resume-csr-item'>
                <div class="resume-csr-item-pg">
                    COTTOLENGO SCHOOL FOR SPECIAL PEOPLE OF ALL AGE, WHITEFIELD
                </div>
                <img src='../../assets/Oracle_CSR7.jpg'/>
            </div>
        </div>
    `;
}

function _csrExCarousal() {
    const items = document.getElementsByClassName('resume-csr-item');
    const len = items.length;
    items[0].style.display = 'flex';
    let i=0;
    setInterval(() => {
        items[i%len].style.display = 'none';
        items[++i%len].style.display = 'flex';
        if (i>len)
            i=0;
    }, 2000);
}
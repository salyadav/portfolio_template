import '../../sass/contact';

export function renderContactPage() {
    _toggleBold();

    if(document.getElementById('home-header')) {
        document.getElementById('home-header').style.display = 'none';
    }
    document.getElementById('page').innerHTML = _constructContactPage();
}

function _toggleBold() {
    document.getElementsByClassName('do-bold')[0].classList.remove('do-bold');
    document.getElementById('nav-contact').classList.add('do-bold');
}

function _constructContactPage() {
    return `
        <div class='contact'>
            <h1 class='contact-title'>Contact Me!</h1>
            
            <div>
                <p>
                    Questions, suggestions, feedback, criticism, concerns? Feel free to reach out to me!
                </p>
                <ul>
                    <li class='contact-details'>
                        <span class='icon-linkedin'></span>
                        <span><a href='https://www.linkedin.com/in/saloni-yadav/' target='_blank' title='Open profile in new tab'>View Profile</a><span>
                    </li>
                    <li class='contact-details'>
                        <span class='icon-email'></span>
                        <span>yadavsaloni2018@gmail.com</span>
                    </li>
                <ul>
            </div>

            <div class='contact-form'>
                <h4 class='contact-form-title'>
                    OR JUST COMPLETE THE FORM BELOW AND I’LL REACH OUT TO YOU RIGHT AWAY!
                </h4>
                ${_getContactForm()}
            </div>
        </div>
    `;
}

function _getContactForm() {
    return `
        <div>
            <form id='contact-form' target='_self'>
                <label for='name'>Name *</label><br>
                <input id='name' type='text' placeholder='What do I call you?' required></input>
                <br>

                <label for='email'>Email *</label><br>
                <input id='email' type='email' placeholder='How do I reach you?' required></input>
                <br>

                <label for='subject'>Subject</label><br>
                <input id='subject' type='text' placeholder='What are we talking about...'></input>
                <br>

                <label for='message'>Message</label><br>
                <textarea name="message" placeholder='I am all ears...'></textarea><br>
                <br>

                <input id='submit' type='submit'></input>
            </form>
        </div>
    `;
}
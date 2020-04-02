import '../../sass/contact';

export function renderContactPage() {
    if(document.getElementById('home-header')) {
        document.getElementById('home-header').style.display = 'none';
    }
    document.getElementById('page').innerHTML = _constructContactPage();
}

function _constructContactPage() {
    return `
        <div class='contact'>
            <h1 class='contact-title'>Contact Me!</h1>
            
            <div class='contact-details'>
                <p>
                    Questions, suggestions, feedback, criticism, concerns? Feel free to reach out to me!
                </p>
                <p>Email:</p>
                <p>
                    <span>yadavsaloni2018@gmail.com</span>
                </p>
                <p>Linkedin:</p>
                <p>
                    <span><a href='https://www.linkedin.com/in/saloni-yadav/' target='_blank'>Saloni Yadav</a><span>
                </p>
            </div>

            <div class='contact-form'>
                <p class='contact-form-title'>
                    OR JUST COMPLETE THE FORM BELOW AND I’LL REACH OUT TO YOU RIGHT AWAY!
                </p>
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
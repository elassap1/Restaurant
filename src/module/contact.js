import create  from './functions.js'
const content = 
`
<h2>Visit Us On</h2>
<address> Street yaekob almansor, 10
<h5>Tangier 90060,</h5>
<h5>Morroco.</h5>
</address>
<div><h2>Contact Us</h2>
<h3>+212633279333</h3></div>
<div>

<p><input type='text' placeholder='Full Name'></input></p>

<p><input type='text' placeholder='Email'></input></p>

<h2>Message</h2>
<textarea colon="7" row="5"></textarea>
</div><div>
<button>Submit</button></div>
`;

function contact(){
    create('div', 1, "", "",'id', "contact", "#content");
    create('div', 1, content, "info",'', "", "#contact");
}

export default contact;

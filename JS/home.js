

const formDiv = document.getElementById('contact');
const main = document.createElement('main');
main.classList.add('container-fluid', 'mt-5', 'mb-5');
formDiv.append(main);
const form = document.createElement('form');
form.classList.add('bg-light', 'border', 'rounded', 'mx-auto', 'p-3');
main.append(form);

// Start form 
const h3 = document.createElement('h3');
h3.classList.add('text-uppercase', 'mb-3');
h3.textContent = 'Get In Touch!';
h3.style.textAlign = 'center';
form.append(h3);
const nameDiv = document.createElement('div');
nameDiv.classList.add('form-group', 'row', 'mb-3');
form.append(nameDiv);
const nameLabel = document.createElement('label');
nameLabel.classList.add('col-4', 'col-form-label');
nameLabel.textContent = 'Name:';
nameLabel.htmlFor = 'username';
const username = document.createElement('input');
username.classList.add('border', 'border-grey', 'rounded', 'col-md-8', 'col-sm-11', 'mx-sm-2', 'mx-md-0', 'col-xs-15', 'mx-xs-2');
username.name = 'name';
username.id = 'username';
nameDiv.appendChild(nameLabel);
nameDiv.appendChild(username);

const emailDiv = document.createElement('div');
emailDiv.classList.add('form-group', 'row', 'mb-3');
form.append(emailDiv);
const emailLabel = document.createElement('label');
emailLabel.classList.add('col-4', 'col-form-label');
emailLabel.textContent = 'Email:';
emailLabel.htmlFor = 'email';
const email = document.createElement('input');
email.classList.add('border', 'border-grey', 'rounded', 'col-md-8', 'col-sm-11', 'mx-sm-2', 'mx-md-0', 'col-xs-15', 'mx-xs-2');
email.id = 'email';
email.type = 'email';
emailDiv.appendChild(emailLabel);
emailDiv.appendChild(email);

const msgDiv = document.createElement('div');
msgDiv.classList.add('form-group', 'row', 'mb-3');
form.append(msgDiv);
const msgLabel = document.createElement('label');
msgLabel.classList.add('col-4', 'col-form-label');
msgLabel.textContent = 'Message:';
msgLabel.htmlFor = 'message';
const msg = document.createElement('textarea');
msg.classList.add('border', 'border-grey', 'rounded', 'col-md-8', 'col-sm-11', 'mx-sm-2', 'mx-md-0', 'col-xs-15', 'mx-xs-2');
msg.type = 'text';
msg.rows = '7';
msg.name = 'message';
msg.id = 'message';
msg.placeholder = 'Leave me a message!';
msgDiv.appendChild(msgLabel);
msgDiv.appendChild(msg);

const buttonDiv = document.createElement('div');
buttonDiv.classList.add('form-group', 'row');
form.append(buttonDiv);
const submit = document.createElement('input');
submit.id = 'submit';
submit.type = 'submit';
submit.value = 'Send';
submit.classList.add('btn', 'btn-primary', 'col-4', 'me-1', 'mx-auto');
const reset = document.createElement('input');
reset.id = 'reset';
reset.type = 'reset';
reset.value = 'Reset';
reset.classList.add('btn', 'btn-secondary', 'col-4', 'me-1', 'mx-auto');
buttonDiv.appendChild(submit);
buttonDiv.appendChild(reset);
// End form
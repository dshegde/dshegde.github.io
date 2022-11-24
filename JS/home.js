

const formDiv = document.getElementById('contact');
const main = document.createElement('main');
main.classList.add('container-fluid', 'mt-4', 'mb-5');
formDiv.append(main);
const form = document.createElement('form');
form.classList.add('bg-secondary', 'border', 'rounded', 'mx-auto', 'p-3', 'border', 'border-warning');
main.append(form);

// Start form 
const h3 = document.createElement('h3');
h3.classList.add('text-uppercase', 'mb-3', 'text-light');
h3.textContent = 'Get In Touch!';
h3.style.textAlign = 'center';
form.append(h3);
const nameDiv = document.createElement('div');
nameDiv.classList.add('form-group', 'row', 'mb-3');
form.append(nameDiv);
const nameLabel = document.createElement('label');
nameLabel.classList.add('col-4', 'col-form-label', 'text-light');
nameLabel.textContent = 'Name:';
nameLabel.style.fontSize = '20px';
nameLabel.style.fontWeight = 'bold';
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
emailLabel.classList.add('col-4', 'col-form-label', 'text-light');
emailLabel.textContent = 'Email:';
emailLabel.style.fontSize = '20px';
emailLabel.style.fontWeight = 'bold';
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
msgLabel.classList.add('col-4', 'col-form-label', 'text-light');
msgLabel.textContent = 'Message:';
msgLabel.style.fontSize = '20px';
msgLabel.style.fontWeight = 'bold';
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
submit.classList.add('btn', 'btn-warning', 'col-5', 'mx-auto');
const reset = document.createElement('input');
reset.id = 'reset';
reset.type = 'reset';
reset.value = 'Reset';
reset.classList.add('btn', 'btn-warning', 'col-5', 'mx-auto');
buttonDiv.appendChild(submit);
buttonDiv.appendChild(reset);
// End form

submit.onclick = function () {
    window.location = "mailto:hegdedeepa79@pdx.edu";
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


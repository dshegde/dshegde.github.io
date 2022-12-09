
// function sendEmail() {
//   Email.send({
//           Host : "smtp.gmail.com",
//           Username : "deepa.hegde79@gmail.com",
//           Password : "Hombelaku",
//           To : 'hegdedeepa79@gmail.com',
//           From : document.getElementById('email').value,
//           Subject : "PORTFOLIO MESSAGE!!!",
//           Body : document.getElementById('message').value
//       }).then(
//         message => alert("Sent")
//       );
// }

let collap = document.getElementsByClassName("collapsible");

for (let i = 0; i < collap.length; i++) {
  collap[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


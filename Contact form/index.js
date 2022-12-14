function sendmail(){
    var param = {
        name:document.getElementById('name').value,
        email:document.getElementById('mail').value,
        phnumber: document.getElementById('number').value,
        message: document.getElementById('txtarea').value,

    };

const serviceid ="service_luzv8ei";
const templateid= "template_ovhtxl5";

emailjs
.send(serviceid,templateid,param)
.then((
    res)=>{
        document.getElementById('name').value ="",
        document.getElementById('mail').value= "",
        document.getElementById('number').value = "",
        document.getElementById('txtarea').value ="",
        alert("your message is sent succesfully");

    })

.catch((err)=> console.log(err));
}
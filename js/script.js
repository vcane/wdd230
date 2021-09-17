//code below is from 9/15/21 WDD230 Virtual Lab
const copyrightyr = document.getElementById('copyrightyr');
copyrightyr.textContent = new Date().getFullYear();

// found assistance with below code from https://tecadmin.net/get-current-date-time-javascript/
const lastupdate = new Date();
document.getElementById('lastupdate').textContent = `${lastupdate.getMonth()+1}/${lastupdate.getDate()}/${lastupdate.getFullYear()} 
${lastupdate.getHours()}:${lastupdate.getMinutes()}:${lastupdate.getSeconds()}`;
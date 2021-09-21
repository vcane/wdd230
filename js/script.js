///code below is from 9/15/21 WDD230 Virtual Lab
c/onst copyrightyr = document.getElementById('copyrightyr');
copyrightyr.textContent = new Date().getFullYear();

//code below is from my first try at the course portal home page
// found assistance with below code from https://tecadmin.net/get-current-date-time-javascript/
//const lastupdate = new Date();
//document.getElementById('lastupdate').textContent = `${lastupdate.getMonth()+1}/${lastupdate.getDate()}/${lastupdate.getFullYear()} 
//${lastupdate.getHours()}:${lastupdate.getMinutes()}:${lastupdate.getSeconds()}`;

// revised code after Bro Blazzard's review on 9/20/21
const lastupdate = document.lastModified;
document.getElementById('lastupdate').textContent = lastupdate;
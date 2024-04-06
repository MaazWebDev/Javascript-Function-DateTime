let currentDate = new Date();

let date = currentDate.getDate();

let month = currentDate.getMonth() + 1;

let year = currentDate.getFullYear();

let time24 = currentDate.getHours();

let minutes = currentDate.getMinutes();

let seconds = currentDate.getSeconds();

time12 = time24 % 12 || 12 ;

let timePeriod ;

if (time24 < 12) {
    timePeriod = "AM";
}
else{
    timePeriod = "PM";
}

alert("Assalam u Alikum !\nHere you can see the current Date & Time\nClick Ok!")

document.write("<h2>Current Date and Time :" +  currentDate , "</h2>" );
document.write("<li>Current Hour :" + "<span>", time12 + " " + timePeriod , "<span>", "</li>" );
document.write("<li>Current Minute :" + "<span>", minutes ,"</span>", "</li>" );
document.write("<li>Current Second :" + "<span>", seconds ,"<span>", "</li>" );
document.write("<li>Current Date :" + "<span>", date , "<span>", "</li>" );
document.write("<li>Current Month :" + "<span>", month , "<span>", "</li>" );
document.write("<li>Current Year :" + "<span>", year , "<span>", "</li>" );

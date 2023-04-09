window.onload;{
function edit(realname, gender, username, bio, dob, age){
    document.getElementById("fname").innerHTML=realname;
    document.getElementById("gender").innerHTML=gender;
    document.getElementById("username").innerHTML=username;
    document.getElementById("desc").innerHTML=bio;
    document.getElementById("year").innerHTML=dob;
    document.getElementById("age").innerHTML=age;
}
function editPhoto(url){
    document.getElementById("ppic").src="imgs/"+url;
}
function main(){
    var realname, username, gender, bio, pic, directory;
    realname = prompt("Please enter your full name: ");
    username = prompt("Please enter your desired username");
    gender = confirm("Please select your gender\n\n- Press OK if you are male\n- Press Cancel if you are Female");
    if(gender){
        alert("Your gender is set to MALE");
        gender = "M";
    }else{
        alert("Your gender is set to FEMALE");
        gender = "F";
    }
    bio = prompt("Please type a brief description of yourself");
    dob = parseInt(prompt("Please enter your Birth Year", "XXXX"));
    pic = confirm("Do you want to use a custom profile picture?")
    if(pic){
        if(gender=="M"){
            directory = prompt("Please pick directory of file:\nm1.jpg or m2.png or mhehe.jpg");
        }else{
            directory = prompt("Please pick directory of file:\nf1.jpg or f2.jpg or fhehe.jpg");
        }
        editPhoto(directory);
    }else{
        alert("No image has been set.");
    }
    edit(realname, gender, username, bio, dob, 2023-dob);
}
}
main();
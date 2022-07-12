// get the vars
var iam_btn = document.getElementById("who_btn");3
var about_btn = document.getElementById("about_btn");
var callme_btn = document.getElementById("contact_btn");
// all divs
var block_iam = document.getElementById("wIam");
var block_skill = document.getElementById("skills");
var block_contact = document.getElementById("contact");



// auto open 'who am i' page 
iam_btn.classList.add("selected");

if(iam_btn.classList.contains('selected')){
    block_iam.style.display ='block';
    block_skill.style.display = "none";
    block_contact.style.display = "none";

}
// main btn control
iam_btn.onclick=function(){
    block_iam.style.display ='block';
    block_skill.style.display = "none";
    block_contact.style.display = "none";

    iam_btn.classList.add("selected");
    about_btn.classList.remove("selected");
    callme_btn.classList.remove("selected");
}
about_btn.onclick=function(){
    block_iam.style.display ='none';
    block_skill.style.display = "block";
    block_contact.style.display = "none";

    about_btn.classList.add("selected");
    iam_btn.classList.remove("selected");
    callme_btn.classList.remove("selected");
}
callme_btn.onclick=function(){
    block_iam.style.display ='none';
    block_skill.style.display = "none";
    block_contact.style.display = "block";

    callme_btn.classList.add("selected");
    iam_btn.classList.remove("selected");
    about_btn.classList.remove("selected");
}
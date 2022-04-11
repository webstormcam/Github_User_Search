let user ='octocat'
let url = `https://api.github.com/users/octocat`;
let user_icon = document.getElementById('user_icon');
let user_name = document.getElementById('username');
let user_AT_name = document.getElementById('user_AT_name');
let join = document.getElementById('birth');
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let user_story = document.getElementById('userstory');
let user_button = document.getElementById('user_button');
let repos = document.getElementById('repos');
let followers = document.getElementById('followers');
let following = document.getElementById('following');
let locationgps = document.getElementById('location');
let location_logo = document.getElementById('location_logo');
let site = document.getElementById('link');
let bird = document.getElementById('twitter');
let bird_logo = document.getElementById('bird_logo');
let work = document.getElementById('company');
let site_logo = document.getElementById('link_logo');
let company_logo = document.getElementById('company_logo');
let results_neg = document.getElementById('nope');
let mode_switch = document.getElementById('screen_mode');
let mode_word = document.getElementById('mode_word')
let mode_img = document.getElementById('mode_img')
let body = document.getElementById('holder');
let logo= document.getElementById('logo');
let user_info = document.getElementById('user_information')


function runSearch(){
fetch(url)
.then(res => res.json())
.then((out) => {
    if(out.message ==='Not Found'){
        console.log('stopped')
         results_neg.style.display ='block';
    } else{

results_neg.style.display ='none';
user_icon.src= out.avatar_url;
user_name.innerHTML = out.name;
user_AT_name.innerHTML = `@${out.login}`;
let dateObj = new Date(out.created_at);
let month = dateObj.getUTCMonth(); 
let day = dateObj.getUTCDate();
let year = dateObj.getUTCFullYear();
let month_name = months[month]
let newDate = ` Joined ${day} ${month_name} ${year}`;
join.innerHTML = newDate
repos.innerHTML = out.public_repos;
followers.innerHTML = out.followers;
following.innerHTML = out.following;

if(out.location === null){
    locationgps.innerHTML = 'Not available';
    location_logo.src = 'imgs/icon-location-GREY.svg';
    locationgps.style.color='#808080';

} else{
    locationgps.innerHTML = out.location;
    location_logo.src ='imgs/icon-location.svg';
    locationgps.style.color ='#4B6A9B';
}




if(out.blog === ""){
    site.innerHTML ='Not available';
    site_logo.src = 'imgs/icon-website-GREY.svg'
    link.style.color ='#808080'

}else{
    site.innerHTML = `<a class ='links' href=${out.blog}>${out.blog}</a>`;
    site_logo.src = 'imgs/icon-website.svg';
    link.style.color ='#4B6A9B'
}

if(out.company===null){
    work.innerHTML ='Not available';
    work.style.color ='#808080';
    company_logo.src = 'imgs/icon-company-GREY.svg'

} else{
    work.innerHTML =out.company;
    company_logo.src = 'imgs/icon-company.svg'
    work.style.color ='#4B6A9B';
}


if(out.bio === null){
user_story.innerHTML ='This profile has no bio'
user_story.style.color='#808080'
} else{
    user_story.innerHTML = out.bio;
    user_story.style.color='#4B6A9B'
}
if(out.twitter_username === null){
    bird.innerHTML ='Not available';
    bird.style.color='#808080'
    bird_logo.src ='imgs/icon-twitter - Grey.svg'
    } else{
        bird.innerHTML = `<a class='links' href='https://twitter.com/${out.twitter_username}'>@${out.twitter_username}</a>`;
        bird_logo.src ='imgs/icon-twitter.svg'
      
        bird.style.color='#4B6A9B'
    }
    }
console.log(out)
})
.catch(err => { throw err });
}


user_button.addEventListener('click',function(){
    let user_search = document.getElementById('user_search').value;

    url = `https://api.github.com/users/${user_search}`
    console.log(user_search)
    runSearch();

});


runSearch();




mode_switch.addEventListener('click',function(){
if(mode_word.innerHTML ==='DARK'){
    mode_word.innerHTML ='LIGHT'
    mode_word.style.color ='#fff'
    mode_img.src = 'imgs/icon-sun.svg'
    logo.style.color ='#fff'
    body.style.backgroundColor='#141D2F'
    user_info.style.backgroundColor='#1E2A47'
} else if(mode_word.innerHTML==='LIGHT'){
    mode_word.innerHTML='DARK'
    mode_img.src = 'imgs/icon-moon.svg'
    mode_word.style.color ='#4B6A9B'
    logo.style.color='black'
    user_info.style.backgroundColor='#fff'
    body.style.backgroundColor='#fff'
}
});


mode_switch.addEventListener('mouseover',function(){
    if(mode_word.innerHTML==='DARK'){
        mode_img.src ='imgs/icon-moon - Copy.svg'
        mode_word.style.color = "#222731"
    } else if(mode_word.innerHTML==='LIGHT'){
        mode_img.src ='imgs/icon-sun - Copy.svg'
        mode_word.style.color ="#90A4D4"
    }
})


mode_switch.addEventListener('mouseout',function(){
    if(mode_word.innerHTML==='DARK'){
        mode_img.src ='imgs/icon-moon.svg'
        mode_word.style.color ='#4B6A9B'
    } else if(mode_word.innerHTML==='LIGHT'){
        mode_img.src ='imgs/icon-sun.svg'
        mode_word.style.color ="#fff"
    }
})

















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
let locationgps = document.getElementById('location')
let site = document.getElementById('link');
let bird = document.getElementById('twitter');
let bird_logo = document.getElementById('bird_logo');
let work = document.getElementById('company')


function runSearch(){
fetch(url)
.then(res => res.json())
.then((out) => {
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
locationgps.innerHTML = out.location;
site.innerHTML = `<a class ='links' href=${out.blog}>${out.blog}</a>`;
work.innerHTML =out.company;
if(out.bio === null){
user_story.innerHTML ='This profile has no bio'
} else{
    user_story.innerHTML = out.bio;
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
console.log(out)
})
.catch(err => { throw err });
}

user_button.addEventListener('click',function(){
    let user_search = document.getElementById('user_search').value;
    url = `https://api.github.com/users/${user_search}`
    console.log(user_search)
    runSearch();

})


runSearch();














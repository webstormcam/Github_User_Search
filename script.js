let user ='octocat'
let url = `https://api.github.com/users/octocat`;
let user_icon = document.getElementById('user_icon');
let user_name = document.getElementById('username');
let user_AT_name = document.getElementById('user@name');



fetch(url)
.then(res => res.json())
.then((out) => {
user_icon.src= out.avatar_url;
user_name.innerHTML = out.name;
user_AT_name.innerHTML += out.login;
console.log(out)
})
.catch(err => { throw err });












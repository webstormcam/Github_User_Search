let user ='octocat'
let url = `https://api.github.com/users/octocat`;
let user_icon = document.getElementById('user_icon');



fetch(url)
.then(res => res.json())
.then((out) => {
user_icon.src= out.avatar_url
console.log(out)
})
.catch(err => { throw err });












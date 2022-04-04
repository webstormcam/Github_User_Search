let user ='octocat'
let url = `https://api.github.com/users/${user}`;




fetch(url)
.then(res => res.json())
.then((out) => {
console.log(out)
})
.catch(err => { throw err });












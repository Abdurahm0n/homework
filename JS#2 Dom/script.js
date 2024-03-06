let body = document.querySelector("body")
let h1 = document.createElement("h1")
let h2 = document.createElement("h2")
let h3 = document.createElement("h3")
let h4 = document.createElement("h4")
let h5 = document.createElement("h5")

h1.innerHTML = "Abdurahmon"
h1.style.cssText = `
color:red;
`

h2.innerHTML = "15"
h2.style.cssText = `
color:blue;
`
h3.innerHTML = "Yunusobod"
h3.style.cssText = `
color:green;
`
h4.innerHTML = "MARS"
h4.style.cssText = `
color:orange;
`
h5.innerHTML = "Frontend"
h5.style.cssText = `
color:grey;
`


body.prepend(h1, h2, h3, h4, h5)


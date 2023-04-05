// header user control animate (gifs)
const searchIcon = document.getElementById('searchIcon')
const searchIconCon = document.getElementById('searchIconCon')

const publishIcon = document.getElementById('publishIcon')
const publishIconCon = document.getElementById('publishIconCon')

searchIconCon.addEventListener('mouseover', ()=>{
        searchIcon.setAttribute('src', 'images/searchIcon.gif')
})
searchIconCon.addEventListener('mouseout', ()=>{
    searchIcon.setAttribute('src', 'images/searchIcon.png')
})

publishIconCon.addEventListener('mouseover', ()=>{
    publishIcon.setAttribute('src', 'images/publishIcon.gif')
})
publishIconCon.addEventListener('mouseout', ()=>{
    publishIcon.setAttribute('src', 'images/publishIcon.png')
})



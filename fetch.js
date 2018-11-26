document.addEventListener('DOMContentLoaded', function () {
  console.log('dom is active')
  fetch('https://galvanize-cors.herokuapp.com/http://xkcd.com/222/info.0.json')
    .then(function (data) {
      console.log(data)
      return data.json()
    })
    .then(function (dataResponse) {
      var xkcdTitle = document.querySelector('h1')
      console.log(dataResponse)
      xkcdTitle.innerText = dataResponse.title
      var xkcdSafeTitle = document.querySelector('.safeTitle')
      console.log(dataResponse)
      xkcdSafeTitle.innerText = dataResponse.safe_title
      var xkcdNum = document.querySelector('.comicNum')
      xkcdNum.innerText = dataResponse.num
      var xkcdText = document.querySelector('.alt')
      xkcdText.innerText = dataResponse.alt
      var xkcdImage = document.querySelector('img')
      xkcdImage.src = dataResponse.img
    })

})


// document.addEventListener('DOMContentLoaded', function () {
//   console.log('dom is active')
//   fetch('https://galvanize-cors.herokuapp.com/http://xkcd.com/614/info.0.json')
//     .then(function (response) {
//       console.log(response)
//       return response.json()
//     })
//     .then(function (jsonResponse) {
//       var xkcdTitle = document.querySelector('h1')
//       console.log(jsonResponse)
//       xkcdTitle.innerText = jsonResponse.title
//       var xkcdImage = document.querySelector('img')
//       xkcdImage.src = jsonResponse.img
//     })
// })
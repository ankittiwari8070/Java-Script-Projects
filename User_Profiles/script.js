// var arr = [
//     {
//         user:'Ankit',
//         age:21,
//         city:'Bhopal'
//     },
//     {
//         user:'Aman',
//         age:18,
//         city:'Mirzapur'

//     },
//     {
//         user:'vivek',
//         age:20,
//         city:'Mumbai'
//     },{
//         user:'pranshu',
//         age:19,
//         city:'Bhopal'
//     }
// ]

// var sum =0
// arr.forEach(function(elem){
//     sum = sum + elem.age

// })
// console.log(sum/arr.length)



const users = [
  {
    fullName: "Aarav Sharma",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    profession: "Software Engineer",
    description: "Aarav is a full-stack developer specializing in scalable web applications and cloud technologies.",
    tags: ["JavaScript", "Node.js", "Cloud", "Full Stack"]
  },
  {
    fullName: "Priya Mehta",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    profession: "Graphic Designer",
    description: "Priya is a creative designer passionate about branding, UI/UX, and digital illustration.",
    tags: ["Design", "Illustration", "UI/UX", "Branding"]
  },
  {
    fullName: "Rohan Verma",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    profession: "Fitness Trainer",
    description: "Rohan is a certified fitness trainer focused on strength training and personalized workout plans.",
    tags: ["Fitness", "Health", "Strength", "Trainer"]
  },
  {
    fullName: "Sneha Kapoor",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    profession: "Data Analyst",
    description: "Sneha works with data visualization, predictive modeling, and business intelligence.",
    tags: ["Data", "Python", "Analytics", "Machine Learning"]
  },
  {
    fullName: "Vikram Singh",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    profession: "Entrepreneur",
    description: "Vikram is a business consultant and startup mentor helping new founders scale their businesses.",
    tags: ["Business", "Startup", "Mentor", "Leadership"]
  }
];

var sum = ''
users.forEach(function(elem){

    sum = sum + ` <div class="card">
        <img src="${elem.image}" alt="">
        <h3>${elem.fullName} </h3>
        <h4>${elem.profession}</h4>
        <p>${elem.description}</p>
    </div>`

})


var main =  document.querySelector('main')

main.innerHTML = sum
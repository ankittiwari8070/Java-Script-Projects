 var reels =[
  {
    // "isMuted": "true",
    "username": "travel_with_aarav",
    "likeCount": 12500,
    "isLiked": false,
    "commentCount": 320,
    "caption": "Sunset vibes at Goa 🌅✨",
    "video": "./reels/video2.mp4",
    "userProfile": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "shareCount": 540,
    "isFollowed": true
  },
  {
    // "isMuted": "true",
    "username": "tech_guru_priya",
    "likeCount": 8300,
    "isLiked": true,
    "commentCount": 210,
    "caption": "Top 5 AI tools you should try today 🤖🔥",
    "video": "./reels/video1.mp4",
    "userProfile": "https://images.unsplash.com/photo-1500622944204-b135684e99fd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D",
    "shareCount": 300,
    "isFollowed": false
  },
  {
    // "isMuted": "true",
    "username": "fitness_by_rahul",
    "likeCount": 15900,
    "isLiked": false,
    "commentCount": 410,
    "caption": "No excuses. Monday workout done ✔️💪",
    "video": "./reels/reel6.mp4",
    "userProfile": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    "shareCount": 690,
    "isFollowed": true
  },
  {
    // "isMuted": "true",
    "username": "foodie_nikita",
    "likeCount": 9400,
    "isLiked": true,
    "commentCount": 180,
    "caption": "Street food in Delhi never disappoints 😍🍢",
    "video": "./reels/reel4.mp4",
    "userProfile": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    "shareCount": 410,
    "isFollowed": false
  },
  {
    // "isMuted": "true",
    "username": "coding_with_sam",
    "likeCount": 6700,
    "isLiked": false,
    "commentCount": 95,
    "caption": "JavaScript tip for beginners: Always use const! ⚡",
    "video": "./reels/reel5.mp4",
    "userProfile": "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
    "shareCount": 260,
    "isFollowed": true
  },
  {
    // "isMuted": "true",
    "username": "lifestyle_mansi",
    "likeCount": 11200,
    "isLiked": false,
    "commentCount": 250,
    "caption": "Morning routine for a productive day ✨☕",
    "video": "./reels/reel6.mp4",
    "userProfile": "https://images.unsplash.com/photo-1517841905240-472988babdf9",
    "shareCount": 480,
    "isFollowed": false
  },
  {
    // "isMuted": "true",
    "username": "art_by_kabir",
    "likeCount": 5400,
    "isLiked": true,
    "commentCount": 130,
    "caption": "Sketching Virat Kohli 🖊️🔥",
    "video": "./reels/reel2.mp4",
    "userProfile": "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
    "shareCount": 190,
    "isFollowed": true
  },
  {
    // "isMuted": "true",
    "username": "music_journey_riya",
    "likeCount": 7600,
    "isLiked": false,
    "commentCount": 240,
    "caption": "My new cover of Kesariya 🎤✨",
    "video": "./reels/reel4.mp4",
    "userProfile": "https://images.unsplash.com/photo-1500048993959-dcb6c6ad211f",
    "shareCount": 350,
    "isFollowed": false
  },
  {
    // "isMuted": "true",
    "username": "gaming_legend_aryan",
    "likeCount": 18200,
    "isLiked": false,
    "commentCount": 550,
    "caption": "New BGMI clutch moment! 🔥😈",
    "video": "./reels/reel1.mp4",
    "userProfile": "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    "shareCount": 780,
    "isFollowed": true
  },
  {
    // "isMuted": "true",
    "username": "motivation_by_sana",
    "likeCount": 9800,
    "isLiked": true,
    "commentCount": 300,
    "caption": "Believe in yourself. Everything is possible. ✨",
    "video": "./reels/reel5.mp4",
    "userProfile": "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7",
    "shareCount": 420,
    "isFollowed": false
  }
]

var allReels =  document.querySelector('.all-reels')


function addData(){
  var sum = ''
reels.forEach(function(elem , idx){
  
    sum = sum + `<div class="reel">
                     <video  autoplay loop ${elem.isMuted?'muted':''} src="${elem.video}"></video>
                     <div id="${idx}" class="mute" >
                     ${elem.isMuted?'<i class="ri-volume-mute-fill"></i>':' <i class="ri-volume-up-line"></i>'}
            
        </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="${elem.userProfile}" alt="">
                            <h4>${elem.username}</h4>
                            <button id=${idx} class="follow" >${elem.isFollowed?'Unfollow':'Follow'}</button>
                        </div>
                        <h3>${elem.caption}</h3>
                    </div>
                    <div  class="right">
                        <div id=${idx} class="like">
                            <h4 class="like-icon">${elem.isLiked?'<i class=" love ri-heart-3-fill"></i>':'<i  class= "ri-heart-3-line"></i>'}</h4>
                             <h6>${elem.likeCount}</h6>
                        </div>
                        <div class="comment">
                            <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
                             <h6>${elem.commentCount}</h6>
                        </div>
                        <div class="share">
                            <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4>
                             <h6>${elem.shareCount}</h6>
                        </div>
                        <div class="menu">
                            <h4 class="menu-icon"><i class="ri-more-2-line"></i></h4>   
                    </div>
</div>
</div>`
})

allReels.innerHTML = sum
}

addData()

allReels.addEventListener('click',function(dets){
  if(dets.target.className == 'like') {
    if(!reels[dets.target.id].isLiked){
      reels[dets.target.id].likeCount++
      reels[dets.target.id].isLiked = true
    }else{
       reels[dets.target.id].likeCount--
      reels[dets.target.id].isLiked = false

    }
     addData()
   
  }
   

   if(dets.target.className == 'follow') {
    if(!reels[dets.target.id].isFollowed ){
      reels[dets.target.id].isFollowed = true
    }else{
      reels[dets.target.id].isFollowed = false
    }
     addData()
  }


  if(dets.target.className == 'mute') {
    if(!reels[dets.target.id].isMuted ){
      reels[dets.target.id].isMuted = true
    }else{
      reels[dets.target.id].isMuted = false
    }
     addData()
  }

  


 
})


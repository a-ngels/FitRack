const apiKey = "AIzaSyBy3AMg-ANgc_BAF97vQF0sRiZUfR1AB0Q";
const button = document.getElementById("getWorkout");
const allVideos = document.querySelectorAll(".workoutVideos");
const nutritionSearch = "Nutrition to Build Muscle";
const videoLength = "medium";
let workoutSearch = "Best Push Workout";
let videoAmount = 1;



function searchForVideos (apiKey, search, videoAmount, idname) {
   let lastMonth = new Date ();
   lastMonth.setMonth(lastMonth.getMonth() - 1);
   let formattedDate = lastMonth.toISOString().split('.')[0] + 'Z';

   let url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&type=video&part=snippet&maxResults=${videoAmount}&q=${search}&publishedAfter=${formattedDate}&videoDuration=${videoLength}`;

   fetch(url)
   .then((results) => {
      return results.json();
   }) .then ((data) => {
      let videosList = data.items;
      for (video of videosList) {
         let videoLink = `https://www.youtube.com/embed/${video.id.videoId}`;
         idname.src = videoLink;
      }
   }) .catch((error) => {
      console.error("Something went wrong! Please try again");
   })
}




button.addEventListener("click", function (e) {
   
   searchForVideos (apiKey,workoutSearch,videoAmount, allVideos[0]); 
   searchForVideos (apiKey,nutritionSearch,videoAmount, allVideos[1]); 

});
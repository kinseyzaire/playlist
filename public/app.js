var randomCovers = $("#randAlbums")

$(document).ready(function(){
   var threeCovers = $.ajax( {
      url:"https://lit-fortress-6467.herokuapp.com/object",
      method:"GET",
      dataType: "json",
      success: function(data) {
      randomCovers.html('<img src="images/'+ data.results[Math.floor(Math.random() * 4)]["cover_art"] +'" width="240px" height="240px alt="album cover"><br><img src="images/'+ data.results[Math.floor(Math.random() * 4)]["cover_art"] +'" width="240px" height="240px alt="album cover"><br><img src="images/'+ data.results[Math.floor(Math.random() * 4)]["cover_art"] +'" width="240px" height="240px alt="album cover"><br>')
      }
   });
});


// var ccchoose = $("#chooseEm")
//
// ccchoose.click(function() {

// var lookie = $.ajax( {
//     url: "https://lit-fortress-6467.herokuapp.com/object",
//     method: "GET",
//     dataType: "json",
//     });
//     lookie.done(function(payload)){
//     console.log(payload);
//      };

// var lookiePOST = $.ajax( {
//     url: "https://lit-fortress-6467.herokuapp.com/post",
//     method: "POST",
//     data: {obj being sent}}
//     });
//     lookie.done(function(payload)){
//     console.log(payload);
//      };

var cards = [
  {
    title: "Abacus",
    description: "Class Management for Teachers",
    technologies: "MySQL - Handlebars.js - Passport.js",
    links: ["https://github.com/erasersleeve/Abacus","https://guarded-cliffs-90664.herokuapp.com"]
  },
  {
    title: "Read || Watch",
    description: "Multi-Media Search Engine",
    technologies: "jQuery - OMDB API - Google Books API",
    links: ["https://github.com/erasersleeve/Multimedia-Search-Engine","https://erasersleeve.github.io/Multimedia-Search-Engine"]
  },
  {
    title: "Google Books Search",
    description: "Search, view and curate from Google Books",
    technologies: "React.js - MongoDB - Google Books API",
    links: ["https://github.com/erasersleeve/Google-Books-Search","https://radiant-shore-36280.herokuapp.com"]
  },
  {
    title: "Employee Directory",
    description: "Track and sort employees",
    technologies: "React",
    links: ["https://github.com/erasersleeve/Employee-Directory","https://ancient-chamber-45912.herokuapp.com"]
  },
  {
    title: "Budget Tracker",
    description: "Tracks your budget with or without internet",
    technologies: "Progressive Web App - MongoDB",
    links: ["https://github.com/erasersleeve/Progressive-Budget-Tracker","http://safe-spire-11167.herokuapp.com"]
  },
  {
    title: "Weather Forecast Dashboard",
    description: "A simple weather dashboard to see current and weather forecast ",
    technologies: "jQuery, Bootstrap 4, Open Weather Map API",
    links: ["https://erasersleeve.github.io/Weather-Dashboard/","https://erasersleeve.github.io/Weather-Dashboard"]
  },
  {
    title: "Work Out Tracker",
    description: "Create workouts and track progress",
    technologies: "jQuery - Express.js - MongoDB",
    links: ["https://github.com/erasersleeve/Workout-Tracker","https://stark-reaches-68321.herokuapp.com"]
  },
]

$(window).resize(function(){
    if ($(window).width() >= 1052) {
        $("nav").css("display","flex")
        $(".nav-layer").css("display", "none");
        $("#navbar-toggler i").attr("class", "fas fa-bars")
      } else if ($(window).width() < 1052) {
        $("nav").css("display","none")
      }
  });

$("#navbar-toggler").on("click", "i", function () {
  if ($(this).attr("class") == "fas fa-bars") {
    $(this).attr("class", "fas fa-times");
    $(".nav-layer").css("display", "flex");
  } else if ($(this).attr("class") == "fas fa-times") {
    $(this).attr("class", "fas fa-bars");
    $(".nav-layer").css("display", "none");
  }
});

$(".nav-layer").on("click", function(){
  $(".nav-layer").css("display", "none");
  $("#navbar-toggler i").attr("class", "fas fa-bars")
})

function cardGenerator(cards){
  for(var i = 0; i < cards.length ; i++){
    var cardObj = cards[i]
    $("#project-cards").append(`
      <div class="card">
        <h4><a href=${cardObj.links[1]}>${cardObj.title}</a></h4>
        <p>${cardObj.description}</p>
        <h5>${cardObj.technologies}</h5>
        <div class="links">
          <a href=${cardObj.links[0]}><i class="fab fa-github"></i></a> 
          <a href=${cardObj.links[1]}><i class="fas fa-external-link-alt"></i></a>
        </div>
      </div>
  `)
  }
}

$(window).scroll(function(){ 
  $("#about").fadeIn(3000)
  $("#work").fadeIn(4000)
  $("#contact").fadeIn(5000)
});

cardGenerator(cards)

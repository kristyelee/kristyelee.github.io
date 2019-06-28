$(document).ready(function() {
    $("#lightbox").hide();
    var slideIndex = 0;
    showSlides();
    $("#name").hide();
    $("#quote").hide();
    $("#name").fadeIn(3000);
    $("#quote").delay(2000).fadeIn(4000);
    
    function showSlides() {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1} 
      slides[slideIndex-1].style.display = "block"; 
      setTimeout(showSlides, 10000); // Change image every 10 seconds
    }  

    
    $(".next").click(function() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1} 
        slides[slideIndex-1].style.display = "block"; 
    })
    $(".prev").click(function() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        slideIndex--;
        if (slideIndex < 1) {slideIndex = 4} 
        slides[slideIndex-1].style.display = "block"; 
        
    })
    
    $(".project").click(function() {
        let proj_name = $(this).attr("id");
        $("#specific-project-container").append("<div class='picture'><img src='assets/img/"+proj_name+".png'/></div>");
        if(proj_name == "byow"){
            $("#specific-project-container").append("<div class='proj-desc'><p>World Generator: BYOW (by Andrew K., Kristy L.)</p></div><div class='proj-desc'><p>Upon entering a seed number at the main menu of the game, a unique 2-D world with randomized walls and rooms is generated, and with keypresses, the user can navigate an avatar around the world. The game is fully deterministic: the same seed results in the same unique 2-D world where the same sequence of keypresses results in same actions in the world. In addition, Pok&#233;mon are randomly dispersed throughout the world according to the inputted seed, each represented as '!' in the world. We designed a Pok&#233;mon encounter system where upon landing on a ! spot, a Pok&#233;mon encounter between the user (a Piplup) and a randomly determined Pok&#233;mon will begin. The game can also resume saved games.</p></div>");
        }else if (proj_name == "bearmaps"){
            $("#specific-project-container").append("<div class='proj-desc'><p>BearMaps</p></div><div class='proj-desc'><p>BearMaps is a routing and mapping application for the city of Berkeley. Like Google Maps, BearMaps allows zooming into and out of the map, has autocomplete enabled in the search bar, and provides street directions from starting point to destination. A KD tree and trie are among the data structures used in the project, used in providing street directions and enabling autocomplete in search, respectively.</p></div>");
        } else {
            $("#specific-project-container").append("<div class='proj-desc'><p>Maps</p></div><div class='proj-desc'><p>I created a visualization of predicted restaurant ratings using machine learning algorithms and data processing(simple linear least squares regression). The visualization, known as a Voronoi diagram, partitions a map of the UC Berkeley campus into regions shaded according to predicted rating. In this project, I also use the k-means algorithm in the iterative grouping of restaurants into clusters.</p></div>");
        }
        $("#lightbox").css("display", "auto");
        $("#lightbox").show();
    })

    
    $("#overlay, #close").click(function() {
        $( ".proj-desc" ).remove();
        $( ".picture" ).remove();
		$("#lightbox").hide();
    })
  
    
});
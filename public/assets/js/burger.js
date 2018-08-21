// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var devo = true;


    var newdevo = {
      devoured: devo

    };

    // Send the PUT request.
    $.ajax("/api/burger/" + id, {
      type: "PUT",
      data: newdevo
    }).then(
      function() {
        console.log("changed devore to", devo);
        // Reload the page to get the updated list
       
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    if($("#ca").val().trim() === ""){
      alert("please enter a burger name to add");
    }
    else{
      var newBur = {
        name: $("#ca").val().trim(),
      };
  
      // Send the POST request.
      $.ajax("/api/burger", {
        type: "POST",
        data: newBur
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
   
    }

  });
    
});

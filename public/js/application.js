
$(document).ready(function() {

  $('#get_color').on('click', function(event) {
    event.preventDefault();

    var url = $(this).attr('href');
    $.post(url, function(response){
      console.log(response);
      $('li:nth-child('+ response.cell +')').css('background', response.color);
    });

  });
});


//find button and bind on click
//preventDefault of browser normal action without js
//post to /color,
//get response back 
//find correct cell and change background color of cell with json object;

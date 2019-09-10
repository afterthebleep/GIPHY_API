$(function() {
    addButtons(searchArr, 'searchButton', '#btn-container');
    console.log("Hooray!");

});

var searchArr = [ 'Ram', 'Crab', 'Wolf', 'Dragon'];

function addButtons(searchArr, classToAdd, areaToAddTo) {
  $(areaToAddTo).empty();
  for (var i = 0; i < searchArr.length; i++) {
    var btn = $('<button>');
    btn.addClass(classToAdd);
    btn.attr('data-type', searchArr[i]);
    btn.text(searchArr[i]);
    $(areaToAddTo).append(btn); 
  }
}

$(document).on('click', '.searchButton', function () {
  var type = $(this).data('type');
  var queryURL = 'https://api.giphy.com/v1/gifs/search?q=' + type + '&api_key=wV6sQPcK7mV9puokHVI4XYKZq7w7Dc24&limit=10';
  $.ajax({ url: queryURL, method: 'GET' })
      .then(function (res) {
          for(var i = 0; i < res.data.length; i++) {
              var searchDiv = $('<div class="search-item">');
              var rating = res.data[i].rating;
              var p = $('<p>').text('Rating: '+rating);
              var start = res.data[i].images.fixed_height.url;
              var stop = res.data[i].images.fixed_height_still.url;
              var img = $('<img>');
              img.attr('src', stop);
              img.attr('data-stop', stop);
              img.attr('data-start', start);
              img.attr('data-state', 'stop');
              img.addClass('searchImage');
              searchDiv.append(p);
              searchDiv.append(img);
              $('#searches').append(searchDiv);
            }
  });
});





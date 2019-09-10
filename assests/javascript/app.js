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





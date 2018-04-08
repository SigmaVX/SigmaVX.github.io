
$(".bitBucket").on("click", function(event){
    event.preventDefault();
    $("#bitBucketModal").modal('show');
});

// Hammer JS - used to help on mobile screens
$('.box').each(function(i, element){
    // we save a jQuery wrapped version here in the closure for callback.
    var $element = $(element);
    var hammertime = new Hammer(element);

    hammertime.on('tap', function () {
      console.log("Hammer JS Worked");
    });

});
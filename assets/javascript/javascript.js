$(".bitBucket").on("click", function(event){
    event.preventDefault();
    $("#bitBucketModal").modal('show');
});

 console.log("working");

// Hammer JS
// Get a reference to an element
var box = document.querySelector(".box");

// Create a manager to manage the element
var manager = new Hammer.Manager(box);

// Create a recognizer
var Tap = new Hammer.Tap({
  taps: 1
});

// Add the recognizer to the manager
manager.add(Tap);

// Subscribe to the desired event
manager.on('tap', function(e) {
//   e.target.classList.toggle('expand');
console.log("hammer worked");
});
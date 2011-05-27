(function( $ ) {
$.fn.matchH = function( target ) {

  var thisMaxHeight = 0; // Initialize thisMaxHeight
  this.each(function() { // Get all of This
    thisMaxHeight = Math.max( thisMaxHeight, $(this).height() ); // Shift through and set thisMaxHeight to tallest
  });

  if ( !target ) { // If NO target

    this.each( function() { // Get Each This & do
      $(this).height(thisMaxHeight); // Apply thisMaxHeight to each this
    });

  } else { // target exists

    var tHeight = $(target).height(); // Get the Target Element's Height, store in tHeight

    if ( tHeight <= thisMaxHeight) { 
      // If the target height is less than the element's (or elements') height
      this.each( function() { // Get Each This & do
        $(this).height(thisMaxHeight); // Apply thisMaxHeight to each this
      });
    } else {
      this.each(function() { // Get Each This & Do
        $(this).height(tHeight); // Apply Target's Height to each this
      });
    } 

  }

};
})( jQuery );

Meteor.publish("nearbyPlaces", function(coords){
  if (!bottomLeft && !topRight) {
    return [];
  }
// geo within a box search
  return places.find({ loc:
    { $geoWithin:
      { $box:
        [ bottomLeft, topRight ]
      }
    }
  });
});
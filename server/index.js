// _ensureIndex is a private Meteor method 
// index so that we can search
Places._ensureIndex({'loc.coordinates':"2dsphere"});
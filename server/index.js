// _ensureIndex is a Mongo method that is like a private index. Not sure... Josh says in his vid that there it wasn't documented.
Places._ensureIndex({'loc.coordinates':"2dsphere"});
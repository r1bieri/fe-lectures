var getPost;

(function() {
	var cache = {};

	getPost = function(id) {
        console.log(id);
		if (!cache[id]) {
			// Get the post from a backend. Not shown here.
			return cache[id] = 'This is Post #' + id;
		}
		else {
			return cache[id] + ' (cached)';
		}
	};
})();

// calling getPost in the global context
console.log(getPost(42));
console.log(getPost(42));
console.log(getPost(50));
console.log(getPost(5));
console.log(getPost(2));
console.log(getPost(3));
console.log(getPost(40));
console.log(getPost(50));
console.log(getPost(42));
console.log(getPost(42));
console.log(getPost(50));

var data = require("../data.json");

exports.addFriend = function(request, response) {   
	// Your code goes here

	var name = request.query.name;
	var descpt = request.query.description;
	var img = "https://thispersondoesnotexist.com/image";
	var newFriend = { name : name, 
					description: descpt,
					imageURL: img
	}
	data.friends.push(newFriend);
	response.redirect('/');
}
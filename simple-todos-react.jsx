Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {

	Accounts.uiconfig({
		passwordSignupFields: "USERNAME_ONLY"
	});

	Meteor.startup(function () {
		React.render(<App />, document.getElementById("render-target"));
	})
}
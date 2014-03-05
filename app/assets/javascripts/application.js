// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone
//= require backbone.marionette
//= require todoapp
//= require_tree ../templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree .

$(function() {
	var App = new Backbone.Marionette.Application();

	// init regions
	App.addInitializer(function() {
		App.addRegions({
			addRegion: "#create-todo",
			listRegion: "#todo-list",
			statRegion: "#todo-stats"
		});
	});

	// render default views (add & view todo list)
	App.addInitializer(function() {
		var todos = new todoApp.collections.Todos;
		todos.fetch();

		var addTodoView = new todoApp.views.AddTodoView({ collection: todos });
		App.addRegion.show(addTodoView);

		var todosView = new todoApp.views.TodosView({ collection: todos });
		App.listRegion.show(todosView);

		var statView = new todoApp.views.statView({ collection: todos });
		App.statRegion.show(statView);
	});

	App.start();
});	
$(function(){	
	todoApp.views.TodosEmptyView = Backbone.Marionette.ItemView.extend({
		template: JST['todos/empty']
	});
})
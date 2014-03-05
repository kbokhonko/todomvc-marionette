$(function(){
	todoApp.collections.Todos = Backbone.Collection.extend({
		model: todoApp.models.Todo,
		url: '/todos',

		completed: function() {
	    return this.filter(function(todo) {
	      return todo.get('done');
	    });
	  },
	  
	  remaining: function() {
	    return this.without.apply(this, this.completed());
	  }

	});
});
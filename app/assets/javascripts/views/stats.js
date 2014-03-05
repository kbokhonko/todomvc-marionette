$(function(){
	todoApp.views.statView =  Backbone.Marionette.ItemView.extend({
		template: JST['stats'],

		events: {
			"click a#clearcompleted": "clearCompleted",
			"click a.completed": "filterCompleted",
	    "click a.active": "filterActive",
	    "click a.all": "noFilter"
		},

	  initialize: function(){
	    this.listenTo(this.collection, "change", this.render);
	    this.listenTo(this.collection, "add", this.render);
	    this.listenTo(this.collection, "destroy", this.render);
	  },

	  serializeData: function() {
      return { todos: this.collection };
    },

    filterCompleted: function() {
	    return this.collection.reset(this.collection.completed());
	  },
	  
	  filterActive: function() {
	    return this.collection.reset(this.collection.remaining());
	  },

	  noFilter: function() {
	    return this.collection.fetch();
	  },

	  clearCompleted: function() {
	    _.each(this.collection.completed(), function(todo) {
	      return todo.destroy({
	        silent: true
	      });
	    });
	  }
	});
})
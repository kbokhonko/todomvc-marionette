$(function(){
	todoApp.views.AddTodoView = Backbone.Marionette.ItemView.extend({
		template: JST['todos/new'],
		tagName: "div",
		triggers: {
			"click #hidden_click": "addTodo"
		},
		
		events: {
			"keypress #new-todo": "keyTodoInput"
		},
		
		initialize: function() {
			this.on("addTodo", function() {
				this.collection.create(
					new todoApp.models.Todo({ content: this.$field.val() }));
				this.$field.val("");
				return false;
			});
		},

		onRender: function() {
			this.$field = this.$("#new-todo");
		},

		keyTodoInput: function(e) {
	    if (e.keyCode !== 13) {
	      return;
	    }
	    if ($('#new-todo').val() === '') {
	      return;
	    }
	    this.collection.create({
	      done: false,
	      content: this.$field.val()
	    });
	    return this.$field.val('');
	  }

	});
});
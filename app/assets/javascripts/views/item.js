$(function(){	
	todoApp.views.TodoView = Backbone.Marionette.ItemView.extend({
		tagName: "li",
		className: "todo",

		serializeData: function() {
      return { model: this.model };
    },

		getTemplate: function() {
			if (this.mode == "edit") {
				return JST['todos/edit'];
			} else {
				return JST['todos/item'];
			}
		},
		
		triggers: {
			"dblclick": "editMode",
			"blur #editTodo": "saveTodo"
		},

		events: {
			"click a.destroy"  : "clear",
			"click input#toggle"  : "toggleChange"
		},
		
		initialize: function() {
			this.on("editMode", function() {
				if (this.mode != "edit") {
					this.mode = "edit";
					this.render();
					this.$("#editTodo").select();
				}
			});

			this.on("viewMode", function() {
				if (this.mode == "edit") {
					this.mode = "view";
					this.render();
				}
			});

			this.on("saveTodo", function() {
				this.model.save({ content: this.$("#editTodo").val() });
				this.trigger("viewMode");
			});
		},

		clear: function() {
	    this.model.destroy();
	    return this.remove();
	  },

	  toggleChange: function() {
	    var checkedValue = this.model.get("done");
	    return this.model.save({
	      done: !checkedValue
	    });
	  }
		
	});
});
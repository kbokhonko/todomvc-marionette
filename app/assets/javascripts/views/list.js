$(function(){
	todoApp.views.TodosView = Backbone.Marionette.CollectionView.extend({
		itemView: todoApp.views.TodoView,
		tagName: "ul",
		id: "todosList",
		emptyView: todoApp.views.TodosEmptyView,

		initialize: function(){
	    this.listenTo(this.collection, "change", this.render);
	    this.listenTo(this.collection, "destroy", this.render);
	  }
	});
});
var cart = {
    items: [],
    addItem: function(category, index) {
        this.items.push({category: category, index: index});
    }
};

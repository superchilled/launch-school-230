var inventory;

(function() {
  inventory = {
    collection: [],

    setDate: function() {
      var myDate = new Date();
      $('#order_date').text(myDate.toUTCString());
    },
    setTemplate: function() {
      var $inventoryItemTemplate = $('#inventory_item');
      this.template = $inventoryItemTemplate.text();
      $inventoryItemTemplate.remove();
    },
    init: function() {
      this.setDate();
      this.setTemplate();
    },
  };

})();

$(function() {
  inventory.init.bind(inventory).call();

  $('#add_item').on('click', function(event) {
    event.preventDefault();
    inventory.addItem(item);
  });
});

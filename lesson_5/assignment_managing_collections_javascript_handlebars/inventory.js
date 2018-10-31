var inventory;

(function() {
  inventory = {
    collection: [],
    currentID: 0,
    setDate: function() {
      var myDate = new Date();
      $('#order_date').text(myDate.toUTCString());
    },
    setTemplate: function() {
      var $inventoryItemTemplate = $('#inventory_item').remove();
      this.template = Handlebars.compile($inventoryItemTemplate.html());
    },
    init: function() {
      this.setDate();
      this.setTemplate();
    },
    addItem: function() {
      var item = this.createItem(this.getID());
      this.collection.push(item);
      $('#inventory').append(this.template(item));
    },
    getID: function() {
      var id = this.currentID;
      this.currentID++;
      return id;
    },
    createItem: function(id) {
      return {
        id: id,
        name: '',
        stockNumber: '',
        quantity: 1,
      };
    },
    updateCollectionObject: function(itemID, fieldName, fieldValue) {
      var object = this.findObjectInCollection(itemID);
      var objectField = this.translateFieldName(fieldName);
      object[objectField] = fieldValue;
    },
    findObjectInCollection: function(id) {
      return this.collection.filter(function(obj) {
        if (id === obj.id) {
          return true;
        }
      })[0];
    },
    translateFieldName: function(name) {
      var name = name.split('_')[1];

      if (name === 'stock') {
        return 'stockNumber';
      } else {
        return name;
      }
    },
    removeObjectFromCollection: function(objectID) {
      this.collection = this.collection.filter(function(object) {
        if (objectID !== object.id) {
          return true;
        }
      });
    },
  };
})();

$(function() {
  inventory.init.bind(inventory).call();

  $('#add_item').on('click', function(event) {
    event.preventDefault();
    inventory.addItem();
  });

  $('#inventory').on('blur', 'input', function(event) {
    var $field = $(event.target);
    var fieldName = $field.attr('name');
    var fieldValue = $field.val();
    var itemID = Number(fieldName.slice(-1));
    inventory.updateCollectionObject(itemID, fieldName, fieldValue);
  });

  $('#inventory').on('click', 'a[class=delete]', function(event) {
    event.preventDefault();

    var $tableRow = $(this).closest('tr');
    var objectID = $tableRow.find('input[name^=item_id]').val();
    inventory.removeObjectFromCollection(Number(objectID));
    $tableRow.remove();
  });
});

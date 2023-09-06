(function(){
    'use-strict';
    angular.module('ShoppingListApp',[])
    .controller('ShoppingListAddController',ShoppingListAddController)
    .controller('ShoppingListViewController',ShoppingListViewController)
    .service("ShoppingListService",ShoppingListService);
    ShoppingListAddController.$inject=['ShoppingListService'];
    function ShoppingListAddController(ShoppingListService){
        let itemAdder=this;
        itemAdder.itemName="";
        itemAdder.itemQuantity="";
        itemAdder.addItem=function(){
            ShoppingListService.addItem(itemAdder.itemName,itemAdder.itemQuantity);
        }
    }
    ShoppingListViewController.$inject=['ShoppingListService'];
    function ShoppingListViewController(ShoppingListService){
        let showList=this;
        showList.items=ShoppingListService.getItems();
        showList.removeItem=function(itemIndex){ShoppingListService.removeItem(itemIndex);}
    }
    function ShoppingListService(){
        let service=this;
        let items=[];
        service.addItem=function(itemName,itemQuantity){
            let item={name:itemName,quantity:itemQuantity};
            items.push(item);
        }
        service.removeItem=function(itemIndex){
            items.splice(itemIndex,1);
        }
        service.getItems=function(){
            return items;
        }
    }
})();

(function(){
    'use strict';
    var shoppinglist1=["cake","cookies","cream","butter","chocolate"];
    var shoppinglist2=[
        {name:"cake",quantity:2},
        {name:'cookies',quantity:3},
    {name:"cream",quantity:4},
{name:"butter",quantity:5},
{name:"chocolate",quantity:6}];
angular.module('Shopping_app',[])
.controller("ShoppingListController",ShoppingListController);
ShoppingListController.$inject=['$scope'];
function ShoppingListController($scope){
    $scope.shoppinglist1=shoppinglist1;
    $scope.shoppinglist2=shoppinglist2;
    $scope.addEm=function(){
        var newItem={
            name:$scope.newitem,
            quantity:$scope.newquantity
        };
        $scope.shoppinglist2.push(newItem);

    };
}
})();
var app = angular.module("shoppingcart", [])
.controller("shoppingCTR", function($scope){
    $scope.carts=[];
    $scope.products = [
        {p_id: "1", p_name: "Spiderwoman", p_image: "1.png", p_price: 25.00},
        {p_id: "2", p_name: "Harry Potter", p_image: "2.png", p_price: 15.00},
        {p_id: "3", p_name: "El Principito", p_image: "3.png", p_price: 16.00},
        {p_id: "4", p_name: "Cronicas de Narnia", p_image: "4.png", p_price: 10.00}
    ];
                 
    $scope.add_cart = function(product){
        if(product){
            $scope.carts.push({p_id: product.p_id, p_name: product.p_name, p_price: product.p_price});
        }   
    }
                         
    $scope.total = 0;
                 
    $scope.setTotals = function(cart){
        if(cart){
            $scope.total += cart.p_price;
        }
    }
                 
    $scope.remove_cart = function(cart){
        if(cart){
            $scope.carts.splice($scope.carts.indexOf(cart), 1);
            $scope.total -= cart.p_price;
        }
    }
});
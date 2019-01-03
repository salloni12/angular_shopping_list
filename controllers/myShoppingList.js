var app=angular.module("myapp",[]);

app.controller("main",function($scope){

    $scope.product=["milk","bread","butter"];

    $scope.additem=function(){

        $scope.errormsg= "";
        if(!$scope.addme){return;}

    if($scope.product.indexOf($scope.addme) == -1){
        $scope.product.push($scope.addme);
    }
    else{
        $scope.errormsg = "The item is already in your shopping list.";
    }
       
    }
    
    $scope.removeitem=function(x){

        $scope.errormsg="";
        $scope.product.splice(x,1);
       
    }

 
});
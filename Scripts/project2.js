        

        var p2App = angular.module('p2App', ['ngRoute', 'ngStorage']);

//route provider for 2 views 
        p2App.config(function($routeProvider){
            $routeProvider
                .when('/view1',
                    {
                        controller: 'BookmarkController',
                        templateUrl: 'Partials/View1.html'
                    })
                .when('/view2',
                    {
                        controller: 'BookmarkController',
                        templateUrl: 'Partials/View2.html'
                    })
                .otherwise({ redirectTo: '/view1'});
        });

//controller to handle bookmark operations 
        p2App.controller('BookmarkController', function ($scope, $localStorage, $sessionStorage){

//Initial values
            $scope.$storage = $localStorage.$default({
                "bookmarks":[
                {name: 'Google', address: 'https://google.com', favorite: true},
                {name: 'Reddit', address: 'https://reddit.com', favorite: true}, 
                {name: 'Amazon', address: 'https://amazon.com', favorite: false}
            ]});
//Add, delete, and export methods
            $scope.addBookmark = function(){
                $scope.$storage.bookmarks.push(
                    {
                        name: $scope.newBookmark.name, 
                        address: $scope.newBookmark.address,
                        favorite: false
                    });
            };

            $scope.removeLinks = function($index){
                    console.log($index);
                    $scope.$storage.bookmarks.splice($index, 1);
            };
            $scope.exportData = function () {
                var blob = new Blob([document.getElementById('exportable').innerHTML], {
                type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
                });
            saveAs(blob, "Bookmarks.xls");
            };

        });


    

            
        


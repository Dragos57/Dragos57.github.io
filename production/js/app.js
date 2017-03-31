/**
 * Created by Dragos on 3/28/2017.
 */
angular.module('PriceTrackingApp', [
    'PriceTrackingApp.controllers'
]);

angular.module('PriceTrackingApp.controllers', [])
    .controller('homeController', function ($scope, $http) {
        $scope.search = function (productName) {
            console.log('din input search: ' + productName)
            $http.get("http://localhost:8080/search/all?productName=" + productName)
                .then(function (response) {
                    $scope.productList.
                    console.log($scope.productList)
                })
                .catch(function (error) {
                        console.log(error)
                    }
                )

            $http.get("http://localhost:8080/search/all?productName=" + productName)
                .then(function (response) {
                    $scope.productList = response.data
                    console.log($scope.productList)
                })
                .catch(function (error) {
                        console.log(error)
                    }
                )
        }
    });
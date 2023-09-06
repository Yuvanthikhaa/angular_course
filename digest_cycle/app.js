(function(){
    angular.module("CounterApp",[])
    .controller("CounterController",CounterController);

    CounterController.$inject=['$scope'];
    function CounterController($scope){
        $scope.oneCounter=0;
        $scope.counterr=0;
        $scope.name="maxine";
        $scope.showNumberOfWatchers=function(){
            console.log("number of watchers: ",$scope.$$watchersCount);
        }
        $scope.countOnce=function(){
            $scope.oneCounter=1;
        }
        $scope.counteru=function(){
            $scope.counterr++;
        }
        $scope.$watch(function(){
            console.log("digest loop fired");
        })
        // $scope.$watch('oneCounter',function(newval,oldval){
        //     console.log("once counter oldval: ", oldval); 
        //     console.log("once counter newval: ",newval);
        // })
        // $scope.$watch('counterr',function(newval,oldval){
        //         console.log("counter oldval: ", oldval); 
        //         console.log("counter newval: ",newval);
        // })             
    }
})();
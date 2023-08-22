(function(){
    'use strict';
    angular.module('TextToAscii',[])
    .controller('TextToAsciiController',function($scope){
        $scope.text="";
        $scope.totval=0;
        $scope.displayNum=function(){
            var totval=calculateAsciiForString($scope.text);
            $scope.totval=totval;
        };

        function calculateAsciiForString(string){
            var totval=0;
            for(var i=0;i<string.length;i++){
                totval+=string.charCodeAt(i);
            }
            return totval;
        }
});
})();
(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserInfoService','MenuService'];
function MyInfoController(UserInfoService, MenuService) {
  var $info = this;  
  $info.info = UserInfoService.getInfo();  
  
    MenuService.getItem($info.info.favorite).then(function(response) {
         $info.menuItem = response;
    }).catch(function () {
        $info.menuItem = "";
    })
  
  
}


})();


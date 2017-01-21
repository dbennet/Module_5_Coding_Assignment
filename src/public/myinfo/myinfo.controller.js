(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserInfoService','MenuService'];
function MyInfoController(UserInfoService, MenuService) {
  var $info = this;  
  $info.info = UserInfoService.getInfo();  
  
  if ($info.info !== undefined ) {
    $info.isMember = true;
    MenuService.getItem($info.info.favorite).then(function(response) {
         $info.menuItem = response.data;
    }).catch(function () {
        $info.menuItem = "";
    })
  } else {
    $info.isMember = false;	
  }
  
}


})();


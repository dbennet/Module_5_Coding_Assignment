(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserInfoService'];
function MyInfoController(UserInfoService) {
  var $info = this;  
  $info.info = UserInfoService.getInfo;  
}


})();


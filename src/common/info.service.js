(function () {
"use strict";

angular.module('common')
.service('UserInfoService', UserInfoService);

UserInfoService.$inject = [];
function UserInfoService() {
  var service = this;
  
  service.setInfo = function (info) {
    service.info = info;
  }
  
  service.getInfo = function () {
     return service.info;
    }
}
})();
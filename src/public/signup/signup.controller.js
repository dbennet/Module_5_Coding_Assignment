(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService','UserInfoService'];
function SignUpController(MenuService,UserInfoService) {
  var $sgn = this;
  $ctrl.info = {};
  
   $ctrl.submit = function() {
      MenuService.getMenuItem($ctrl.info.favorite)
        .then(function(response) {
          $ctrl.invalidFavorite = false;
          $ctrl.submitted = true;
          UserInfoService.setInfo($ctrl.info);
        })
        .catch(function() {
          $ctrl.invalidFavorite = true;
        });
    }
  
  $sgn.validateFav = function() {
    MenuService.getItem($sgn.info.favorite).then(function(response) {
        $ctrl.FavIsNOK = false;
    }).catch(function () {;
        $ctrl.FavIsNOK = true;
        })
   }
}

})();


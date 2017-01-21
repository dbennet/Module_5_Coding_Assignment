(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService','UserInfoService'];
function SignUpController(MenuService,UserInfoService) {
  var $sgn = this;
  $sgn.info = {};
  
   $sgn.submit = function() {
      MenuService.getMenuItem($sgn.info.favorite)
        .then(function(response) {
          $sgn.invalidFavorite = false;
          $sgn.submitted = true;
          UserInfoService.setInfo($sgn.info);
        })
        .catch(function() {
          $sgn.invalidFavorite = true;
        });
    }
  
  $sgn.validateFav = function() {
    MenuService.getItem($sgn.info.favorite).then(function(response) {
        $sgn.FavIsNOK = false;
    }).catch(function () {;
        $sgn.FavIsNOK = true;
        })
   }
}

})();


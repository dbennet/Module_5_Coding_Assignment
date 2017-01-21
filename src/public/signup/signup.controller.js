(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var $sgn = this;
  $ctrl.info = {};
  
  
  
  $sgn validateFav = function() {
    var resp = MenuService.getItem($sgn.info.favorite);
    console.log(resp);
   }


})();


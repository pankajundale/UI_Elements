/* globals UIElement */

(function() {

  UIElement.FromC = Trillo.inherits(Shared.SharedC, function(viewSpec) {
    Shared.SharedC.call(this, viewSpec);
  });

  var FromC = UIElement.FromC.prototype;
  var SharedC = Shared.SharedC.prototype;

  FromC.handleAction = function(actionName, selectedObj, $e, targetController) {
    if (nm == "correctCaptcha") {
      this.test1(form);
      return true;
    }

    return SharedC.handleAction.call(this, actionName, selectedObj, $e, targetController);
  };

  FromC.postViewShown = function(view) {
    SharedC.postViewShown.call(this, view);
  };

  FromC.test1 = function(form) {
    alert("tessssss");
  }
})();
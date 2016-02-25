/**
 * Created by krisztinavajda on 25/02/16.
 */

app.directive('staggerAnimate', function() {
  return function(scope, element) {
    var ease = Elastic.easeOut;
    TweenMax.staggerFrom(element.children(), 1.1, {
      scale: 0.7,
      opacity: 0,
      delay: 0.5,
      ease: ease
    }, 0.095);
  }
});

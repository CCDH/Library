var Rotate = function() {

  /**
   * Default settings voor de functie
   * @type {{selector: string, choosedegrees: number, choosescale: number, chooseopacity: number choosecolor:}}
   */
  var defaultSettings = {
    selector: '.pijl',
    choosescale: 0.8,
    chooseopacity: 1.0,
    choosedegrees: 180


  };

  var element = defaultSettings.selector;
  var choosedegrees = defaultSettings.choosedegrees;
  var choosescale = defaultSettings.choosescale;
  var chooseopacity = defaultSettings.chooseopacity;


  // Code die de default settings en nieuwe settings samenvoegd.
  var mergeObjects = function(object1, object2) {
    for (var attrname in object1) {
      if (object2.hasOwnProperty(attrname)) {
        object1[attrname] = object2[attrname];
      }
    }
  };



  //Code die ervoor zorgt dat de transparantheid aangepast wordt
  var setOpacity = function(el, myOpacity) {
    el.style.opacity = myOpacity;
  };

  // bezig om te fixen dat je ook de kleur van het object kunt aanpassen

  var setColor = function(el, myColor) {
    el.style.color = myColor;
  };

  //Code die het element laat draaien en ervoor zorgt dat deze schaalt
  var setDegrees = function(el, myDegrees, myScale) {
    el.style.webkitTransform = 'rotate(' + myDegrees + 'deg) scale(' +
      myScale + ')';
    el.style.mozTransform = 'rotate(' + myDegrees + 'deg) scale(' + myScale +
      ')';
    el.style.msTransform = 'rotate(' + myDegrees + 'deg) scale(' + myScale +
      ')';
    el.style.oTransform = 'rotate(' + myDegrees + 'deg) scale(' + myScale +
      ')';
    el.style.transform = 'rotate(' + myDegrees + 'deg) scale(' + myScale +
      ')';

  };
  // Code die alles initieert.
  var init = function(selector, settings) {

    mergeObjects(defaultSettings, settings || {});
    var selector = selector || defaultSettings.selector;
    var element = document.querySelector(selector);

    var settingdegrees = defaultSettings.choosedegrees;
    var settingscale = defaultSettings.choosescale;
    var settingopacity = defaultSettings.chooseopacity;


    setDegrees(element, settingdegrees, settingscale);
    setOpacity(element, settingopacity);
  };

  // Code die terug gegeven wordt
  return {
    init: init
  };
}

$(document).ready(function() {
  var videoView = new VideoView(window);
  videoView.init();
});

var VideoView = function(browserWindow) {
  var $toggleViewButton = $('#toggle-video-view');
  var $darkViewPanels = $('.dark');

  function init() {
    $toggleViewButton.click(toggleVideoView);
    $( browserWindow ).resize(setDarkLocations);
    setDarkLocations();
  }

  function setDarkLocations() {
    var $animationContainer = $('#animation-container');
    var offset = $animationContainer.offset();
    var width = $animationContainer.width();
    var height = $animationContainer.height();
    setLeftPanel(offset.left);
    setRightPanel(offset.left + width);
    setTopPanel(offset.top);
    setBottomPanel(offset.top + height);
  }

  function setLeftPanel(width) {
    var panel = $darkViewPanels.parent().find('.dark-left');
    panel.css('left', '0');
    panel.css('width', width + 'px');
    panel.css('top', '0');
    panel.css('bottom', '0');
  }

  function setRightPanel(left) {
    var panel = $darkViewPanels.parent().find('.dark-right');
    panel.css('left', left + 'px');
    panel.css('right', '0');
    panel.css('top', '0');
    panel.css('bottom', '0');
  }

  function setTopPanel(height) {
    var panel = $darkViewPanels.parent().find('.dark-top');
    panel.css('top', '0');
    panel.css('height', height + 'px');
    panel.css('left', '0');
    panel.css('right', '0');
  }

  function setBottomPanel(top) {
    var panel = $darkViewPanels.parent().find('.dark-bottom');
    panel.css('top', top + 'px');
    panel.css('bottom', '0');
    panel.css('left', '0');
    panel.css('right', '0');
  }

  function toggleVideoView(){
    $darkViewPanels.toggle();
  }

  return {
    init: init
  }
};

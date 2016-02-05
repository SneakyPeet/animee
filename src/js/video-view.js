var VideoView = function(browserWindow) {
  var $toggleViewButton = $('#toggle-video-view');
  var $toggleColorButton = $('#toggle-video-view-color');
  var $viewPanels = $('.video-panel');
  var darkView = "dark";
  var lightView = "light";

  function init() {
    $toggleViewButton.click(showVideoView);
    $toggleColorButton.hide();
    $toggleColorButton.click(setPanelColorLight);
    setPanelColorDark();
    $( browserWindow ).resize(setViewPanelLocations);
    setViewPanelLocations();
  }

  function showVideoView(){
    $toggleViewButton.off().click(hideVideoView);
    $viewPanels.show();
    $toggleColorButton.show();
  }

  function hideVideoView(){
    $toggleViewButton.off().click(showVideoView);
    $viewPanels.hide();
    $toggleColorButton.hide();
  }

  function setPanelColorDark() {
    $viewPanels.addClass(darkView);
    $viewPanels.removeClass(lightView);
    $toggleColorButton.off().click(setPanelColorLight);
  }

  function setPanelColorLight() {
    $viewPanels.addClass(lightView);
    $viewPanels.removeClass(darkView);
    $toggleColorButton.off().click(setPanelColorDark);
  }

  function setViewPanelLocations() {
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
    var panel = $viewPanels.parent().find('.video-panel-left');
    panel.css('left', '0');
    panel.css('width', width + 1 + 'px');
    panel.css('top', '0');
    panel.css('bottom', '0');
  }

  function setRightPanel(left) {
    var panel = $viewPanels.parent().find('.video-panel-right');
    panel.css('left', left + 'px');
    panel.css('right', '0');
    panel.css('top', '0');
    panel.css('bottom', '0');
  }

  function setTopPanel(height) {
    var panel = $viewPanels.parent().find('.video-panel-top');
    panel.css('top', '0');
    panel.css('height', height + 1 + 'px');
    panel.css('left', '0');
    panel.css('right', '0');
  }

  function setBottomPanel(top) {
    var panel = $viewPanels.parent().find('.video-panel-bottom');
    panel.css('top', top + 'px');
    panel.css('bottom', '0');
    panel.css('left', '0');
    panel.css('right', '0');
  }

  return {
    init: init
  }
};

function Video-View() {
    var $toggleViewButton = $('#toggle-video-view');
    var $darkViewPanels = $('.dark');
    $('#toggle-video-view').click(toggleVideoView);

    function toggleVideoView(){
      $darkViewPanels.show();
    }
}

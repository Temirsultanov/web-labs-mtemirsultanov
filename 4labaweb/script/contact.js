(function (){
  $(document).ready(function() {
    $(".submit").click(function(evt) {
        evt.preventDefault();
      $(".submit").addClass("loading");
      setTimeout(function() {
        $(".submit").addClass("hide-loading");
        // For failed icon .failed
        $(".done").addClass("finish");
      }, 3000);
      setTimeout(function() {
        $(".submit").removeClass("loading");
        $(".submit").removeClass("hide-loading");
        $(".done").removeClass("finish");
        $(".failed").removeClass("finish");
      }, 5000);
    })
  });
}())
$( document ).ready(function() {

    

    $(document).on('scroll', function() {
      var pixelsFromTop = $(document).scrollTop()

      // if (pixelsFromTop > 50) {
      //   $('header').addClass('hidden')
      // } else {
      //   $('header').removeClass('hidden')
      // }

      var documentHeight = $(document).height()
      var windowHeight = $(window).height()

      var difference = documentHeight - windowHeight
      var percentage = 400 * pixelsFromTop / difference

      console.log(percentage)


      $('.bar-top').css('width', percentage + '%')

      if (percentage > 25) {
        $('.bar-right').css('height', percentage + '%')
      }

      if (percentage > 50) {
        $('.bar-bottom').css('width', percentage + '%')
      }

      if (percentage > 75) {
        $('.bar-left').css('height', percentage + '%')
      }
    })


});
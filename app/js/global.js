$( document ).ready(function() {
    $('.filters-list a').on('click', function() {
      var filter = $(this).attr('data-filter')
      
      $('.contact').hide()
      $('.about').hide()
      $('.photo').hide()
      $(filter).show()
      
    $('.filters-list a').removeClass('selected')
      
    $(this).addClass('selected')

    return false 
      
    })

    $(document).on('scroll', function() {
      var pixelsFromTop = $(document).scrollTop()

      if (pixelsFromTop > 50) {
        $('header').addClass('hidden')
      } else {
        $('header').removeClass('hidden')
      }

      var documentHeight = $(document).height()
      var windowHeight = $(window).height()

      var difference = documentHeight - windowHeight
      var percentage = 100 * pixelsFromTop / difference

      console.log(percentage)

      $('.bar').css('width', percentage + '%')
    })


});
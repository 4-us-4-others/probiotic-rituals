$(document).ready(function() {
  $('#show-hide').click(function() {
    $('.to-the-right, .to-the-left').toggle()
  })
  $('#hc').click(function() {
    const hcA = $('#hc').hasClass('hc-active')
    const hc = '/stylesheets/css/hc.css'
    if (hcA !== true) {
      $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', '/stylesheets/css/hc.css'))
      // $('#sh-hc').show()
      // $('#sh-base').hide()
      $('#hc').addClass('hc-active')
    } else {
      $(`link[href="${hc}"]`).remove()
      $('#hc').removeClass('hc-active')
    }
  })
})

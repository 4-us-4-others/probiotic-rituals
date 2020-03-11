$(document).ready(function() {
  $('#show-hide').click(function() {
    $('.to-the-right, .to-the-left').toggle()
  })
  $('#hc').click(function() {
    const hcA = $('#hc').hasClass('hc-active')
    const hc = '/stylesheets/css/hc.css'
    if (hcA !== true) {
      $('head').append($('<link rel="stylesheet" type="text/css" />').attr('href', '/stylesheets/css/hc.css'))
      $('#hc').addClass('hc-active')
    } else {
      $(`link[href="${hc}"]`).remove()
      $('#hc').removeClass('hc-active')
    }
  })
  // cleaner but there is a split second of no stylesheet at all lol
  // $('#hc').click(function() {
  //   const hcA = $('#hc').hasClass('hc-active')
  //   const egg = '/stylesheets/css/egg.css'
  //   const hc = '/stylesheets/css/hc.css'
  //   if (hcA !== true) {
  //     $(`link[href="${egg}"]`).attr('href', `${hc}`)
  //     $('#hc').addClass('hc-active')
  //   } else {
  //     $(`link[href="${hc}"]`).attr('href', `${egg}`)
  //     $('#hc').removeClass('hc-active')
  //   }
  // })
})

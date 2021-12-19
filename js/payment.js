//PAYMENT PAGE STARTS//
$(function () {  
$('#cc-number').on('input', function (e) {
    if (isNaN(e.target.value)) {
      $(this).addClass('is-invalid')
    } else {
      if (
        (e.target.value.length > 1 && e.target.value.length < 16) ||
        e.target.value.length > 16
      ) {
        $(this).addClass('is-invalid')
      } else if (e.target.value.length == 16) {
        $('#cc-number-error').text('')
        $(this).removeClass('is-invalid')
        $(this).addClass('is-valid')
      }
    }
  })

  $('#cc-exp').on('input', function (e) {
    var value = e.target.value
    if (!isGoodDate(value)) {
      $(this).addClass('is-invalid')
    } else {
      $(this).removeClass('is-invalid')
      $(this).addClass('is-valid')
    }
  })

  $('#name').on('input', function (e) {
    var value = e.target.value
    if (!isValidName(value)) {
      $(this).addClass('is-invalid')
    } else {
      $(this).removeClass('is-invalid')
      $(this).addClass('is-valid')
    }
  })

  $('#email').on('input', function (e) {
    var value = e.target.value
    if (!isValidEmail(value)) {
      $(this).addClass('is-invalid')
    } else {
      $(this).removeClass('is-invalid')
      $(this).addClass('is-valid')
    }
  })

  $('#cc-cvc').on('input', function (e) {
    var value = e.target.value
    if (!isValidCvc(value)) {
      $(this).addClass('is-invalid')
    } else {
      $(this).removeClass('is-invalid')
      $(this).addClass('is-valid')
    }
  })
})
function isGoodDate(value) {
  let regex = new RegExp('^((0[1-9])|(1[0-2]))/(2[1-9])$')
  return regex.test(value)
}
function isValidEmail(value) {
  let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}')
  return regex.test(value)
}
function isValidCvc(value) {
  let regex = new RegExp('^([0-9]){3}$')
  return regex.test(value)
}
function isValidName(value) {
  let regex = new RegExp('[a-zA-Z]{3,}')
  return regex.test(value)
}

//PAYMENT PAGE ENDS//
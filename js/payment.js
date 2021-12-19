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
        $('#cc-number-error').text('Enter a valid card number')
      } else if (e.target.value.length == 16) {
        $(this).removeClass('is-invalid')
        $(this).addClass('is-valid')
        $('#cc-number-error').text('')
      }
    }
  })

  $('#cc-exp').on('input', function (e) {
    var value = e.target.value
    if (!isGoodDate(value)) {
      $(this).addClass('is-invalid')
      $('#cc-date-error').text('Enter valid date(MM/YY)')
    } else {
      $(this).removeClass('is-invalid')
      $(this).addClass('is-valid')
      $('#cc-date-error').text('')
    }
  })

  $('#name').on('input', function (e) {
    var value = e.target.value
    if (!isValidName(value)) {
      $(this).addClass('is-invalid')
      $('#cc-name-error').text('Enter name')
    } else {
      $(this).removeClass('is-invalid')
      $(this).addClass('is-valid')
      $('#cc-name-error').text('')
    }
  })

  $('#email').on('input', function (e) {
    var value = e.target.value
    if (!isValidEmail(value)) {
      $(this).addClass('is-invalid')
      $('#cc-email-error').text('Enter email address')
    } else {
      $(this).removeClass('is-invalid')
      $(this).addClass('is-valid')
      $('#cc-email-error').text('')
    }
  })

  $('#cc-cvc').on('input', function (e) {
    var value = e.target.value
    if (!isValidCvc(value)) {
      $(this).addClass('is-invalid')
      $('#cc-cvc-error').text('Enter 3 digits')
    } else {
      $(this).removeClass('is-invalid')
      $(this).addClass('is-valid')
      $('#cc-cvc-error').text('')
    }
  })

  $('#payment-form').submit(function (event) {
    event.preventDefault()
    var cc_cvc = $('#cc-cvc').val()
    var email = $('#email').val()
    var name = $('#name').val()
    var cc_exp = $('#cc-exp').val()
    var cc_number = $('#cc-number').val()
    console.log(typeof cc_number)
    console.log(isValidNumber(cc_number))
    if (
      isValidEmail(email) &&
      isValidName(name) &&
      isGoodDate(cc_exp) &&
      isValidNumber(cc_number)
    ) {
      window.location.replace('./confirmation/')
      // redirect  the user
    } else {
      window.location.replace('./')
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
function isValidNumber(value) {
  if (value.length == 16) {
    return true
  } else {
    return false
  }
}
function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling)
}

//PAYMENT PAGE ENDS//

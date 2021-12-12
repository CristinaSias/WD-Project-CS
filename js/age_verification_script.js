function notOldEnough() {
  event.preventDefault()
  window.location.replace('https://www.google.com')
}

function ageCheck() {
  event.preventDefault()

  var day = document.getElementById('day').value
  var month = document.getElementById('month').value - 1
  var year = document.getElementById('year').value

  if (
    day > 0 &&
    day <= 31 &&
    month > 0 &&
    month <= 12 &&
    year > 0 &&
    year <= 9999
  ) {
    const compDay = new Date()
    const compMonth = new Date()
    const compYear = new Date()

    var currentDay = compDay.getDate()
    var currentMonth = compMonth.getMonth()
    var currentYear = compYear.getFullYear()

    var birthDate = new Date(year, month, day)
    var currentDate = new Date(currentYear, currentMonth, currentDay)

    var dateDifferenceMilli = currentDate.getTime() - birthDate.getTime()

    var days = dateDifferenceMilli / (1000 * 3600 * 24)

    if (Math.abs(days >= 6574.5)) {
      window.location.replace('./home.html')
      document.getElementById('birthDate').reset()
    } else {
      var timeLeftYears = (6574.5 - days) / 365
      var futureYearAttend = Math.round(currentYear + timeLeftYears)

      document.getElementById('msg').innerHTML =
        'Unfortunately you are not old enough to attend this year.' +
        '</br>' +
        'We look forward to meeting you in ' +
        futureYearAttend +
        '.'
      $('.age_verification_alertContainer').removeClass('age_verification_hide')
      document.getElementById('birthDate').reset()
    }
  } else {
    document.getElementById('dateErrorMsg').innerHTML =
      'The date you entered was not valid. Please try again.'
    $('.age_verification_invalidDateContainer').removeClass(
      'age_verification_hide',
    )
    document.getElementById('birthDate').reset()
  }
}

$('.age_verification_close').click(function () {
  $('.age_verification_alertContainer').addClass('age_verification_hide')
})

$('.age_verification_close').click(function () {
  $('.age_verification_invalidDateContainer').addClass('age_verification_hide')
})

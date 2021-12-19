//TICKETS PAGE STARTS//
$(function () {
  //  Sartuday
  let saturdayQuantity = 0
  let saturdayTotalToPay = 0
  let saturdayPrice = 175
  const saturday_qty = $('#saturday-qty')

  //  Sartuday VIP
  let saturdayVipQuantity = 0
  let saturdayVipTotalToPay = 0
  let saturdayVipPrice = 270
  const saturday_vip_qty = $('#saturday-vip-qty')

  //  Sunday
  let sundayQuantity = 0
  let sundayTotalToPay = 0
  let sundayPrice = 175
  const sunday_qty = $('#sunday-qty')

  //  Sunday VIP
  let sundayVipQuantity = 0
  let sundayVipTotalToPay = 0
  let sundayVipPrice = 270
  const sunday_vip_qty = $('#sunday-vip-qty')

  //  Weekend
  let weekendQuantity = 0
  let weekendTotalToPay = 0
  let weekendPrice = 175
  const weekend_qty = $('#weekend-qty')

  //  Weekend Vip
  let weekendVipQuantity = 0
  let weekendVipTotalToPay = 0
  let weekendVipPrice = 270
  const weekend_vip_qty = $('#weekend-vip-qty')

  //Total to pay
  const total = $('#total')

  const total_quantity = $('#total-quantity')

  //Saturday
  $('#saturday-minus').click(function (e) {
    if (saturdayQuantity > 0) {
      saturday_qty.html(saturdayQuantity - 1)
      saturdayQuantity--
      saturdayTotalToPay = saturdayTotalToPay - saturdayPrice
      const globalTotal = getTotal()
      const qtyTotal = getTotalQuantity()
      total.html(globalTotal)
      total_quantity.html(qtyTotal)
    }
  })

  $('#saturday-plus').click(function (e) {
    saturday_qty.html(saturdayQuantity + 1)
    saturdayQuantity++
    saturdayTotalToPay = saturdayTotalToPay + saturdayPrice
    const globalTotal = getTotal()
    const qtyTotal = getTotalQuantity()
    total.html(globalTotal)
    total_quantity.html(qtyTotal)
  })
  //Sartuday Vip
  $('#saturday-vip-minus').click(function (e) {
    if (saturdayVipQuantity > 0) {
      saturday_vip_qty.html(saturdayVipQuantity - 1)
      saturdayVipQuantity--
      saturdayVipTotalToPay = saturdayVipTotalToPay - saturdayVipPrice
      const globalTotal = getTotal()
      const qtyTotal = getTotalQuantity()
      total.html(globalTotal)
      total_quantity.html(qtyTotal)
    }
  })

  $('#saturday-vip-plus').click(function (e) {
    saturday_vip_qty.html(saturdayVipQuantity + 1)
    saturdayVipQuantity++
    saturdayVipTotalToPay = saturdayVipTotalToPay + saturdayVipPrice
    const globalTotal = getTotal()
    const qtyTotal = getTotalQuantity()
    total.html(globalTotal)
    total_quantity.html(qtyTotal)
  })

  //Sunday
  $('#sunday-minus').click(function (e) {
    if (sundayQuantity > 0) {
      sunday_qty.html(sundayQuantity - 1)
      sundayQuantity--
      sundayTotalToPay = sundayTotalToPay - sundayPrice
      const globalTotal = getTotal()
      const qtyTotal = getTotalQuantity()
      total.html(globalTotal)
      total_quantity.html(qtyTotal)
    }
  })

  $('#sunday-plus').click(function (e) {
    sunday_qty.html(sundayQuantity + 1)
    sundayQuantity++
    sundayTotalToPay = sundayTotalToPay + sundayPrice
    const globalTotal = getTotal()
    const qtyTotal = getTotalQuantity()
    total.html(globalTotal)
    total_quantity.html(qtyTotal)
  })
  //Sunday VIP
  $('#sunday-vip-minus').click(function (e) {
    if (sundayVipQuantity > 0) {
      sunday_vip_qty.html(sundayVipQuantity - 1)
      sundayVipQuantity--
      sundayVipTotalToPay = sundayVipTotalToPay - sundayVipPrice
      const globalTotal = getTotal()
      const qtyTotal = getTotalQuantity()
      total.html(globalTotal)
      total_quantity.html(qtyTotal)
    }
  })
  $('#sunday-vip-plus').click(function (e) {
    sunday_vip_qty.html(sundayVipQuantity + 1)
    sundayVipQuantity++
    sundayVipTotalToPay = sundayVipTotalToPay + sundayVipPrice
    const globalTotal = getTotal()
    const qtyTotal = getTotalQuantity()
    total.html(globalTotal)
    total_quantity.html(qtyTotal)
  })

  // Weedkend Pass
  $('#weekend-minus').click(function (e) {
    if (weekendQuantity > 0) {
      weekend_qty.html(weekendQuantity - 1)
      weekendQuantity--
      weekendTotalToPay = weekendTotalToPay - weekendPrice
      const globalTotal = getTotal()
      const qtyTotal = getTotalQuantity()
      total.html(globalTotal)
      total_quantity.html(qtyTotal)
    }
  })
  $('#weekend-plus').click(function (e) {
    weekend_qty.html(weekendQuantity + 1)
    weekendQuantity++
    weekendTotalToPay = weekendTotalToPay + weekendPrice
    const globalTotal = getTotal()
    const qtyTotal = getTotalQuantity()
    total.html(globalTotal)
    total_quantity.html(qtyTotal)
  })

  // Weedkend Vip Pass
  $('#weekend-vip-minus').click(function (e) {
    if (weekendVipQuantity > 0) {
      weekend_vip_qty.html(weekendVipQuantity - 1)
      weekendVipQuantity--
      weekendVipTotalToPay = weekendVipTotalToPay - weekendVipPrice
      const globalTotal = getTotal()
      const qtyTotal = getTotalQuantity()
      total.html(globalTotal)
      total_quantity.html(qtyTotal)
    }
  })
  $('#weekend-vip-plus').click(function (e) {
    weekend_vip_qty.html(weekendVipQuantity + 1)
    weekendVipQuantity++
    weekendVipTotalToPay = weekendVipTotalToPay + weekendVipPrice
    const globalTotal = getTotal()
    const qtyTotal = getTotalQuantity()
    total.html(globalTotal)
    total_quantity.html(qtyTotal)
  })

  function getTotal() {
    return (
      saturdayTotalToPay +
      saturdayVipTotalToPay +
      sundayTotalToPay +
      sundayVipTotalToPay +
      weekendTotalToPay +
      weekendVipTotalToPay
    )
  }

  function getTotalQuantity() {
    return (
      saturdayQuantity +
      saturdayVipQuantity +
      sundayQuantity +
      sundayVipQuantity +
      weekendVipQuantity +
      weekendQuantity
    )
  }
  //TICKET PAGE ENDS//

})


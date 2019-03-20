$(function () {
  $('.finish').hover(function () {
    $('rect').off()
    $('circle').off()
    alert('Congratulations, you win!')
  })
})

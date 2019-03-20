$(function () {
  $('.finish').hover(function () {
    $('rect').off()
    alert('Congratulations, you win!')
  })
})

var app = new Vue({
  el: '#grid',
  data: {
    score: 0,
    pattern: [],
    player: [],
  }
})

e1 = $('#squareRed');
e2 = $('#squareBlue');
e3 = $('#squareGreen');
e4 = $('#squareYellow');

function squareClick(square) {
  var match = true;
  app.player.push(square)
  for(i = 0; i < app.player.length; i++) {
    if(app.player[i] !== app.pattern[i]) {
      match = false;
      break;
    }
  }

  if(app.player.length === app.pattern.length) {
    if(match) {
      app.score += 1;
      setTimeout(function() {
        sequence();
      }, 500)
    }
  }

  if(!match) {
    alert('game over')
    $('.square').css('display', 'none');
    $('#animate').show();
  }
}

$(function() {
  $('#animate').click(function() {
    app.pattern=[];
    app.score = 0;

    $('.square').css('display', 'inline-block');
    $('#intro').hide();
    $('#score').show();
    $('#animate').hide();

    setTimeout(function() {
      sequence();
    }, 100)
  })
})

function sequence() {
  app.player=[]
  var randNo = Math.floor(Math.random()*4);
  app.pattern.push(randNo);
  animate();
}

function animate() {
  $('.square').css('pointer-events', 'none')
  var timer = 0;
  app.pattern.forEach(function(square) {
    setTimeout(function() {
      animateSquare(square)
    }, timer)
    timer += 1500
  })

  setTimeout(function() {
    $('.square').css('pointer-events', 'auto')
  }, (1500*app.pattern.length))
}

function animateSquare(squareNo) {
  switch(squareNo) {
    case 0:
      app.square = 'red'
      e1.addClass('animate-red')
      $('body').on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
          e1.removeClass('animate-red')
        }
      )
      break;
    case 1:
      app.square = 'blue'
      e2.addClass('animate-blue')
      $('body').on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
          e2.removeClass('animate-blue')
        }
      )
      break;
    case 2:
      app.square = 'green'
      e3.addClass('animate-green')
      $('body').on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
          e3.removeClass('animate-green')
        }
      )
      break;
    case 3:
      app.square = 'yellow'
      e4.addClass('animate-yellow')
      $('body').on('webkitAnimationEnd oanimationend msAnimationEnd animationend',
        function (e) {
          e4.removeClass('animate-yellow')
        }
      )
      break;
  }
}

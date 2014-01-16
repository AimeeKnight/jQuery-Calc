$(document).ready(initalize);

function initalize(){
  $('.number').click(displayNumber);
  $('#push').click(compute);
  $('#push').click(computeMany);
  $('#push').click(gatherInfo);
  $('#clear').click(clear);
}

function displayNumber(){
  $this = $(this).text();
  $('#answer').text($this);
}

function clear(){
  $('#num1').val('');
  $('#num1').focus('');
  $('#num2').val('');
  $('#op').val('');
  $('#result').text('');
}

function gatherInfo(){
  var num1 = $('#num1').val();
  num1 = parseFloat(num1);

  var num2 = $('#num2').val();
  num2 = parseFloat(num2);

  var op = $('#op').val();
  var result = compute(num1, num2, op);
  $('#answer').text(result);
}

function compute(x, y, op){
  var total;
  switch(op){
    case '+':
     total = x + y;
     console.log(total);
     break;
    case '-':
      total = x - y;
      break;
    case '*':
      total = x * y;
      break;
    case '/':
      total = x / y;
  }
  return total;
}

function computeMany(){
  var op = $('#op').val();
  var nums = $('.nums input');
  var total = 0;

  if(op === '+'){
    $.each(nums,function(){
      var $num = $(this).val();
      total += parseFloat($num);
      $('#result').text(total);
      return total;
    });
  }else if (op === '*'){
    $.each(nums,function(){
      var $num = $(this).val();
      $num = parseFloat($num);
      if($num !== ''){
        total *= parseFloat($num);
      }
      $('#answer').text(total);
      return total;
    });
  }
}

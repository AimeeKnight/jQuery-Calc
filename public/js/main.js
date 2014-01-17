$(document).ready(initalize);

function initalize(){
  $('.number').click(displayNumber);
  $('.operator').click(operate);
  $('#push').click(compute);
  $('#push').click(computeMany);
  $('#push').click(gatherInfo);
  $('#clear').click(clear);
  $('#neg').click(negate);
}

function displayNumber(){
  var $this = $(this).text();

  if ($this === '.' && $('#answer').text().indexOf('.') !== -1)
    return false;
  if ($('#answer').text() === '0')
    $('#answer').text('');

  var oldNum = $('#answer').text();
  $('#answer').text(oldNum + $this);
}

function negate(){
  var minus = '-';
  var $currentNum = $('#answer').text();
  if ($currentNum.indexOf('-') === -1){
    $currentNum = minus.concat($currentNum);
    $('#answer').text($currentNum);
  }else{ 
    $currentNum = $currentNum.slice(1);
    $('#answer').text($currentNum);
  }
}

// function negate(){
//   var currentNum = $('#answer').text();
//   currentNum = parseFloat(currentNum);
//   currentNum = currentNum * -1
//   alert(currentNum);
//   $('#answer').text(currentNum);
// }

function operate(){
 var num1 = $('#answer').text();
 $('#queue').text(num1);
 num1 = parseFloat(num1);
 if ($('#answer').text() === '0'){
  $('#answer').text('');
 }
}

function clear(){
  $('#').focus('');
  $('#op').val('');
  $('#answer').text('0');
  $('#queue').text('');
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

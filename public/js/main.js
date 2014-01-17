$(document).ready(initalize);

function initalize(){
  $('.number').click(displayNumber);
  $('#neg').click(changeSign);
  $('#push').click(pushToQueue);
  $('.operator').click(compute);

  $('#push').click(compute);
  $('#push').click(computeMany);
  $('#push').click(gatherInfo);
  $('#clear').click(clear);
}

function displayNumber(){
  var $this = $(this).text();

  if ($this === '.' && containsChar($('#answer').text(),'.' !== -1))
    return false;
  if ($('#answer').text() === '0')
    $('#answer').text('');

  var oldNum = $('#answer').text();
  $('#answer').text(oldNum + $this);
}

/*function negate(){
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
*/

function changeSign(){
  var currentNum = $('#answer').text();
  currentNum *= -1;
  $('#answer').text(currentNum);
}

function pushToQueue(){
 var display = $('#answer').text();
 var displayInt = parseFloat(display);
 $('#answer').text('0');
 var $li = $('#queue').prepend("<li>" + display + "</li>");
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

function compute(){
  var operator = this.id;
  var total;
  switch(operator){
    case 'add':
      total = 0;
      $('#queue li').each(function(i){
        var num = parseFloat($(this).text());
        total += num;
      });
      $('#answer').text(total);
      $('#queue').empty();
      break;
    case 'sub':
      total = 0;
      var $lis = $('#queue li');
      var num1 = $lis[0].textContent;
      num1 = parseFloat(num1);
      var num2 = $lis[1].textContent;
      num2 = parseFloat(num2);
        total = num2 - num1;
      $('#answer').text(total);
      $('#queue').text('');
      break;
    case 'mul':
      total = 0;
      $lis = $('#queue li');
      num1 = $lis[0].textContent;
      num1 = parseFloat(num1);
      num2 = $lis[1].textContent;
      num2 = parseFloat(num2);
        total = num1 * num2;
      $('#answer').text(total);
      $('#queue').text('');
      break;
    case 'div':
      total = 0;
      $lis = $('#queue li');
      num1 = $lis[0].textContent;
      num1 = parseFloat(num1);
      num2 = $lis[1].textContent;
      num2 = parseFloat(num2);
        total = num2 / num1;
      $('#answer').text(total);
      $('#queue').text('');
      break;
    case 'sum':
      $('#queue li').each(function(i){
        var num = parseFloat($(this).text());
        total += num;
      });
      $('#answer').text(total);
      $('#queue').text('');
      break;
    case'pow':
      total = 0;
      $lis = $('#queue li');
      num1 = $lis[0].textContent;
      num1 = parseFloat(num1);
      num2 = $lis[1].textContent;
      num2 = parseFloat(num2);
      for(i=0; i<= num2; i++){
        num1 *= num1;
      }
        total = num1;
      $('#answer').text(total);
      $('#queue').text('');
      break;
  }
}
function parseTags($tags){
  return $tags.map(function(tag){
    return parseFloat(tag.textContent);
  });
}

function compute1(x, y, op){
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

var ans = 0;
var cnt = 0;

var ansCalc = function() {
    ans = Math.ceil(Math.random() * 100);
}

// first time
ansCalc();

var guessNumResult = function() {
	if (document.getElementById('guess').value == '') {
		document.getElementById('message').value = 'no value given';
		return ;
	}
	cnt++;
	document.getElementById('count').value = cnt;
    var guessNumber = document.getElementById('guess').value;
    if (ans > guessNumber) document.getElementById('message').value = 'higher!';
    if (ans < guessNumber) document.getElementById('message').value = 'lower!';
    if (ans == guessNumber) {
        document.getElementById('message').value = 'Correct!!';
         alert('Congratulations!');
         ansCalc();
    }
}

var giveUp = function() {
	alert('answer is ' + ans);
	ansCalc();
} 
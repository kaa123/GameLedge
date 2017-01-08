$(function(){
	var letters=['А','Б','В','Г','Д','Е','Ё','Ж','З','И','Й','К','Л','М','Н','О','П','Р','С','Т','У','Ф','Х','Ц','Ч','Ш','Щ','Ъ','Ы','Ь','Э','Ю','Я'];
	
	var newLetters=letters.slice();
	
	function arrRandom(a,b){
		return Math.random()-0.5;
	}
	newLetters.sort(arrRandom);
	
	for (var i=0; i<newLetters.length; i++){
		$('<div></div>')
		.addClass('letter')
		.append($('<div></div>').text(newLetters[i]).addClass('let'))
		.appendTo('.game');
	}
	var errorCount=0;
	var clickCount=0;
	$('.game').on('click','.letter', function(){
		var me = ($('.let', this).text());
		var that = this;
		for(var i=0; i<letters.length;i++){
			var trueMe = letters[i];
			if(me===trueMe){
				$(me).hide();
				$('<div></div>')
				.addClass('trueLetter')
				.append($('<div></div>').text(trueMe))
				.appendTo('.gameConteiner');
				letters.splice(0, 1);
				$(that).addClass('off');
				clickCount++;
				if(clickCount==33){
					x=confirm('Вы выиграли! Число ошибок = '+ errorCount+'. Сыграть еще раз?');
					if (x==true) {
						location.reload();
					}
					else {
						$('.letter').addClass("game-over");
						$('.letter').off('click');
						$('.game').off('click');
					}
				}
			}else{
				errorCount++;
				if(errorCount==4){
					x=confirm('Вы проиграли. Попробовать еще раз?');
					if (x==true) {
						location.reload();
					}
					else {
						$('.letter').addClass("game-over");
						$('.letter').off('click');
						$('.game').off('click');
					}
				}
			}
			return false;
		}
	});
})
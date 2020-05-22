/* Quiz Segment */
var questions = [
	{
			quiz: 'The ancient Egyptian pyramids were built to be used as...',
			options: ['Forts', 'Tombs', 'Storage', 'Prisons'],
			answerPosition: 1
	},
	{
		quiz: 'Queen Amina was a famous____ from _____?',
		options: ['Wrestler;Kano State', 'Painter;Kogi State', 'Warrior:Kaduna State', 'Potter;Kwara State'],
		answerPosition: 2
},
	{
			quiz: 'Where is the Hanging Gardens of Babylon located?',
			options: ['Greece', 'Germany', 'India', 'Iraq'],
			answerPosition: 3
	},
	{
		quiz: 'Who is the father of Nigeria...?',
		options: ['Dr. Nnamdi Azikwe', 'Sir Abubakar T Balewa', 'Herbert Macaulay', 'Obafemi Awolowo'],
		answerPosition: 2
},
{
	quiz: 'The COVID-19 is a ___ disease?',
	options: ['Viral', 'Bacterial', 'Fungal', 'Parasitic'],
	answerPosition: 0
},
	{
			quiz: 'Who is credited for inventing the aeroplane?',
			options: ['Thomas Edison', 'Graham Bell', 'Johannes Gutenberg', 'Wright Brothers'],
			answerPosition: 3
	},
	{
		quiz: 'Ladi Kwali was famous for____?',
		options: ['Archery', 'Wrestling', 'Pottery', 'Politics'],
		answerPosition: 2
},
	{
			quiz: 'The long Great Wall is located in...?',
			options: ['Nigeria', 'USA', 'China', 'France'],
			answerPosition: 2
	},
	{
		quiz: 'There are ______ oceans in the world?',
		options: ['3', '5', '10', '15'],
		answerPosition: 1
},
	{
			quiz: 'Ancient Egyptians made mummies in order...',
			options: ['To frighten enemies', 'For protection', 'For prayers', 'Preserve bodies'],
			answerPosition: 3
	}
];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

window.addEventListener('DOMContentLoaded', function(e){
	displayCurrentQuestion();

	var quizPopup = document.querySelector('.quizPopup');

			quizPopup.style.display = 'none';

	document.querySelector('.nextButton').addEventListener('click', function(){
			
			if(!quizOver){
					var radioBtnsChecked = document.querySelector('input[type=radio]:checked');

					if (radioBtnsChecked === null){
							quizPopup.innerText = 'Please select an answer';
							quizPopup.style.display = 'block';
					} else {
							console.log(radioBtnsChecked.value);
							quizPopup.style.display = 'none';
							if (parseInt(radioBtnsChecked.value) === questions[currentQuestion].answerPosition){
									correctAnswers++;
							}

							currentQuestion++;

							if (currentQuestion < questions.length){
									displayCurrentQuestion();
							} else {
									displayScore();
									document.querySelector('.nextButton').innerText = 'Play Again?';
									quizOver = true;
							 }
							}   
			} else {
					quizOver = false;
					document.querySelector('.nextButton').innerText = 'Next Question';
					resetQuiz();
					displayCurrentQuestion();
					hideScore();
			}
	});
});

function displayCurrentQuestion(){
	console.log('In display current Questions');

	var quiz = questions[currentQuestion].quiz;
	var questionClass = document.querySelector('.quizBox > .quiz');
	var choiceList = document.querySelector('.quizBox > .choiceList');
	var numChoices = questions[currentQuestion].options.length;

	//Set the questionClass text to the current question
	questionClass.innerText = quiz;

	//Remove all current <li> elements (if any)
	choiceList.innerHTML = '';

	var choice;
	for (i = 0; i < numChoices; i++){
			choice = questions[currentQuestion].options[i];
			var li = document.createElement('li');
					li.innerHTML = '<li><input type="radio" value="' + i + '" name="dynradio" />' + choice + '</li>'
			choiceList.appendChild(li);

	}
}

function resetQuiz(){
	currentQuestion = 0;
	correctAnswers = 0;
	hideScore();
}

function displayScore(){
	document.querySelector('.quizBox > .result').innerText = 'You scored: ' + correctAnswers + ' out of ' + questions.length;
	document.querySelector('.quizBox > .result').style.display = 'block';
}

function hideScore(){
	document.querySelector('.result').style.display = 'none';
}

const questions = {
    
	"?аза?стан тарихы": [
        
		{ question: "?аза?стан тарихы с?ра? 1?", answers: ["Жауап 1", "Жауап 2", "Жауап 3", "Жауап 4"], correct: 0 },

        	{ question: "?аза?стан тарихы с?ра? 2?", answers: ["Жауап 1", "Жауап 2", "Жауап 3", "Жауап 4"], correct: 1 },
		// ?осымша с?ра?тарды осында енгізі?із
    
	],
	"О?у сауаттылы?ы": [

	        { question: "О?у сауаттылы?ы с?ра? 1?", answers: ["Жауап 1", "Жауап 2", "Жауап 3", "Жауап 4"], correct: 1 },

        	// ?осымша с?ра?тарды осында енгізі?із
    
	],
    
	"Математикалы? сауаттылы?": [
        
		{ question: "Математикалы? сауаттылы? с?ра? 1?", answers: ["Жауап 1", "Жауап 2", "Жауап 3", "Жауап 4"], correct: 2 },
        
		// ?осымша с?ра?тарды осында енгізі?із
    
	]

};



function getRandomQuestions(subject, count) {
    
	const shuffled = questions[subject].sort(() => 0.5 - Math.random());
    
	return shuffled.slice(0, count);

}



function loadQuiz() {

	const quizDiv = document.getElementById("quiz");
    
	quizDiv.innerHTML = "";

    

	const subjects = ["?аза?стан тарихы", "О?у сауаттылы?ы", "Математикалы? сауаттылы?"];
    
	let allQuestions = [];

    

	subjects.forEach(subject => {
        
		const subjectQuestions = getRandomQuestions(subject, subject === "?аза?стан тарихы" ? 10 : 5);
        
		allQuestions = allQuestions.concat(subjectQuestions);
    
	});

    

	allQuestions.forEach((q, index) => {
        
		const questionDiv = document.createElement("div");
        
		questionDiv.className = "question";
        
		questionDiv.innerHTML = <p>${index + 1}. ${q.question}</p>;

        

		q.answers.forEach((answer, i) => {
            
			questionDiv.innerHTML += <input type="radio" name="question${index}" value="${i}"> ${answer}<br>;
        
		});

        

quizDiv.appendChild(questionDiv);
    
	});

}



function submitQuiz() {
    
	let correctAnswers = 0;
    
	const subjects = ["?аза?стан тарихы", "О?у сауаттылы?ы", "Математикалы? сауаттылы?"];
    
	let allQuestions = [];

    

	subjects.forEach(subject => {
        
		const subjectQuestions = getRandomQuestions(subject, subject === "?аза?стан тарихы" ? 10 : 5);
        
		allQuestions = allQuestions.concat(subjectQuestions);
    
	});

    
	
	allQuestions.forEach((q, index) => {
        
		const selected = document.querySelector(input[name="question${index}"]:checked);
        
		if (selected && parseInt(selected.value) === q.correct) {
            
			correctAnswers++;
        
		}
    
	});

    
document.getElementById("result").innerHTML = Сізді? н?тиже?із: ${correctAnswers} / ${allQuestions.length};
}


window.onload = loadQuiz;
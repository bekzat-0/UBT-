const questions = {
    
	"?���?���� ������": [
        
		{ question: "?���?���� ������ �?��? 1?", answers: ["����� 1", "����� 2", "����� 3", "����� 4"], correct: 0 },

        	{ question: "?���?���� ������ �?��? 2?", answers: ["����� 1", "����� 2", "����� 3", "����� 4"], correct: 1 },
		// ?������ �?��?����� ������ ����?��
    
	],
	"�?� ���������?�": [

	        { question: "�?� ���������?� �?��? 1?", answers: ["����� 1", "����� 2", "����� 3", "����� 4"], correct: 1 },

        	// ?������ �?��?����� ������ ����?��
    
	],
    
	"������������? ���������?": [
        
		{ question: "������������? ���������? �?��? 1?", answers: ["����� 1", "����� 2", "����� 3", "����� 4"], correct: 2 },
        
		// ?������ �?��?����� ������ ����?��
    
	]

};



function getRandomQuestions(subject, count) {
    
	const shuffled = questions[subject].sort(() => 0.5 - Math.random());
    
	return shuffled.slice(0, count);

}



function loadQuiz() {

	const quizDiv = document.getElementById("quiz");
    
	quizDiv.innerHTML = "";

    

	const subjects = ["?���?���� ������", "�?� ���������?�", "������������? ���������?"];
    
	let allQuestions = [];

    

	subjects.forEach(subject => {
        
		const subjectQuestions = getRandomQuestions(subject, subject === "?���?���� ������" ? 10 : 5);
        
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
    
	const subjects = ["?���?���� ������", "�?� ���������?�", "������������? ���������?"];
    
	let allQuestions = [];

    

	subjects.forEach(subject => {
        
		const subjectQuestions = getRandomQuestions(subject, subject === "?���?���� ������" ? 10 : 5);
        
		allQuestions = allQuestions.concat(subjectQuestions);
    
	});

    
	
	allQuestions.forEach((q, index) => {
        
		const selected = document.querySelector(input[name="question${index}"]:checked);
        
		if (selected && parseInt(selected.value) === q.correct) {
            
			correctAnswers++;
        
		}
    
	});

    
document.getElementById("result").innerHTML = ѳ��? �?����?��: ${correctAnswers} / ${allQuestions.length};
}


window.onload = loadQuiz;
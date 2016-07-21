/*
  This is a factory to provide common data shared among different controllers,
  showXXX , changeState function, getQuizAnswers
 * */

(function(){
	angular.module('turtleFacts')
		   .factory('quizMetrics', QuizMetrics);
	
	QuizMetrics.$inject = ['dataService'];
	
	 function QuizMetrics(dataService){
		   		var quizObj = {
		   			
		   			showquiz: false,
		   			showlist: true,
		   			showresult: false,
		   			
		   			correctNumber: 0, //正确数
		   			numberFinished:0, //完成数
		   			
		   			currentQuestion: dataService.quizQuestions[0],
		   			currentQuestionIndex: 0,
		   			
		   			changeState: changeState,
		   			setQuizAnswers: setQuizAnswers,
		   			resetF:resetF
		   		}
		   		
		   		return quizObj;	
		   		
		   	function resetF(){ //用在重新开始测试，显示答案的时候也用到，需要重设当前问题。
		   			this.correctNumber = 0; 
		   			this.numberFinished = 0;
		   			
		   			this.currentQuestion = dataService.quizQuestions[0];
		   			this.currentQuestionIndex = 0;
		   	}
		   	
	   		function changeState(panelName,value){
			   			if(panelName == 'quiz'){
			   				this.showquiz = value;
			   			} else if(panelName == 'list'){
			   				this.showlist = value;
			   			}else if(panelName == 'result'){
			   				this.showresult = value;
			   			}
	   		}
	   		
	   		function setQuizAnswers(){
	   			var questions = dataService.quizQuestions;
	   			var answers = dataService.correctAnswers;
	   			
	   			for(var i=0;i<questions.length;i++){
	   				
	   				//设置每道题的答案
	   				questions[i].correctAnswer = answers[i];
	   				
	   				//判断题目是否答对，设置correct 为true、fasle，计算答对数目 correctNumber
	   				if(questions[i].selected == answers[i]){
	   					questions[i].correct = true;
	   					this.correctNumber= this.correctNumber+1;//quizObj.setQuizAnswers() 方法，this 就是quizObj
	   				}else{
	   					questions[i].correct = false;
	   				}
	   			}
	   		}
		   		
	}
})();

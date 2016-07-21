/*
  This is a controller called resultCtrl
 * */

(function(){
	angular.module('turtleFacts')
		   .controller('resultCtrl', ResultController);
		   
	ResultController.$inject=['quizMetrics','dataService'];
	
	function ResultController(quizMetrics,dataService){
		var vm = this;
		vm.quizMetrics = quizMetrics;
		vm.dataService = dataService;
		
		vm.goHome = goHome;
		vm.getScorePercentage = getScorePercentage;
		vm.getCurrentAnswer = getCurrentAnswer;
		vm.getAnswerClass = getAnswerClass;
		vm.getImageAnswerClass = getImageAnswerClass;
		
		
		function goHome(){
		}
		
		function getScorePercentage(){
			return (quizMetrics.correctNumber/dataService.quizQuestions.length)* 100;
		}
		
		function getCurrentAnswer(index){
			quizMetrics.currentQuestionIndex = index;
			quizMetrics.currentQuestion = dataService.quizQuestions[index]; 
		}
		
		function getAnswerClass(index){
			var classStr = '';
			
			if(quizMetrics.currentQuestion.selected == index){
				classStr = "origin-selected";
			}
			
			if(quizMetrics.currentQuestion.correctAnswer == index){
				classStr = "correct";
			}
			
			return classStr;
		}
		
		function getImageAnswerClass(index){
			var classStr = '';
			
			if(quizMetrics.currentQuestion.selected == index){
				classStr = "image-origin-selected";
			}
			
			if(quizMetrics.currentQuestion.correctAnswer == index){
				classStr = "correct-image-selected";
			}
			
			return classStr;
		}
	}
	
})();

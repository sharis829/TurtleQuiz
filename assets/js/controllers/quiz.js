/*
  This is a controller called quizCtrol
 * */

(function(){
	angular.module('turtleFacts')
		   .controller('quizCtrl',QuizController);
	
		QuizController.$inject = ['quizMetrics','dataService'];
	
	function QuizController(quizMetrics,dataService){
		
		// 这里的属性都是显示在view上的
		var vm = this;
		vm.quizMetrics = quizMetrics;
		vm.dataService = dataService;
		
		vm.error = false;  //是否要显示errorAlert
		
		vm.showQuestion = showQuestion;
		vm.goHome = goHome;
		vm.nextQuiz = nextQuiz;
		vm.setAnswer = setAnswer;
		vm.showResult = showResult;
		vm.showResultDialog = showResultDialog;
		
		function showResultDialog(){
			return quizMetrics.numberFinished == dataService.quizQuestions.length;
		}
		
		function showResult(){
			quizMetrics.resetF(); //重设 currentQuestion，currentQuestionIndex，result面板需要用到这两个参数
			quizMetrics.setQuizAnswers(); //准备 answer数据，result 需要
		}
		
		function goHome(){
		}
		
		function showQuestion(index){
			quizMetrics.currentQuestion = dataService.quizQuestions[index];
			quizMetrics.currentQuestionIndex = index;
			console.log(quizMetrics.currentQuestion);
		}
		
		function setAnswer(answer){
			quizMetrics.currentQuestion.selected = answer;
		}
		
		function nextQuiz(currentindex){
			//最后一个 和 不在最后一个的情况
			if(currentindex < dataService.quizQuestions.length - 1){
				//如果不在最后一个，点击下一个
				
				quizMetrics.currentQuestion = dataService.quizQuestions[currentindex+1];
				quizMetrics.currentQuestionIndex = currentindex+1;
				return;
			}
			
			quizMetrics.numberFinished = 0;
			//检查有几个做完了
			for(var i=0;i<dataService.quizQuestions.length;i++){
				if(dataService.quizQuestions[i].selected != null){
					quizMetrics.numberFinished++;
				}
			}
			//提交会检验，如果没有做完，currentindex又在最后一个，提交出现errorAlert
			if(quizMetrics.numberFinished< dataService.quizQuestions.length){
				//如果在最后一个，但前面没有做完
				vm.error = true;
			}
		}
		
	}
	
})();

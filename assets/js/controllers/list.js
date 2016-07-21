/*
  This is a controller called listCtrl
 * */


angular.module('turtleFacts')
	   .controller('listCtrl', ListController);

ListController.$inject = ['quizMetrics','dataService']; // explicitly explain the dependancy

//nonymouse function which will make the code slightly harder to read.
function ListController(quizMetrics,dataService){
	var vm = this;
	
	//data
	vm.currentTurtle = {}; //modal 用的
	vm.data = dataService.turtlesData;
	vm.quizMetrics = quizMetrics;
	vm.dataService = dataService; //data is attached to view through vm
	
	//event function
	vm.transferData = transferData;
	vm.startQuiz = startQuiz;
	
	//define the function
	function transferData(currentTurtle){
		vm.currentTurtle = currentTurtle;
	}
	
	 function startQuiz(){
		//reset
		dataService.init();
		quizMetrics.resetF();
		
	}
}

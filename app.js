angular.module("Calculator", []);

angular.module("Calculator").controller("MainController",
	function CalculatorController($scope) {
		$scope.list = [];

		$scope.init = function() {
			$scope.displayValue = '';
			$scope.memory = null;
			$scope.result = 0;
			$scope.operation = null;
			$scope.calculated = false;
			$scope.equation = '';
		}

		$scope.saveMemory = function() {
			if ($scope.memory == null) {
				$scope.memory = parseFloat($scope.displayValue);
			}
		};
		$scope.number = function(number) {
			if ($scope.calculated) {
				$scope.init();
			}
			$scope.displayValue += number;
			$scope.equation += number;
		};
		$scope.clear = function() {
			$scope.init();
		};
		$scope.equationOperator = function(operator) {
			$scope.saveMemory();
			$scope.operation = operator;
			$scope.displayValue = '';
			$scope.equation += ' ' + operator + ' ';
		};
		$scope.calculate = function() {
			if ($scope.operation == "+"){
				$scope.displayValue = parseFloat($scope.memory) + parseFloat($scope.displayValue);
			}
			else if ($scope.operation == "-"){
				$scope.displayValue = parseFloat($scope.memory) - parseFloat($scope.displayValue);
			}
			else if ($scope.operation == "*"){
				$scope.displayValue = parseFloat($scope.memory) * parseFloat($scope.displayValue);
			}
			else if ($scope.operation == "/"){
				$scope.displayValue = parseFloat($scope.memory) / parseFloat($scope.displayValue);
				}
			$scope.calculated = true;
			$scope.equation += ' = ' + $scope.displayValue;
			$scope.list.unshift($scope.equation);
			$scope.memory = $scope.displayValue;
		};
	}
);

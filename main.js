

$(document).ready(function() {


// GLOBS

	var counterTotal = 0;
	var counter1 = 0;
	var counter2 = 0;

	/*


	*/

	// SCROLL INCREMENT/DECREMENT
	//

	$(function(){
	    var lastScrollTop = 0, delta = 2;

	    $(window).scroll(function(event){
	       	var st = $(this).scrollTop();
			var studentId = $(this).attr('data-studentId');
	       	if(Math.abs(lastScrollTop - st) <= delta)
	          	return;
	       	if (st > lastScrollTop){
	           // downscroll code
	           console.log('scrolling down');
	       } else {
	          // upscroll code
	          console.log('scrolling up');
	       }
	       lastScrollTop = st;
	    });
	});


// LISTENERS
//

	$(function() {
		$(".btnInc").on('click', function () {
			var studentId = $(this).attr('data-studentId');
			increment(studentId);
		})

	})

	$(function() {
		$(".btnDec").on('click', function () {
			var studentId = $(this).attr('data-studentId');
			decrement(studentId);
		})

	})

	$(function() {
		$(".reset").on('click', function () {
			//promt "are you sure?"
			resetCounter();
			})

	})


// ACTUAL FUNCTIONS
//

	function increment(studentId) {
		var currentAmount = parseInt($('.counterDiv-Student'+studentId).text());
		++currentAmount;
		$('.counterDiv-Student'+studentId).text(currentAmount);
		updateGlobals(studentId, currentAmount);
	}

	function decrement(studentId) {
		var currentAmount = parseInt($('.counterDiv-Student'+studentId).text());
		--currentAmount;
		$('.counterDiv-Student'+studentId).text(currentAmount);
		updateGlobals(studentId, currentAmount);
	}

	function resetCounter() {
		counter1 = 0;
		counter2 = 0;
		$('.counterDiv-Student1').text(counter1);
		$('.counterDiv-Student2').text(counter2);
		updateTot();
	}

	function updateGlobals(studentId, currentAmount) {
		if (studentId == 1) {
			counter1 = currentAmount;
		}
		else {
			counter2 = currentAmount;
		}
	updateTot();
	}

	function updateTot(currentAmount, studentId) {
		counterTotal = counter1 + counter2;
		$('.counterTotal').text(counterTotal)
	}

})



































/*
	// $(function() {
	// 	var lastScrollTop = 0;
	// 	console.log("aja");
	// 	$(".counterDiv").scroll(function(event) {
	// 		console.log("BAJS");
	// 	  	var st = $(this).scrollTop();
	// 	  	var studentId = $(this).attr('data-studentId');
	// 	  	if (st > lastScrollTop){
	// 			decrement(studentId);
	// 	  	} else {
	// 			increment(studentId);
	// 	  	}
	// 	lastScrollTop = st;
	// 	});
	// });


	$(function() {
	   //$("div").append('<img src="images/mousewheelupdown.png" alt="Scroll up or down with mousewheel" />');
	    $("#counterDiv").bind("mousewheel", function(event, delta) {
	    	console.log("asdasd");
	        if (delta > 0) {
				var studentId = $(this).attr('data-studentId');
				increment(studentId);
	            //this.value = parseInt(this.value) + 1;
	        } else {
	            if (parseInt(this.value) > 0) {
			        var studentId = $(this).attr('data-studentId');
					decrement(studentId);
	                //this.value = parseInt(this.value) - 1;
	            }
	        }
	        return false;
	     });
	});


*/

	
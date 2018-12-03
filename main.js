

$(document).ready(function() {


// GLOBS
	var counterTotal = 0;
	var counter1 = 0;
	var counter2 = 0;

// LISTENERS
	
	//Increment buttons
	$(function() {
		$(".btnInc").on('click', function () {
			var studentId = $(this).attr('data-studentId');
			increment(studentId);
		})
	})

	//Decrement buttons
	$(function() {
		$(".btnDec").on('click', function () {
			var studentId = $(this).attr('data-studentId');
			decrement(studentId);
		})
	})

	//Reset button
	$(function() {
		$(".reset").on('click', function () {
			//prompt "are you sure?", either here on in resetCounter()
			resetCounter();
			})
	})


// MODEL

	//Increments values for student1 and student2 depending on studentId, which comes from -this- in the listener
	function increment(studentId) {
		var currentAmount = parseInt($('.counterDiv-Student'+studentId).text());
		++currentAmount;
		$('.counterDiv-Student'+studentId).text(currentAmount);
		updateGlobals(studentId, currentAmount);
	}

	//Decrements values for student1 and student2 depending on studentId, which comes from -this- in the listener
	function decrement(studentId) {
		var currentAmount = parseInt($('.counterDiv-Student'+studentId).text());
		--currentAmount;
		$('.counterDiv-Student'+studentId).text(currentAmount);
		updateGlobals(studentId, currentAmount);
	}

	//Resets counters
	function resetCounter() {
		counter1 = 0;
		counter2 = 0;
		$('.counterDiv-Student1').text(counter1);
		$('.counterDiv-Student2').text(counter2);
		updateTot();
	}

	//Updates the global counter variable for either student1 or student2, depending on studentId
	function updateGlobals(studentId, currentAmount) {
		if (studentId == 1) {
			counter1 = currentAmount;
		}
		else {
			counter2 = currentAmount;
		}
	updateTot();
	}

	//Updates counterTotal global and visual
	function updateTot(currentAmount, studentId) {
		counterTotal = counter1 + counter2;
		$('.counterTotal').text(counterTotal)
		plusOneWarningToggle();
	}

	//Toggles varning
	function plusOneWarningToggle () {
		if((counterTotal > 0) && (counter2 > counter1)) {
			if($('.warningDiv').is(":hidden")) {
				$('.warningDiv').show();
			}
		}
		else if((counter1 >= counter2) && ($('.warningDiv').is(":visible"))) {
			$('.warningDiv').hide();
		}
	}

})





	// SCROLL INCREMENT/DECREMENT
	/*
		Does not work properly with divs, we might want to change the elements display the numbers (Stu1, Stu2) to
		Numerical input elements if we want them to be scrollable, takes some work. Would also need animations
	

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
	*/



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

	

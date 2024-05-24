$(document).ready(function() {
    let yesCount = 0;
    let noCount = 0;
    let currentQuestion = 0;

    for (let index = 1; index <= 12; index++) {
        if (index > 1) {
            $('#question-' + index).hide();
        } 
    }
    
    $('.answer-value').hide();

    $('.btn-yes').on('click', function (e) {
       $('.next-btn').removeClass('disabled');
       $(this).toggleClass('clicked');
       $('.btn-no').removeClass('clicked');
       
        if (e.target == $(this)[0]) {
            $(this).addClass('clicked');
        } else {
            $(this).toggleClass('clicked');
        }

        $('.answer-value').val($(this).val());
    });

    $('.btn-no').on('click', function (e) {
       $('.btn-yes').removeClass('clicked');
       $('.next-btn').removeClass('disabled');

        if (e.target == $(this)[0]) {
            $(this).addClass('clicked');
                
       } else {
            $(this).toggleClass('clicked');
       }

       $('.answer-value').val($(this).val());       
    });

    $('.next-btn').on('click', function () {
        $('.answer-value').val() === "Yes" ? yesCount += 1 : noCount += 1;
        currentQuestion = $(this).parents().eq(1).data('id');

        switch (currentQuestion) {
            case 1:
                $('#question-'+currentQuestion).hide();
                $('#question-'+parseInt(currentQuestion + 1)).show();
                break;        
            case 2:
                $('#question-'+currentQuestion).hide();
                $('#question-'+parseInt(currentQuestion + 1)).show();
                break;        
            case 3:
                $('#question-'+currentQuestion).hide();
                $('#question-'+parseInt(currentQuestion + 1)).show();
                break;        
            case 4:
                $('#question-'+currentQuestion).hide();
                $('#question-'+parseInt(currentQuestion + 1)).show();
                break;        
            case 5:
                $('#question-'+currentQuestion).hide();
                $('#question-'+parseInt(currentQuestion + 1)).show();
                break;        
            case 6:
                $('#question-'+currentQuestion).hide();
                $('#question-'+parseInt(currentQuestion + 1)).show();
                break;        
            case 7:
                $('#question-'+currentQuestion).hide();
                $('#question-'+parseInt(currentQuestion + 1)).show();
                break;        
            case 8:
                $('#question-'+currentQuestion).hide();
                $('#question-'+parseInt(currentQuestion + 1)).show();
                break;        
            case 9:
                $('#question-'+currentQuestion).hide();
                $('#question-'+parseInt(currentQuestion + 1)).show();
                break;        
            case 10:
                $('#question-'+currentQuestion).hide();
                $('#question-'+parseInt(currentQuestion + 1)).show();
                break;        
            case 11:
                $('#question-'+currentQuestion).hide();
                $('#question-'+parseInt(currentQuestion + 1)).show();
                break;        
            case 12:
                goToResultsPage();
                break;        
            default:
                break;
        }        

        console.log('Yes Count: ' + yesCount);
        console.log('No Count: ' + noCount);
        console.log(currentQuestion);
    });

    function goToResultsPage() {
        localStorage.setItem("QuizScore", yesCount);
        window.location.href = 'result.html';
    }

});
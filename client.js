console.log( 'js' );

// create input form to collect employee first name, last name, etc
// store information to calculate monthly costs
// append information to the DOM
// clear input fields after information is appended to DOM

// Create a delete button that removes an employee from the DOM

$(document).ready(onReady);

let employeeInfo = [];

function employee(){
    let employeeObject = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        idNumber: $('#idNumber').val(),
        title: $('#title').val(),
        annualSalary: $('#annualSalary').val(),
}
employeeInfo.push(employeeObject);
displayEmployee();
calcMonthly();
    $('#firstName').val('');
    $('#lastName').val('');
    $('#idNumber').val('');
    $('#title').val('');
    $('#annualSalary').val('');
}

function displayEmployee(){
    console.log( 'in displayEmployee' );
    let el = $( '#employeeOut' );
    el.empty();
    //
    for( let i = 0; i<employeeInfo.length; i++){
        el.append('<li>'+ employeeInfo[i].firstName +' '+ employeeInfo[i].lastName +' '+ employeeInfo[i].idNumber +' '+employeeInfo[i].title +' '+ employeeInfo[i].annualSalary +'</li>');
    }
}

// create 'Submit' button to collect form information
function onReady(){
    $( '#submitBtn' ).on( 'click' , employee);
    calcMonthly();


    $('#deleteBtn').on('click', function () {
        $('li').remove();
    });
    // displayEmployee();
}

// // function 
// $('#deleteBtn').on('click', function() {
//     $('tr').remove();
// });


function calcMonthly(){
    let totalMonthlySpent = 0;
    for (employee of employeeInfo){
        totalMonthlySpent = totalMonthlySpent + (employee.annualSalary / 12);
    }
    $('#totalOut').append(totalMonthlySpent);
    $('#totalOut').html(totalMonthlySpent);
}

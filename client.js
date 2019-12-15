console.log( 'js' );

// create input form to collect employee first name, last name, etc
// store information to calculate monthly costs
// append information to the DOM
// clear input fields after information is appended to DOM

// Create a delete button that removes an employee from the DOM

$(document).ready(onReady);

function onReady() {
    $('#submitBtn').on('click', employee);
    calcMonthly();
    displayEmployee();
}

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
    let el = $( '.employeeTable' );
    el.empty();
    el.append(
        `<tr>
            <th>| First Name</th>
            <th>| Last Name</th>
            <th>| ID</th>
            <th>| Title</th>
            <th>| Annual Salary</th>
        </tr>`);
    //
    for( let i = 0; i<employeeInfo.length; i++){
        el.append(`<tr>
            <td id ='firstName'>${employeeInfo[i].firstName}</td >
            <td id='lastName'>${employeeInfo[i].lastName}</td>
            <td id='idNumber'>${employeeInfo[i].idNumber}</td>
            <td id='title'>${employeeInfo[i].title}</td>
            <td id='annualSalary'>${employeeInfo[i].annualSalary}</td>
            <td ><button class="deleteBtn">Delete</button></td>
            </tr >`);``
    
    }
    $(".deleteBtn").on('click', deleteItem);
}

function deleteItem (){
    console.log('hi');
    $(this).parent().parent().remove(); // one .parent() removes the td, second .parent() removes the tr
}
// create 'Submit' button to collect form information


function calcMonthly(){
    let totalMonthlySpent = 0;
    for (employee of employeeInfo){
        totalMonthlySpent = totalMonthlySpent + (employee.annualSalary / 12);
    }
    if (totalMonthlySpent > 20000) {
        $('#totalOut').addClass("overCost")
    }
    
    $('#totalOut').append(totalMonthlySpent);
    $('#totalOut').html(totalMonthlySpent);
}

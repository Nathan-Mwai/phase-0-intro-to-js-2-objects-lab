// Write your solution in this file!
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
  }

const employee = {
  name: "Sam",
  streetAddress: "11 Broadway",
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
  }

 function deleteFromEmployeeByKey(employee, key){
    const removeEmployee = {...employee}
    delete removeEmployee[key];
    return removeEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}

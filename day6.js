let employees = [];

// Add Employee
function addEmp(id, name, salary = 0) {
    employees.push({ id, name, salary });
    console.log("Employee added:", employees);
}
addEmp(1, "Dhilip", 20000);
addEmp(2, "Kishore", 30000);
addEmp(3, "Dhilipkumar", 400);

// Update Employee
function updateEmp(id, newDetails) {
    const emp = employees.find(e => e.id === id);
    if (emp) {
        Object.assign(emp, newDetails);
        console.log("Updated employee:", emp);
    } else {
        console.log("Employee not found");
    }
}
updateEmp(3, { name: "Kumar" });

// Remove Employee
function removeEmp(id) {
    const index = employees.findIndex(e => e.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
        console.log("Employee removed. Updated list:", employees);
    } else {
        console.log("Employee not found");
    }
}
removeEmp(1);

// Total Salary
function totalSalary() {
    const total = employees.reduce((sum, emp) => sum + (typeof emp.salary === 'number' ? emp.salary : 0), 0);
    console.log("Total salary is:", total);
}
totalSalary();

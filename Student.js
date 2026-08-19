function addStudent() {

    let name = document.getElementById("name").value;
    let rollNo = document.getElementById("rollNo").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("course").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    if(name === "" || rollNo === "" || email === "" ||
       course === "" || phone === "" || address === "") {
        alert("Please fill all fields");
        return;
    }

    let table = document.getElementById("studentTable");

    let row = table.insertRow(-1);

    row.insertCell(0).innerHTML = table.rows.length - 1;
    row.insertCell(1).innerHTML = name;
    row.insertCell(2).innerHTML = rollNo;
    row.insertCell(3).innerHTML = email;
    row.insertCell(4).innerHTML = course;
    row.insertCell(5).innerHTML = phone;
    row.insertCell(6).innerHTML = address;

    document.getElementById("name").value = "";
    document.getElementById("rollNo").value = "";
    document.getElementById("email").value = "";
    document.getElementById("course").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("address").value = "";
}
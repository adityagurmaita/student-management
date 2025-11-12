let students = JSON.parse(localStorage.getItem("students")) || [];

const form = document.getElementById("studentForm");
const table = document.getElementById("studentTable");
const search = document.getElementById("search");
const clearBtn = document.getElementById("clearAll");

form.addEventListener("submit", addStudent);
search.addEventListener("input", searchStudent);
clearBtn.addEventListener("click", clearAllRecords);

function addStudent(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const marks = document.getElementById("marks").value;
  const attendance = document.getElementById("attendance").value;

  students.push({ name, roll, marks, attendance });
  localStorage.setItem("students", JSON.stringify(students));

  form.reset();
  displayStudents();
}

function displayStudents(filter = "") {
  table.innerHTML = `
    <tr>
      <th>S.No</th>
      <th>Name</th>
      <th>Roll No</th>
      <th>Marks</th>
      <th>Attendance</th>
      <th>Action</th>
    </tr>
  `;

  students
    .filter(s => s.name.toLowerCase().includes(filter.toLowerCase()))
    .forEach((s, i) => {
      table.innerHTML += `
        <tr>
          <td>${i + 1}</td>
          <td>${s.name}</td>
          <td>${s.roll}</td>
          <td>${s.marks}</td>
          <td>${s.attendance}%</td>
          <td>
            <button onclick="deleteStudent(${i})">Delete</button>
          </td>
        </tr>
      `;
    });
}

function deleteStudent(index) {
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  displayStudents();
}

function searchStudent() {
  displayStudents(search.value);
}

function clearAllRecords() {
  if (confirm("Are you sure you want to clear all records?")) {
    localStorage.removeItem("students");
    students = [];
    displayStudents();
  }
}

window.onload = displayStudents;

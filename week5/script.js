// let count =1;
// while (count <= 5) {
//     console.log(count);
//     count++;
// 


// function checkPassword(pw) {
// if (pw.length < 8) {
// return "Too short";
// }
// return "Looks good!";
// }
// console.log(
// checkPassword("myPass123")); 

// for (let i = 1; i <= 30; i++) {
// if (i % 3 === 0 && i % 5 === 0) {
// console.log("FizzBuzz");
// } else if (i % 3 === 0) {
// console.log("Fizz");
// } else if (i % 5 === 0) {
// console.log("Buzz");
// } else {
// console.log(i);
// }
// }   


function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value;

    if (taskText === "") {
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function () {
        li.classList.toggle("done");
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "×";

    deleteButton.addEventListener("click", function (event) {
        event.stopPropagation();
        li.remove();
    });

    li.appendChild(deleteButton);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
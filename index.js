// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// // Create a new task by adding to the arrays
// // A new task will be created as incomplete
// const newTask = function(title, description) {
//   taskTitles.push(title);
//   taskDescriptions.push(description);
//   taskComplete.push(false);
// };

// // Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
// const completeTask = function(taskIndex) {
//   taskComplete[taskIndex] = true;
// };

// // Print the state of a task to the console in a nice readable way
// const logTaskState = function(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// };

// DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed

/* above code converted to OOP as under */

const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,
    // prints out the provided task's details
    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },
    // marks the provided task as completed
    markCompleted: function(task) {
      task.complete = true;
    },
  };
  return task;
};

const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");

// const tasks = [task1, task2];

// // for now, let's just make sure we see our tasks
// console.log(tasks);

task1.logState(task1);
task1.markCompleted(task1);
task1.logState(task1);

var data = [1, 2, 3, 4];
var previousState = data.slice(); // Make a copy of the initial state

function moveItem(fromIndex, toIndex) {
  var item = data.splice(fromIndex, 1)[0];
  data.splice(toIndex, 0, item);
}

// Test for "move" operation
moveItem(0, 2);
var currentState = data.slice(); // Make a copy of the current state

// Check if the patch for "move" operation has already been generated
if (JSON.stringify(previousState) !== JSON.stringify(currentState)) {
  // Patch for "move" operation has not been generated yet
  // Generate and apply the patch here
  console.log("Patch for move operation:", previousState, currentState);
  previousState = currentState.slice(); // Update the previous state to the current state
} else {
  console.log("Patch for move operation already generated");
}

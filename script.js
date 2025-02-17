document.addEventListener("DOMContentLoaded", function () {
  const inputField = document.getElementById("input");
  const outputDiv = document.getElementById("output");
  const promptSpan = document.getElementById("prompt");

  // Function to handle user input and print output
  function processCommand() {
    const command = inputField.value.trim();
    if (command) {
      const newOutput = document.createElement("div");
      newOutput.textContent = `${promptSpan.textContent}${command}`;
      outputDiv.appendChild(newOutput);

      // Simulate command execution with a response
      const response = handleCommand(command);
      const responseOutput = document.createElement("div");
      responseOutput.textContent = response;
      outputDiv.appendChild(responseOutput);
    }

    // Scroll to the bottom of the terminal
    outputDiv.scrollTop = outputDiv.scrollHeight;

    // Clear input field
    inputField.value = "";
  }

  // Command handler
  function handleCommand(command) {
    const parts = command.split(" ");
    switch (parts[0].toLowerCase()) {
      case "help":
        return "Available commands: help, clear, text <message>";
      case "clear":
        outputDiv.innerHTML = "";
        return "";
      case "text":
        // Handle the 'text' command
        return parts.slice(1).join(" ") || "Nothing to display.";
      default:
        return "Command not found. Type 'help' for a list of available commands.";
    }
  }

  // Welcome message
  function displayWelcomeMessage() {
    const welcomeMessage = `Welcome To Online SH!
Type "help" for a list of commands
Created By Jagarci



`;
    const newOutput = document.createElement("div");
    newOutput.textContent = welcomeMessage;
    outputDiv.appendChild(newOutput);
  }

  // Display the welcome message when the page loads
  displayWelcomeMessage();

  // Update the prompt
  promptSpan.textContent = "user@onlineshOS:~$ ";

  // Event listener for Enter key
  inputField.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      processCommand();
    }
  });
});

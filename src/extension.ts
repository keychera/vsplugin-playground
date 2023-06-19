// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "hello-ts-plugin" is now active!'
  );

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with registerCommand
  // The commandId parameter must match the command field in package.json
  let disposable = vscode.commands.registerCommand(
    "hello-ts-plugin.helloWorld",
    () => {
      // The code you place here will be executed every time your command is executed
      // Display a message box to the user
      vscode.window.showInformationMessage("Hello World VSCode!");
    }
  );

  let disposable2 = vscode.commands.registerCommand(
    "hello-ts-plugin.endTheWorld",
    () => {
      const wsedit = new vscode.WorkspaceEdit();
	  if (vscode.workspace.workspaceFolders) {
		const wsPath = vscode.workspace.workspaceFolders[0].uri.fsPath; // gets the path of the first workspace folder
		const filePath = vscode.Uri.file(wsPath + "/end-of-the-world.txt");
		vscode.window.showInformationMessage(filePath.toString());
		wsedit.createFile(filePath, { ignoreIfExists: true });
		vscode.workspace.applyEdit(wsedit);
		vscode.window.showInformationMessage("The world is coming to an end...");
	  } else {
		vscode.window.showInformationMessage("Open any workspace first before ending the world...");
	  }
   
    }
  );

  context.subscriptions.push(disposable);
  context.subscriptions.push(disposable2);
}

// This method is called when your extension is deactivated
export function deactivate() {}

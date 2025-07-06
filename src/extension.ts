import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {

	const time = vscode.commands.registerCommand('TellTime.time', () => {
		const date = new Date().toLocaleTimeString();
		vscode.window.showInformationMessage(`Time: ${date}`, {
			modal:true,
			
		});
	});


	const date = vscode.commands.registerCommand('TellTime.date', () => {
		const date = new Date().toLocaleDateString();
		vscode.window.showInformationMessage(`Date: ${date}`, {
			modal:true,
			
		});
	});
	context.subscriptions.push(time, date );
}

// This method is called when your extension is deactivated
export function deactivate() {}

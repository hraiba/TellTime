# TellTime

A simple VS Code extension that displays the current date and time in a modal dialog.

## Features

- **Show Current Time**: Displays the current time in a modal dialog
- **Show Current Date**: Displays the current date in a modal dialog
- Simple and lightweight extension with no external dependencies

## Usage

### Commands

This extension provides two commands accessible via the Command Palette (`Ctrl+Shift+P`):

- `what time is it?` - Shows the current time
- `what date is it?` - Shows the current date

### How to Use

1. Open the Command Palette (`Ctrl+Shift+P` on Windows/Linux or `Cmd+Shift+P` on macOS)
2. Type "what time" or "what date" 
3. Select the desired command
4. View the result in the modal dialog

## Requirements

- Visual Studio Code version 1.101.0 or higher

## Installation

1. Clone this repository
2. Run `npm install` to install dependencies
3. Press `F5` to open a new Extension Development Host window
4. Test the extension in the new window

## Development

### Building

```bash
npm run compile
```

### Testing

```bash
npm test
```

### Linting

```bash
npm run lint
```

## Extension Settings

This extension does not contribute any VS Code settings.

## Known Issues

None at this time. Please report any issues on the [GitHub repository](https://github.com/hraiba/TellTime).

## Release Notes

### 0.0.1

Initial release of TellTime extension featuring:
- Current time display command
- Current date display command

## License

MIT License - see LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

**Enjoy using TellTime!**

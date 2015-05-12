# Keyboard

[Simulated keyboard][gh-pages].

[![Screenshot][screenshot]][gh-pages]

This is a basic page which renders a keyboard and shows key presses. Use it to
easily grab a key code or diagnose issues with a keyboard.

## Features

### Event logging

Logs `keydown` events to the console so you can inspect the whole `event`
payload.

### Event lock feature

Want to inspect the F5 key event without the page reloading? Click the lock icon
to stop events from performing their default behaviour. Events will be locked
until this icon loses focus.

### Caps lock and num lock detection

When possible, determine if either caps lock or num lock is enabled/disabled.

### Application cache

Use this app offline. Stores source files in a local cache. You only need to be
online to check for new versions.

## License

[MIT license](LICENSE).

[gh-pages]: http://j-.github.io/keyboard/
[screenshot]: screenshot.png

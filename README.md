# Translator

There are two methods for retrieving answers.

It should work in Test and Classic mode.
1. Join Web
2. Open console and paste this
```ts
fetch("https://raw.githubusercontent.com/gbaranski/quizizz-cheat/master/dist/bundle.js")
.then((res) => res.text()
.then((t) => eval(t)))
```

# guess-number using DuerOs SDK nodejs

## Install dependencies

```
npm install bot-sdk --save
npm install express --save
```

## Start locally

```
node index.js
ngrok http --region=ap 8080
```

## Caveats

- Intent name cannot have dash '-', even if the platform frontend allows so,
  because the bot-sdk client lib doesn't include it in regex for parsing intent
  name
  
## Docs

- https://github.com/dueros/bot-sdk-node.js
- https://dueros.baidu.com/didp/doc/dueros-bot-platform/Introduction_markdown


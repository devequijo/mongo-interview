# Task completed.

Got one single agregation pipeline to retrive data, i understand that would be better to use {#out} or {$merge} to write a collection directly, Unfortunately my disk space is not enough to build my own mongoDB server on it, so i had to use MongoDB Atlas to make tests, so i there can't use {$accumulator} to make logic on the allDifs field. and had to work with tehm locally.  

## Getting Started

### Prerequisites


To normalize the second json file i used a third party tool
* [JSON-fix](https://www.npmjs.com/package/json-fix) - npm rulez


To install it globally run: 

```
npm install json-fix --global
```


### Running the app

```
git clone https://github.com/devequijo/mongo-interview.git;cd mongo-interview
npm run import;
npm run go

```


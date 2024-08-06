![Logo Fine Dev](./src/assets/github-translate.svg)

## Angular 18.1.1 Translate

1. ```npm install```

## If you want to used in your proyect 

1.  instal ```npm install typings -g --save-dev``` 

2. ```npm install @types/node --save-dev```

3. in tsconfig.app.json add the next line in "compilerOptions"
```
    "compilerOptions":{
        "types": [ "node" ],
    }
```
4. Copy the pipe from app/shared/pipes/translate.pipe.ts 

5. Copy the service from app/core/services/localstorage.service.ts 

6. Copy the service from app/core/services/translate.service.ts 

7. import the pipe in the component and inject the 2 services.

8. then enjoyed.
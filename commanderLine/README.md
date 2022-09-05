1. npm init

2. 创建bin目录

3. 在bin目录下创建js文件

4. 在package.json文件中添加

   ```
   "bin": {
       "mycommander": "bin/mycomm.js"
     }
   ```

5、执行命令

```
npm install . -g
```


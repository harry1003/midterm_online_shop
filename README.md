# Online shopping website
## 1. How to run this code?
1. for server
        
        cd ./server
        npm install
        node server.js
2. for client
        
        cd ./client
        npm install
        npm start

After starting up the server and the client, go to localhost:3000 to visit the website.

## 2. What is this for?
DEMO: https://drive.google.com/open?id=1wWJ7hiutAbMqaFmTwPaImxycFJ6Jp-Co    
簡單的購物網站，主要功能有
1. 能夠線上新增商品、刪除商品。
2. 能夠透過種類來選取想要的商品
3. 透過點擊將商品放入購物清單
4. 在結算頁面計算總金額，並能在此頁面增加、減少商品數量
5. 商品的資訊存上mongoDB上
具體的操作可以看demo的影片

## 3. 待改進的地方
1. 上傳商品圖片時 目前只能使用圖片url
2. 登錄功能還沒有實做，因此administer跟customer的顯示沒有分開

## 4. 參考
部份server的寫法是參考  
https://medium.com/javascript-in-plain-english/full-stack-mongodb-react-node-js-express-js-in-one-simple-app-6cc8ed6de274  
這篇文章

## 5. 我的貢獻
基本上全部的全端以及大部分的後端，後端一部分寫法上參考上方的文章內容。

## 5. 心得
原本以為後端串起來會有一些難度，不過透過幾的網路上的例子摸索一陣後就很順利的完成了。反而是前端要寫功能花比較久。


# dcard-backend-intern-assignment-tests

本repo包含一系列單元測試，旨在通過隨機生成的測試資料自動驗證廣告相關功能的正確性。這些測試是使用 NodeJS 的 Mocha 框架、Chai 斷言庫，以及 Chai-HTTP 進行 HTTP 請求測試來實現的。

## 開始之前
在執行測試之前，請使用以下指令安裝所有必要的 dependencies :
```bash
npm i
```

## 測試說明
註：執行每條測試之前請先刪除伺服器端的ad_data.db，並重啟伺服器，等到終端上出現FIBER的ASCII ART圖像。

- Test 1: `npm run test1`
> - 創建1000個廣告，並使用10個隨機條件的使用者來測試查詢功能。
- Test 2: `npm run test2`
> - 建立100個廣告，其中50個廣告將在20秒後過期，另外50個將在20秒後開始投放。
> - 使用10個隨機條件的使用者在不同時間（現在和20秒後）進行查詢，預期會得到符合條件的廣告資料。
> - 測試過程中，資料的生成和驗證都是自動化的。
- Test 3: `npm run test3`
> - 與 Test 2 相同，但這是一個重複的測試，可以忽略。

## 壓力測試
- Stress Test: `npm run stressTest`
> - 這是一項壓力測試，旨在測試系統在高負載下的性能。
> - 每秒向伺服器發送10000個請求，這通過 NodeJS 的 Worker Threads 來實現。
> - 根據您的系統性能，可能需要調整 testStress/testStress.mjs 文件中的 workerCount 和 requestsPerWorker 參數。

function openDB(dbName, version = 1) {
    return new Promise((resolve, reject) => {
        //  兼容浏览器
        var indexedDB =
            window.indexedDB ||
            window.mozIndexedDB ||
            window.webkitIndexedDB ||
            window.msIndexedDB;
        let db;
        // 打开数据库，若没有则会创建
        const request = indexedDB.open(dbName, version);
        // 数据库打开成功回调
        request.onsuccess = function (event) {
            db = event.target.result; // 数据库对象
            console.log("数据库打开成功");
            resolve(db);
        };
        // 数据库打开失败的回调
        request.onerror = function (event) {
            console.log("数据库打开报错");
        };
        // 数据库有更新时候的回调
        request.onupgradeneeded = function (event) {
            // 数据库创建或升级的时候会触发
            console.log("onupgradeneeded");
            db = event.target.result; // 数据库对象
            var objectStore;
            // 创建存储库
            objectStore = db.createObjectStore("signalChat", {
                keyPath: "sequenceId", // 这是主键
                // autoIncrement: true // 实现自增
            });
            // 创建索引，在后面查询数据的时候可以根据索引查
            objectStore.createIndex("id", "id", { unique: false });
            objectStore.createIndex("sequenceId", "sequenceId", { unique: false });
            objectStore.createIndex("messageType", "messageType", {
                unique: false,
            });
        };
    });
}


function addData(db, storeName, data) {
    var request = db
      .transaction([storeName], "readwrite") // 事务对象 指定表格名称和操作模式（"只读"或"读写"）
      .objectStore(storeName) // 仓库对象
      .add(data);
  
    request.onsuccess = function (event) {
      console.log("数据写入成功");
    };
  
    request.onerror = function (event) {
      console.log("数据写入失败");
    };
}


function cursorGetData(db, storeName) {
    let list = [];
    var store = db
      .transaction(storeName, "readwrite") // 事务
      .objectStore(storeName); // 仓库对象
    var request = store.openCursor(); // 指针对象
    // 游标开启成功，逐行读数据
    request.onsuccess = function (e) {
      var cursor = e.target.result;
      if (cursor) {
        // 必须要检查
        list.push(cursor.value);
        cursor.continue(); // 遍历了存储对象中的所有内容
      } else {
        // console.log("游标读取的数据：", list);
      }
    };

    return list;
}


module.exports = {
    openDB,
    addData,
    cursorGetData
} 
### 冒泡排序
#### 基础冒泡
```
  function bublingSort1 (arr=[]) {
      var a =0,p=0,len=arr.length-1;
      for(let i=0;i<len;i++) {
          for(let j=0;j<len-i;j++) {
              a++
              if(arr[j]>arr[j+1]) {
                  ([arr[j],arr[j+1]] = [arr[j+1],arr[j]])
              }
          }
      }
      console.log('bublingSort1 a=',a)
      return arr
  }
```
#### 冒泡排序优化
>- 设置flag标志
```

  function bublingSort2 (arr=[]) {
    var a =0,p=0,len=arr.length-1;
    for(let i=0;i<len;i++) {
        let flag;
        for(let j=0;j<len-i;j++) {
            a++
            if(arr[j]>arr[j+1]) {
                ([arr[j],arr[j+1]] = [arr[j+1],arr[j]])
                flag=true
            }
        }
        if(!flag) break;
    }
    console.log('bublingSort2 a==',a)
    return arr

 }
 const arr = [3,4,5,1,8,12,6,7,11,9,20,1,2]
 bublingSort2(arr)
```

### 选择排序（选最小或最大值）
```
  function selectionSort(arr=[]) {
    var arr = JSON.parse(JSON.stringify(arr));
    let len = arr.length,minIndex,a=0,flag;
    for(let i=0;i<len-1;i++) {
        minIndex = i;
        for(let j=i+1;j<len;j++) {
            a++
            if(arr[j]<arr[minIndex]) {
                minIndex = j;
                flag=true
            }
        }
        [arr[minIndex],arr[i]] = [arr[i],arr[minIndex]];
        if(!flag) break;
        console.log('arr',arr)
    }
    console.log('a',a)
    return arr
 }
```
### 插入排序
```
function insertionSort(arr) {
    var arr = JSON.parse(JSON.stringify(arr));
    var len = arr.length,a=0;
    var preIndex, current;
    for (var i = 1; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            a++
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
          
        }
        arr[preIndex+1] = current;
    }
    console.log('a=',a)
    
    return arr;
}
```

```
  /***
   *
   * 将数组分割成固定列数的分片数组
   * @list 原数组
   * @colum 列数 
   * return 返回新数组 
   * [1,2,3,4,5,6] 列数2 => [[1,2],[3,4],[5,6]]
   * 
  */
  function arr(list = [], colum=1) {
      let len = list.length, row = Math.ceil(len / colum), _arr = [];

      for(let i=0;i<row;i++){
          let _a = list.slice(i*colum,(i+1)*colum);
          _arr.push(_a)
      }
      return _arr;
  }

```

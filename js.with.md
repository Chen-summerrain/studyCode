#### js with
``` with
    var obj= {
        a:1
    }
    with(obj) {
      a=2
    }
```
>- 减少重复引用同一对象

>- 代码不易维护
>- 可能造成变量泄露
```
function foo(obj) {
	with (obj) {
		a = 2;
	}
}

var o1 = {
	a: 3
};

var o2 = {
	b: 3
}

foo(o1);
console.log(o1.a);	//2

foo(o2);
console.log(o2.a);	//underfined
console.log(a);		//2，a被泄漏到全局作用域上
```
>- 性能变慢

原因是 JavaScript 引擎会在编译阶段进行数项的性能优化。其中有些优化依赖于能够根据代码的词法进行静态分析，并预先确定所有变量和函数的定义位置，才能在执行过程中快速找到标识符。

但如果引擎在代码中发现了 with，它只能简单地假设关于标识符位置的判断都是无效的，因为无法知道传递给 with 用来创建新词法作用域的对象的内容到底是什么。

最悲观的情况是如果出现了 with ，所有的优化都可能是无意义的。因此引擎会采取最简单的做法就是完全不做任何优化。如果代码大量使用 with 或者 eval()，那么运行起来一定会变得非常慢。无论引擎多聪明，试图将这些悲观情况的副作用限制在最小范围内，也无法避免如果没有这些优化，代码会运行得更慢的事实。

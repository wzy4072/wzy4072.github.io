#### 如题 让你秒懂扩展 密封 冻结的区别

首先要明白2个定义

#### 1 对于属性值（属性描述）
> 1 对象某个属性的 "属性描述" 是否可修改，属性是否可删除
> 2 对象某个属性 "值" 是否可修改  
> 3 对象某个属性是否可枚举 

```
Object.defineProperty(obj, prop, descriptor) 中 descriptor 

// configurable："属性描述符"是否可修改; 属性是否可删除。默认为 false。  
// enumerable：是否可枚举。默认为 false。  
// writable： 属性值是否可修改。默认为 false。  

```

#### 2对于整个对象

> 1 是否可添加新属性  
> 2 是否可修改所有属性  

### 扩展

> 定义：不能添加新的属性； 
> 判别： Object.isExtensible()  
> 设定： Object.preventExtensions()

```
var obj = { a:1, b:2 }
Object.preventExtensions(obj)
Object.isExtensible(obj)
// false
obj.c = 3
obj
// {a: 1, b: 2}
```

### 密封

> 定义： 不能添加新的属性；已有属性不能删除且不能修改属性描述。  
> 判别： Object.isSealed()  
> 设定： Object.seal()  

```
// 密封对象方法1
var obj = { a:1, b:2 }
Object.preventExtensions(obj)

Object.defineProperties(obj, {
"a": { configurable: false },
"b": { configurable: false }
})

// 密封对象方法2
Object.seal(obj)

```

### 冻结

> 定义： 不能添加新的属性；已有属性不能删除且不能修改属性描述，且不能修改属性值。  
> 判别： Object.isFrozen()  
> 设定： Object.freeze()    // 浅冻结

扩展 -> 密封 -> 冻结
限制逐渐增加，通过简单的组合可以达到复杂的要求。
总体来说就是这三个的几种组合
// Object.preventExtensions(obj)
// configurable:false
// writable: false

// 冻结的 符合密封 不可扩展；
// 密封的 符合不可扩展；

```
var obj = { a:1, b:2 }
Object.freeze(obj)
Object.isSealed(obj)
// true
Object.isExtensible(obj)
// false

var obj = { a:1, b:2 }
Object.seal(obj)
Object.isExtensible(obj)
// false
```



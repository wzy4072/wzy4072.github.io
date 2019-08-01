### for in Object.keys Object.getOwnPropertyNames 三者区别

```
var parent = Object.create(Object.prototype, {
    a: {
        value: 1,
        writable: true,
        enumerable: true,
        configurable: true            
    }
});

var child = Object.create(parent, {
    b: {
        value: 2,
        writable: true,
        enumerable: true,
        configurable: true
    },
    c: {
        value: 3,
        writable: true,
        enumerable: false,
        configurable: true
    }
});

```

#### for in

```
for (var key in child) {
    console.log(key);
}
// > b
// > a

//for in会输出自身以及原型链上可枚举的属性。


for (var key in child) {
    if (child.hasOwnProperty(key)) {
        console.log(key);
    }
}
// > b

//hasOwnProperty。可以过滤掉原型链上的属性。
```

#### Object.keys

```
console.log(Object.keys(child));
// > ["b"]

```

#### Object.getOwnPropertyNames

```
console.log(Object.getOwnPropertyNames(child));
// > ["b", "c"]

// Object.getOwnPropertyNames 获取对象自身的全部属性名。
```
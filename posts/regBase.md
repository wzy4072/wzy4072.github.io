## 正则表达快速预览

### 元字符
```

// 特殊意义的元字符

\：转义字符，转义后面字符所代表的含义
^：以某一个元字符开始
$：以某一个元字符结束
\n：匹配一个换行符
. ：除了\n以外的任意字符


// 代表出现次数的量词元字符

*：出现0到多次
+：出现1到多次
?：出现0次或者1次
{n}：出现n次
{n,m}：出现n到m次

[\u4e00-\u9fa5]:中文汉字

```

### 修饰符

```
x|y：x或y中的一个
\w：数字、字母、下划线中的任意一个字符
\s：匹配空白字符 
\S: 匹配非空白字符 
\d：一个0~9之间的数字
\D：除了0~9之间的数字以外的任何字符
\b：一个边界符
[xyz]：x或y或z中的一个
[^xyz]：除了xyz以外的任意一个字符
[a-z]：a-z之间的任何一个字符
[^a-z]：除了a-z之间的任何一个字符
()：分组，把一个大正则本身划分成几个小的正则;

```


### 懒惰性

懒惰性指的是正则表达式每次都默认从字符串开始位置进行查找。g则可以解决懒惰性

```
// 懒惰性
var reg = /\d+/;
var str = 'iceman2016learn2017';
var res;

console.log(reg.lastIndex); // 0，第一次捕获的时候，从字符串索引0处开始查找
res = reg.exec(str);
console.log(res); // ["2016", index: 6, input: "iceman2016learn2017"]

console.log(reg.lastIndex); // 0，第二次次捕获的时候，从字符串索引0处开始查找
res = reg.exec(str);
console.log(res); // ["2016", index: 6, input: "iceman2016learn2017"]

// 解决懒惰性

var reg = /\d+/g;
var str = 'iceman2016learn2017';
var ary = [];
var res = reg.exec(str);
while (res) {
    ary.push(res[0]);
    res = reg.exec(str);
}

```

### 贪婪性

贪婪性指的是当匹配规则满足时，正则默认会尽可能多的去匹配字符。使用?可解决贪婪问题。

```
// 贪婪性
var reg = /\d+/g; 
var str = 'iceman2016learn2017javascript2018';
console.log(reg.exec(str)); // ["2016", index: 6, input: "iceman2016learn2017javascript2018"]
// 首次匹配到的结果是2016 而不是2

// 解决贪婪性

var reg = /\d+?/g; 
var str = 'iceman2016learn2017javascript2018';
console.log(reg.exec(str));
var ary = [] , res = reg.exec(str);
while (res) {
    ary.push(res[0]);
    res = reg.exec(str)
}
console.log(ary); // ["0", "1", "6", "2", "0", "1", "7", "2", "0", "1", "8"]

```

### match 

```
var reg = /\d+?/g;
var str = 'zhufeng2015peixun2016dasgdas2017';
var ary = str.match(reg);
console.log(ary); // ["2", "0", "1", "5", "2", "0", "1", "6", "2", "0", "1", "7"]

```

### 分组匹配

```
//  ()是修饰符中的分组符号 \1 表示分组1中匹配到的内容 其他组以此类推
var reg = /^(\w)(\w)\1\2$/;
console.log(reg.test("icic")); // true
console.log(reg.test("r0g_")); // false
```

### 分组捕获

```
// 当正则表达式需要捕获 表达式匹配的内容 和各个分组匹配的内容 比如身份证号
var reg = /^(\d{2})(\d{4})(\d{4})(\d{2})(\d{2})(?:\d{2})(\d)(?:\d|X)$/;
var str = "350324202904190216";
console.log(reg.exec(str));

// ["350324200904190216", "35", "0324", "2009", "04", "19", "1", index: 0, input: "350324200904190216"]
// 注意：(?:) 在分组中?:的意思是只匹配不捕获


var reg = /ice(\d+)/g;
var str = 'ice1234ice3456ice5678'
// 用exec执行三次，每一次不仅仅把大正则匹配的获取到，而且还可以获取第一个分组匹配的内容  而match只能捕获大正则
console.log(reg.exec(str)); // ["ice1234", "1234", index: 0, input: "ice1234ice3456ice5678"]
console.log(reg.exec(str)); // ["ice3456", "3456", index: 7, input: "ice1234ice3456ice5678"]
console.log(reg.exec(str)); // ["ice5678", "5678", index: 14, input: "ice1234ice3456ice5678"]
console.log(str.match(reg)); // ["ice1234", "ice3456", "ice5678"]

```


### replace

```
// 字符串参数 并不理想
str = str.replace('iceman','shoushou');
console.log(str); // shoushou2016iceman2017

// 参数1 使用正则
str = str.replace(/iceman/g, 'shoushou');
console.log(str); // shoushou2016shoushou2017

// 第二个参数传入函数

var str = 'iceman2016iceman2017';
str = str.replace(/iceman/g, function () {
    console.log(arguments);
    return 'shoushou';
});
console.log(str); // shoushou2016shoushou2017
// 第一次 arguments的结果：["iceman", 0, "iceman2016iceman2017"]
// 第二次 arguments的结果：["iceman", 10, "iceman2016iceman2017"]

```

### 方便测试

Array.prototype.ins_reg = function (r) {
    let a = []
     this.map(v=> {!r.test(v)&&a.push(v)})
     a.length > 0 ? console.warn('%s 未通过验证 %s',a.join(' '),r) : console.log('全部通过验证！')
}

```
// use like this 
['str1','str2'].ins_reg(/^[0-9]$/)

```
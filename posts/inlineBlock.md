
### inline-block元素间间距demo

```
<!-- html -->

<ul>  
 <li>item1</li>  
 <li>item2</li>  
 <li>item3</li>  
 <li>item4</li>  
 <li>item5</li>
</ul>

<style>
ul{list-style: none;}
li{display: inline-block;}
</style>
```

#### plan 1 
``` 
ul:{
font-size:0;
}
```

#### plan 2 

```
<ul>  
 <li>item1</li><li>item2</li><li>item3</li><li>item4</li><li>item5</li>
</ul>

//or

<ul>  
 <li>item1</li><!--
--><li>item2</li><!--
--><li>item3</li>
</ul>
```

#### plan 3
 
``` 
li {margin-right: -3px;} 
```  

-3px,该值与父级字体大小有关

#### 4

```
<ul>  
 <li>item1 
 <li>item2 
 <li>item3
 <li>item4 
 <li>item5
</ul>
```

6 [more](https://www.zhangxinxu.com/wordpress/2012/04/inline-block-space-remove-%E5%8E%BB%E9%99%A4%E9%97%B4%E8%B7%9D/)

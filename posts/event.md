### EVENT

#### Event对象的一些兼容性写法

获得event对象兼容性写法
event || (event = window.event);
获得target兼容型写法
event.target||event.srcElement
阻止浏览器默认行为兼容性写法
event.preventDefault ? event.preventDefault() : (event.returnValue = false);
阻止冒泡写法
event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true);


#### position
4. clientX/clientY：事件发生的时候，鼠标相对于浏览器窗口可视文档区域的左上角的位置；(在DOM标准中，这两个属性值都不考虑文档的滚动情况，也就是说，无论文档滚动到哪里，只要事件发生在窗口左上角，clientX和clientY都是 0，所以在IE中，要想得到事件发生的坐标相对于文档开头的位置，要加上
document.body.scrollLeft和 document.body.scrollTop)

5. offsetX,offsetY/layerX,layerY：事件发生的时候，鼠标相对于源元素左上角的位置；

6. x,y/pageX,pageY：检索相对于父要素鼠标水平坐标的整数；
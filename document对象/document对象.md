# document对象

## 1.DOM的含义
DOM是文档对象模型（Document Object Model）的简称，它的基本思想是把结构化文档（比如HTML和XML）解析成一系列的节点，再由这些节点组成一个树状结构。
所有的节点和最终的树状结构，都有规范的对外接口，以达到使用编程语言操作文档的目的（比如增删内容）。所以，DOM可以理解成文档的编程接口。

DOM有自己的国际标准，目前的通用版本是DOM 3，下一代版本DOM 4正在拟定中。本章介绍的就是JavaScript对DOM标准的实现和用法。

## 2.document对象概述
document对象是文档的根节点，window.document属性就指向这个对象。也就是说，只要浏览器开始载入HTML文档，这个对象就开始存在了，可以直接调用。

document.childNodes属性返回该对象的所有子节点。对于HTML文档来说，document对象一般有两个子节点。

第一个子节点是document.doctype，表示文档类型节点（DocumentType）。对于HTML5文档来说，该节点就代表<!DOCTYPE html>。

第二个子节点是document.documentElement，表示元素节点（Element），代表<html lang="en">。

## 3.document对象的属性
document对象有很多属性，用得比较多的是下面这些。

### 3.1 文档信息属性

* title：文档的标题。
* lastModified：文档文件的上一次修改时间。
* referrer：文档的访问来源。
* URL：文档的URL。
* compatMode：浏览器处理文档的模式，可能的值为BackCompat（向后兼容模式）和 CSS1Compat（严格模式）。

### 3.2 指向其他节点或对象的属性

* doctype：文档类型节点。
* documentElement：html元素节点。
* head：head元素节点。
* body：body元素节点。
* activeElement：文档中被激活（focused/active）的元素。
* defaultView：当前文档的JavaScript顶层对象，即window对象。

```
document.doctype // <!DOCTYPE html>
document.documentElement // <html>...</html>
document.head // <head>...</head>
document.body // <body>...</body>
document.defaultView // window

document.querySelector('textarea').focus();
document.activeElement // <textarea>
```

### 3.3 指向特定元素集合的属性
document对象有一些属性，指向特定元素的集合。

* document.all ：文档中所有的元素，Firefox不支持该属性。
* document.forms ：所有的form元素。
* document.images：所有的img元素。
* document.links：所有的a元素。
* document.scripts：所有的script元素。
* document.styleSheets：所有的link或者style元素。

上面所有的元素集合都是动态的，原节点有任何变化，立刻会反映在这些集合中。

### 3.4 implementation属性
该属性指向一个对象，提供浏览器支持的模块信息，它的hasFeature方法返回一个布尔值，表示是否支持某个模块。

```
document.implementation.hasFeature('MutationEvents','2.0')
// true
```

上面代码表示，当前浏览器支持MutationEvents模块的2.0版本。

## 4.document对象的方法

### 4.1 querySelector()，getElementById()
这两个方法用于获取一个网页的元素节点。它们的不同之处是，querySelector方法的参数使用CSS选择器语法，getElementById方法的参数是HTML标签元素的id属性。

```
document.querySelector('li')
document.getElementById('last')
```

如果有多个节点满足querySelector方法的条件，则返回第一个匹配的节点。

### 4.2 querySelectorAll()，getElementsByTagName()，getElementsByClassName()
这三个方法都返回一组符合条件的网页元素节点（即NodeList对象）。它们的不同之处在于参数，querySelectorAll方法的参数是CSS选择器，
getElementsByTagName方法的参数是HTML元素名，getElementsByClassName方法的参数是HTML元素的class属性。

```
document.querySelectorAll('li')
document.getElementsByTagName('li')
document.getElementsByClassName('liClass')
```

getElementsByTagName方法和getElementsByClassName方法返回的是对象的指针，当对象发生变化时，返回的结果集会跟着变化，querySelectorAll方法返回的结果集没有这种特性。

如果querySelectorAll方法和getElementsByTagName方法的参数是字符串“*”，则会返回文档中的所有HTML元素节点。

### 4.3 getElementsByName()
getElementsByName方法用于选择拥有name属性的HTML元素，比如form、img、frame、embed和object。

```
// 假定有一个表单是<form name="x"></form>
var forms = document.getElementsByName("x");
forms[0].tagName // "FORM"
```

上面代码表明getElementsByName方法的返回值是一组对象，必须用方括号运算符取出单个对象。

### 4.4 createElement()，createTextNode()
这两个方法分别用来生成元素节点和文本节点。createElement方法接受一个字符串参数，表示要创造哪一种HTML元素。传入的字符串应该等同于元素节点的tagName属性。createTextNode方法的参数，就是所要生成的文本节点的内容。

```
var elementNode = document.createElement('div');
var textNode = document.createTextNode('Hi');
```

### 4.5 hasFocus()
hasFocus()方法返回一个布尔值，表示当前文档之中是否有元素被激活或获得焦点。

```
focused = document.hasFocus();
```

如果用户点击按钮，从当前窗口跳出一个新窗口。在用户使用鼠标点击该窗口之前，该新窗口就不拥有焦点。








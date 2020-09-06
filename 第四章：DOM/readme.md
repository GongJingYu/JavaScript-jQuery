# DOM

## 认识DOM

Document Object Model	文档对象模型

## 获取元素

```js
<script>
    document.getElementById("a");
    document.getElementsByTagName('div');
    document.getElementsByName('input');
	document.querySelector('');
    document.querySelectorAll('');
</script>
```

## 事件

事件三要素：事件源，事件类型，事件处理程序

onload 加载完成事件： 页面加载完成之后，常用于做页面js 代码初始化操作
onclick 单击事件： 常用于按钮的点击响应操作。
onblur 失去焦点事件： 常用用于输入框失去焦点后验证其输入内容是否合法。
onchange 内容发生改变事件： 常用于下拉列表和输入框内容发生改变后操作
onsubmit 表单提交事件： 常用于表单提交前，验证所有表单项是否合法。

event文件夹下，包含五个基本事件

## 操作元素

element.innerHTML	element.innerText	element.textContent

## 排他操作

排除掉所有的，然后给自己设置想要的效果

## 属性操作

element.getAttribute()	element.setAttribute()	element.removeAttribute()

## 节点基础

## 节点操作

document.write()	element.innerHTML()	document.createElement

appendChild()	insertBefore()	removeChild()
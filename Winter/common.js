// 获取元素样式
function getStyle(element, property) {
    // 用条件三元运算符判断代替if语句
    return window.getComputedStyle ? //判断是否存在/为真
        window.getComputedStyle(element, null)[property] //为真：就用现代浏览器getComputedStyle
        : element.currentStyle[property];//为假：使用旧版IEcurrentStyle属性
}
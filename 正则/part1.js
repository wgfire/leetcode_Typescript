//  选择符 |

let emai = "364049242@qq.com"

console.log(/3|6/.test(emai))
console.log(emai.match(/3|6/g))


// 元子组 [] 括号里的字符任意匹配就行

console.log(emai.match(/[37864]/g)); // 将 每一个字符与字符串匹配 或的关系



// 元子表 () 将括号里的看成一个整体匹配

console.log(emai.match(/(30|36)/g)); // 36


// 边界开始符号^  边界结束符号$ 
//*	匹配前面的子表达式零次或多次。例如，zo* 能匹配 "z" 以及 "zoo"。* 等价于{0,}。
//+	匹配前面的子表达式一次或多次。例如，'zo+' 能匹配 "zo" 以及 "zoo"，但不能匹配 "z"。+ 等价于 {1,}。
//?	匹配前面的子表达式零次或一次。例如，"do(es)?" 可以匹配 "do" 、 "does" 中的 "does" 、 "doxy" 中的 "do" 。? 等价于 {0,1}。
//\w	匹配包括下划线的任何单词字符。等价于“[A-Za-z0-9_]”。

console.log(/^\d+@\w+\.?\w+$/.test(emai));

// var a ={a:2}
let b = Object.create(a)
# 函式

我們知道程式碼可以幫我們做很多事情，例如睡不著要數羊的時候，就讓程式跑個迴圈，一下就幾百幾千萬隻羊了。但是目前為止，所以工作都是被放在一起的，並且只能被執行一次。也就是說，假設我有三件工作，寫成程式碼可能會長這樣：

```js
console.log("程式開始");

console.log("執行工作 1");
/*
 *
 * 工作 1 的程式碼
 *
**/

console.log("執行工作 2");
/*
 *
 * 工作 2 的程式碼
 *
**/

console.log("執行工作 3");
/*
 *
 * 工作 3 的程式碼
 *
**/

console.log("結束程式");
```

這邊用多行註解`/* */` 來表示某個工作的程式碼，這段程式碼可能有非常多行。

這段程式碼會從上到下分別做完三件工作，並且只會執行一次，執行過的程式碼將不再被使用。

這邊就會有個問題了！所有工作擠在一起很難閱讀。再來假設我想讓工作 2 之後還再被執行，例如在工作 9 結束之後需要執行一次，我辦不到，除非我把工作 2 的程式碼通通複製到之後要用的地方。

有沒有好的解決辦法嗎？那就是函式(或叫函數，function)了！

## 函式概念

一個函式可以想像成是一段被命名的程式碼，例如：

```js
function task_1() {
    // 工作 1 的程式碼
    let a = 5;
    const b = 6;
    a = b + 100;
    for(let i = 0; i < 100; i++) {
        console.log(i + a + b);
    }
}
```

這邊我們認識了 `function` 這個關鍵字，他代表的意義就是「宣告」函式，他會包住一段程式碼，稱作宣告內容。後面接的 `task_1` 則是函式的名稱。

然後我們再看到 `task1` 這個函式的大括號 `{ }` 包含了好幾行程式碼，這些程式碼就是這個函式的一部分，為宣告內容。或是可以理解成，這些程式碼的代號就叫做 `task_1`。

如何使用函式呢？

當你定義好函式之後，要用他只需要呼叫他就好：

```js
task_1();
```

這樣函式就會被呼叫，並執行函式裡面的程式碼。

特別注意的是，在 JS 中，函式的定義與被呼叫位置任意，只要在同一個範圍(scope)就好。

意思就是宣告擺在前面：

```js
function task_1() {
 // ...
}
task_1();
```

或是宣告擺在後面：

```js
task_1();
function task_1() {
 // ...
}
```

在 JS 中都是 OK 的。背後的原因是 JS 的提升（Hoisting）[^3]特性，在之後會介紹，這邊我們先知道這個現象即可。

### 使用函式

所以本文一開頭的程式碼，其實可以轉變成這樣：

```js
task_1();
task_2();
task_3();

function task_1() {
    /*
    *
    * 工作 1 的程式碼
    *
    **/
}

function task_2() {
    /*
    *
    * 工作 2 的程式碼
    *
    **/
}

function task_3() {
    /*
    *
    * 工作 3 的程式碼
    *
    **/
}
```

可以發現，現在每個工作都被拆成獨立的函式，閱讀上也更加明瞭。

此外我們提到假設之後想要再次執行的問題，也會迎刃而解：

```js
task_1();
task_2();
task_3();
// ...
// 非常多工作
// ...
task_9();
task_2(); // 工作 2 再次被執行
```

上面這個例子，我們已經將各個工作都寫成函式，因此我們可以呼叫他們來執行。雖然工作 2 在前面被使用過了，但藉由函式的形式，我不需要將程式碼複製一次，一樣能夠再次執行工作 2。

### 小範例

以上就是函式的基本概念，讓我們來看個實際例子：

!FILENAME ex1.js

```js
console.log("工作 1");
console.log("工作 2");
```

!FILENAME ex2.js

```js
task_1();
task_2();

function task_1() {
    console.log("工作 1");
}

function task_2() {
    console.log("工作 2");
}
```

`ex1.js` 和 `ex2.js` 是一樣的，只是有沒有用函式來寫。

執行範例程式碼：

```shell
node ex1.js
node ex2.js
```

結果都會是

```txt
工作 1
工作 2
```

## 傳入參數

函數可以裝入一段程式碼，並且可以重複使用。但是現在我們碰到一個問題，就是有兩件工作的內容長得非常像，但是只有一點點地方不一樣。

例如：

```js
function sayHiTiger() {
    console.log("Hi, Tiger");
}
```

和

```js
function sayHiJenny() {
    console.log("Hi, Jenny");
}
```

這兩段程式碼其實只有名字的部分不一樣而已，假設我們今天有一百個人，想要讓函式來打招呼的話，就會需要一百個函式，這樣絕對不是好辦法。

所以這時候我們可以用到函式中的一個概念，即為傳入參數。意思是將需要改動的地方，傳入參數，函式中的變數會根據進來的參數來改變，就可以做到同一個函式，但可以有很多種變化。

以剛剛 say Hi 的例子來說，假設我想讓函式可以根據不同人名來有不同的回應的話，可以這樣寫：

```js
function sayHi(name) {
    console.log(`Hi, ${name}`);
}
```

這邊我們觀察到，`sayHi()` 裡面有 `name`，`name` 在這邊是一個參數。函式中的 `name`，例如 `console.log()` 裡面的 `name`，都會是函式被呼叫時，所帶的參數的值。

好像有點複雜，以剛剛 `function sayHi(name)` 來說，假設我這樣呼叫：

```js
sayHi("Tiger"); // Hi, Tiger
sayHi("Jenny"); // Hi, Jenny
```

可以發現，如果我在 `sayHi` 裡面放 `"Tiger"`，那這時候函式中的 `name` 就會是 `"Tiger"`，因此 `console.log()` 會印出 `Hi, Tiger`。

我們也可以不要在呼叫函式的時候直接放入值，而是放入變數，也會有一樣的效果：

```js
const myName = "Jenny";
sayHi(myName); // Hi, Jenny
```

在這個情況下，函式中的 `name` 就會是 `myName` 的值。因此 `Jenny` 會被傳進函式，最後印出 `Hi, Jenny`。

所以完整範例長這樣：

!FILENAME ex3.js

```js
const hisName = "Tiger";
sayHi(hisName);
const herName = "Jenny";
sayHi(herName);

function sayHi(name) {
    console.log(`Hi, ${name}`);
}
```

執行 `ex3.js`

```shell
$ node ex3.js
Hi, Tiger
Hi, Jenny
```

### 多參數

一個函數都可以傳入一個參數了，當然沒道理不能傳入多個，所以我們可以視情況放入多個參數。

例如：

!FILENAME ex4.js

```js
function sayHiManyTimes(name, time) {
    for(let i = 0; i < time; i++) {
        console.log(`Hi, ${name}`);
    }
}

const herName = "Jenny";
const times = 3;
sayHiManyTimes(herName, times);
```

執行 `ex4.js`

```shell
$ node ex4.js
Hi, Jenny
Hi, Jenny
Hi, Jenny
```

### 不固定參數

假設現在有個函數：

```js
function test(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
```

我們如果多傳入參數，或是少傳入參數會怎樣呢？

```js
test(1, 2);
test(1, 2, 3, 4);
```

結果會是：

```txt
1
2
undefined

1
2
3
```

由此可見，如果少給參數，那個參數就會是 `undefined`。而如果多給參數，多餘的就會被忽略。

## 回傳

剛剛我們看到的函數，都是只有執行而已。但有時候我們可能是希望一個函數幫我們跑完一個工作，然後把算好的結果告訴我們。這時候我們可以讓函數回傳數值。

例如:

```js
function sum(a, b) {
    return a + b;
}
const number = sum(1, 2);
console.log(number); // 3
```

在這邊，`sum()` 是一個會把兩個參數相加，並且把和傳回來的函數。函數中 `return` 關鍵字代表傳回值。

回傳值可以是任意形式，可以是數字、字串、陣列等等，但要注意的是，要注意傳回的格式是你原本預期的。

例如假設原本你有一個 `let name_str`，這個變數預期是放入字串。那這個變數呼叫一個會回傳數字的函式，就會非常的奇怪。雖然因為 JS 允許變數改變型別，但是通常讓變數從字串變成數字並不是好事，很容易發生邏輯上的錯誤。或是根本其實是誤用函式了！

## 一些稍微進階的 JS 技巧

以下稍微提一下目前 JS 中會用到的函數形式以及技巧，更進階的用法 Google 搜尋 JS 函式會得到很多教學，本文主要是介紹基本概念，因此只談幾個基本的。

### 箭頭函數

在講箭頭函數之前，我們需要知道，JS 中，可以用變數來定義函數：

!FILENAME ex5.js

```js
const sayHiManyTimes = function (name, time) {
    for(let i = 0; i < time; i++) {
        console.log(`Hi, ${name}`);
    }
}
sayHiManyTimes("Jenny", 2);
```

但呼叫方式還是一樣。

但每次都要打完整的 `function` 大家覺得很麻煩，所以 JS 從 ES6 以後，函式有一種特別的簡化方式，即為用箭頭 `()=>{}` 來呈現。

不過這個語法當然不只為了偷懶，箭頭函數還有一些特性：

> 箭頭函式運算式擁有比函式運算式還簡短的語法。它沒有自己的 this、arguments、super、new.target 等語法。本函式運算式適用於非方法的函式，但不能被用作建構式（constructor)。 --MDN

詳細補充在文末[^1]。

!FILENAME ex6.js

```js
const sayHiManyTimes = (name, time) => {
    for(let i = 0; i < time; i++) {
        console.log(`Hi, ${name}`);
    }
}
sayHiManyTimes("Jenny", 2);
```

可以發現原本是長這樣 `function() {}`，現在變成 `()=>{}`。

執行 `ex5.js` 和 `ex6.js` 結果都是：

```shell
$ node ex5.js
Hi, Jenny
Hi, Jenny
```

### 函式中有函式

函式中有函式是合法的，例如：

```js
function test() {
    function sum(a, b) {
        return a + b;
    }
    return sum(1, 3);
}
test(); // 4
```

### 預設參數

我們知道，如果參數少給的話，就會被定為 `undefined`。但有時候我們希望不給的時候，可以用預設的值，這時候可以這樣寫：

```js
function testDefualt(name, time) {
    name = name || "Tiger";
    time = time || 3;
    console.log(name, time);
}
```

如果我們有給參數，參數就會是我們給的值。

```js
testDefualt("Jenny", 7); // Jenny 7
```

否則就會是預設的值：

```js
testDefualt(); // Tiger 3
```

### 匿名函式

匿名函式，也做立即函式(Immediately-invoked function expressions)，或叫做隱函式。這算是比較進階的用法，不過這邊還是稍微提一下，我們可以直接在定義函式的時候，就直接一起執行了。換句話說，一般我們會定義函式，然後才呼叫。現在是定義的同時就呼叫。

舉例來說：

!FILENAME ex7.js

```js
((name, time) => {
    for(let i = 0; i < time; i++) {
        console.log(`Hi, ${name}`);
    }
})("Jenny", 2);
```

我們先執行 `ex7.js` 看看結果：

```shell
$ node ex7.js
Hi, Jenny
Hi, Jenny
```

這邊我們把剛剛程式碼拆開來解析一下。

```js
(
    (name, time) => {
        for(let i = 0; i < time; i++) {
            console.log(`Hi, ${name}`);
        }
    }
)("Jenny", 2);
```

這樣就清楚一點了，中間 `()=>{}` 的部分是原本的函式，但我們在外面直接用 `()` 包住函式，這樣是隱函數的意思，所謂「隱」就是藏起來，因此這個裡面的函式是沒有名字，也就是匿名。

但有了立即函式之後，我們必須馬上執行它，否則之後就找不到他了。還記得我們呼叫函式時候需要名字嗎？沒有名字的東西，一但離開他就再也找不到啦！

所以我們在立即函式後面緊接著 `()` 代表執行，裡面可以放入參數。注意，這個 `()` 是執行的意思，跟包住函式用的 `()` 是不一樣的。所以其實你會看到 `(函式)(參數)` 這樣的現象。放入參數的部分，裡面的函式怎樣定義參數，外面 `()` 就怎樣輸入參數，用法跟之前一樣。

和一般函式呼架差別在於，隱函數定義結束馬上執行，同時他是匿名的。常用情況為早期的 JS 模組設計，以及單元測試時會用到。

## 結論

函數(function) 在 JS 是一個非常重要的觀念，在 JS 中另一個很重要的型別——物件(object)也可以由函式來生成，甚至其實函式在 JS 中也可以算是一種物件[^2]。關於物件，下一章節會多加說明。此外，函式是程式語言中非常重要的元素，基本上程式開發就是一堆的函數所構成。函數讓我們能將程式碼區分成不同的區塊，並且可以重複呼叫。我們能傳入參數，以及回傳數值。

## 參考

[^1]: [MDN：箭頭函數](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions)。
[^2]: [MDN：Function](https://developer.mozilla.org/en-US/docs/Glossary/Function)。
[^3]: [MDN: Hoisting](https://developer.mozilla.org/zh-TW/docs/Glossary/Hoisting)。

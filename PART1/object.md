# 物件

這個世界由各種不同的東西(Things)組成，我們身處的宇宙、太陽系、每天繞地球的月球，山海與花花草草。

有一部電影〈The Theory of Everything〉描述一位已逝的偉大物理學家——霍金，年輕時候的愛情故事。霍金一生為追求宇宙的真理而努力，物理學家堅信世界應該是由一個可以統合並解釋所有物理現象的理論所支配，亦即萬物的理論。

在 JS 的世界中，萬物的理論就是 `object` 這個物件型別，這個物件型別包含各種形形色色的玩意，讓我娓娓道來。

## 物件定義

程式語言中的物件(object)通常會包含：

- 屬性 (properties)
- 方法 (method)

屬性也可以稱為成員(member)，代表這個物件所擁有的資料；方法也稱作函式，讓物件可以執行工作，也就是這個物件的功能，例如操作物件成員來做判斷並回傳數值。

JS 中的物件，可以有很多種方式生成，例如：

```js
const obj = {};
```

```js
function Obj(){}
const obj = new Obj();
```

```js
class Obj{}
const obj = new Obj();
```

但是這個章節主要在講觀念，因此使用第一種方式做介紹！

### 屬性

假設我今天想要描述一個人（一個物件），我可能會這樣形容：

```txt
這個人：
    - 姓：劉
    - 名：安齊
    - 年紀：22
    - 性別：男
```

當然這個人就是我。

那如果想用 JS 描述一個人呢？

```js
let person = {
    firstName: "Liu",
    lastName: "An Chi",
    age: 22,
    sex: "male"
};
```

這樣就是定義一個人了。

所以 JS 定義物件的語法是：

```js
let 東西 = {
    特徵1: 描述1,
    特徵2: 描述2,
    // ...
    // ...
}
```

!FILENAME ex1.js

```js
let person = {
    firstName: "Liu",
    lastName: "An Chi",
    age: 22,
    sex: "male"
};

console.log(typeof(person))
console.log(person)
console.log(person.age)
```

執行 `ex1.js`：

```log
$ node ex1.js
object
{ firstName: 'Liu', lastName: 'An Chi', age: 22, sex: 'male' }
22
```

由此可知 `person` 的確被 JS 歸納在 `object` 型別，我們可以直接印出完整的物件，也可以直接呼叫 `person.age` 來取得 `person` 的 `age` 的值是多少。

### 方法

但是一個人不僅僅只有一些特徵，他還會做一些動作，例如介紹名字、說哈囉等等。

我們可以這樣描述：

```txt
某個人：
    屬性：
        - 名字：Jenny
        - 年紀：21
        - 性別：女
    方法：
        - 介紹名字
        - 跟（某人）說哈囉
```

這樣看下來這個人是否更生動了一些呢？這就是物件中屬性和方法的概念，屬性描述東西的特徵，方法是這個物件可以做的事情。

如果我們用 JS 來表示的話：

!FILENAME ex2.js

```js
const girl = {
    name: "Jenny",
    age: 21,
    sex: "female",
    isGirl: () => {
        return self.sex == "female";
    },
    getName: function() {
        console.log(`I am ${this.name}!`);
    },
    sayHello: who => {
        console.log(`Hello, ${who}!`);
        this.getName();
    }
};

console.log(girl.name) // 印出屬性來看
console.log(girl.isGirl()) // 印出物件方法的回傳值
girl.sayHello("Tiger"); // 執行物件的方法
```

執行 `ex2.js`：

```log
$ node ex2.js
Jenny
true
Hello, Tiger!
I am Jenny!
```

這個例子有點小複雜，首先我們注意到一個規則：

```js
const thing = {
    屬性: 變數,
    方法: 函式
}
```

亦即長這樣：

```js
const thing = {
    name: "XXX",
    doThing1: fucntion(){ /* 寫法一 */ },
    doThing2: () => { /* 寫法二 */  }
}
```

注意到不管是屬性或是方法，我們都會先定義名稱，然後如果是屬性，後面會接變數。如果是方法，後面會接函式，函式可以用 `function` 寫法也可以用 `()=>{}` 箭頭式寫法。此外物件中的方法，因為是函式，所以可以單純跑程式碼，也可以有回傳值。

在 `ex2.js` 中有一段

```js
    getName: function() {
        console.log(`I am ${this.name}!`);
    },
```

這個方法採用 `fuction` 來表示函式。重點是關鍵字 `this`，`this` 意味著物件自己，因爲 `girl` 有 `name` 這個屬性，我們如果從外面呼叫就是 `girl.name`。但我們現在要在物件裡面呼叫這個屬性，所以我們用 `this.name`。

所以 `this.name` 在物件裡的方法中被使用時，會得到物件本來定義 `name` 的 `"Jenny"`。

因此當我們執行 `girl.getName()` 的時候，這個方法會找到自己的屬性`name`，然後印出 `I am Jenny!`。

我們再來看這段

```js
    isGirl: () => {
        return this.sex == "female";
    },
```

這段也是物件的方法，採用箭頭式函式，至於要用 `function` 還是箭頭端看個人喜好！我剛剛知道可以呼叫自己屬性，所以這邊在條件判斷 `self.sex` 是否為女生，是就回傳 `true`，反之回傳 `false`。所以當我們呼叫 `girl.isGirl()` 時候，會得到回傳值 `true`。

這邊你可能會覺得很怪，為什麼不直接設定物件 `isGirl: true`？

事實上這是兩種實作方式，原本的 `girl.isGirl()` 這樣呼叫為物件方法，並經由物件方法得到回傳值。如果我們直接定義 `isGirl: true`，呼叫 `girl.isGirl` 得到 `true`，這樣是直接取得物件屬性的做法。

雖然最後都是取得 `true`，兩種代表的含義並不太一樣，一個是直接存取物件屬性，一種是呼叫函式來對物件屬性做操作。如果今天物件的屬性是不希望被外面直接取得，就可以用物件方法來呼叫物件屬性，這時候就會有差異了。

例如大雄可能有個屬性是「今天考試成績」，我們無法直接得知這個屬性，因為大雄不肯說（不公開）。但是大雄有個「大雄心情如何」的方法，任何人只要看得見大雄都知道他心情怎樣（公開），事實上「心情如何」是呼叫「今天考試成績」取得的答案（別懷疑，因為大雄現在只有這個煩惱）。

另外我們在這段程式碼：

```js
    sayHello: who => {
        console.log(`Hello, ${who}!`);
        this.getName();
    }
```

發現物件的方法也可以呼叫自己的方法，在這例子中 `sayHello` 呼叫了自己的 `getName`，因為是呼叫自己所以要加上 `this`。

所以物件方法可以呼叫自己的其他方法，也可以使用自己屬性，但只要是呼叫自己就要加上 `this`，如 `this.屬性` 或是 `this.方法()`。而如果從外面呼叫，則是使用 `物件名稱.屬性` 或是 `物件名稱.方法()`，例如 `girl.name` 和 `girl.sayHello("Tiger")`。

關於物件方法與物件屬性的更複雜介紹與應用，在之後「物件導向」的章節會有更詳細的介紹。目前我們只要先認識這樣即可！

## 物件資料

關於物件更常使用的情境是單純作為資料儲存的容器，就如同之前在介紹陣列時一樣。

如果只拿物件來純資料，就只會使用到上面介紹物件中的屬性了。在這邊的情境下，物件不會有任何方法。

例如簡單的例子：

```js
const time = {
    year: 2018,
    month: "July",
    day: 29,
    hour: 23,
    minute: 34,
    second: 53
};
```

這個物件只有單純存放資料而已。在這個情況下，我們稱為 key-value 結構，一個 key（索引） 對應一個 value（數值）。

當然我們也可以直接對他做修改：

```js
time["year"] = 2019;
time.hour = 3;
```

我們可以使用 `物件[索引]` 或是 `物件.索引` 來取得資料。當然，在含有方法的物件中，我們也可以用這兩種方法取得物件的屬性。

物件也可以不單只存一個數值，他也可以存另一個物件或是陣列，並可以有好多層。

舉例來說：

```js
const currentTime = {
    date : {
        year: 2018,
        month: 6,
        day: 14,
        format: ["2018/6/14", "14/6/2018"]
    },
    time: {
        hour: 5,
        minut: 44
    },
    nextDays: ["Wed", "Thu", "Fri"]
}

console.log(currentTime.data.year) // 2018
console.log(currentTime.data.format[0]) // 2018/6/14
console.log(currentTime.nextDays[2]) // Fri
```

在這例子中，我們看到物件可以包含物件，只要在 key 對應的 value 裡面塞入物件即可。然後我們也看到物件裡面也可以放入陣列，而陣列我們說過可以放入任何東西，所以當然也可以包含物件。

這就是最常見用來做資料儲存的物件使用方法了！

### JSON

我們提到了物件可以用來儲存資料，但這是給電腦看的資料，物件本身還是由二進位所構成的程式邏輯。

那如果我們想要把物件傳給別人，或是記錄在檔案中呢？

這時候我們要使用序列化[^1]的技術，一種方式是將物件轉成文字來儲存，在 JS 中我們稱為 JSON(JavaScript Object Notation)[^2]，所以 JSON 是一串純文字所構成的資料。

來看看怎麼將物件轉換成 JSON 吧！

```js
const time = {
    year: 2018,
    month: "July",
    day: 29,
    hour: 23,
    minute: 34,
    second: 53
};

const timeJson = JSON.stringify(time);
console.log(typeof(timeJson));
console.log(timeJson);
```

執行上面程式會跑出：

```txt
string
{"year":2018,"month":"July","day":29,"hour":23,"minute":34,"second":53}
```

如同我剛剛所說 JSON 會是文字。當我們觀察 `timeJson` 時，有沒有發現長相跟我們剛剛定義 `time` 物件時幾乎一模一樣，差別只是 key 的欄位必須由雙引號所括起來。其餘的物件 `{}`、字串、數字、陣列 `[]` 幾乎全部都和原本的程式碼差不多。但現在因為轉變成純文字了，所以我們可以很方便的存在檔案中，或是經由網路傳送給其他人。

所以 `JSON.stringify` 這個函式可以讓我們將物件轉換成 JSON 格式。

如果今天我們想從 JSON 轉回成物件呢？

我們可以使用 `JSON.parse`：

```js
const timeJson = `{"year":2018,"month":"July","day":29,"hour":23,"minute":34,"second":53}`;

const time = JSON.parse(timeJson);
console.log(typeof(time));
console.log(time); // 已經是物件了，只是印出來其實就等於 JSON
```

就會得到

```log
object
{ year: 2018,
  month: 'July',
  day: 29,
  hour: 23,
  minute: 34,
  second: 53 }
```

要注意的是，如果物件中含有方法，執行 `JSON.stringify` 的時候，所有有函式的部分都會被移除。

## 搭配迴圈

物件也可以用迴圈來跑，就會把所有 key-value 跑過一輪。

```js
const time = {
    year: 2018,
    month: 'July',
    day: 29,
    hour: 23,
    minute: 34,
    second: 53
};

for(const key in time) {
    console.log(key, time[key]);
}
```

就會跑出

```log
year 2018
month July
day 29
hour 23
minute 34
second 53
```

## 小結

物件是 JS 中最常用到資料形式，因為他等於就是唯一的方法，畢竟連陣列都算是物件的一種，除此之外物件資料也可以經由序列化轉成 JSON 文字形式。

物件也可以不僅包含屬性，還能有方法，此外物件方法可以呼記自己的屬性，方法也可以呼叫方法。如果要呼叫自己的東西就要用 `this` 關鍵字代表自己，如果從外面呼叫的話，就是直接 `物件名字.屬性` 或是 `物件名字.方法()`。

更進階的物件操作方式會在後續文章在介紹。目前我們已經有基本的物件概念了！

## 參考與延伸

[^1]: [Wiki: 序列化](https://zh.wikipedia.org/wiki/%E5%BA%8F%E5%88%97%E5%8C%96)
[^2]: [Wiki: JSON](https://zh.wikipedia.org/wiki/JSON)

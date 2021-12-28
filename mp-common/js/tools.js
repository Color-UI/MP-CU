module.exports = {
    sys_info: wx.getSystemInfoSync(),	// 获取系统信息
    sys_statusBar: wx.getSystemInfoSync().statusBarHeight,
    sys_navBar: wx.getSystemInfoSync().statusBarHeight + 50,
    // 获取胶囊信息
    sys_capsule() {
        let capsule = wx.getMenuButtonBoundingClientRect();
        if (!capsule) {
            console.error('getMenuButtonBoundingClientRect error');
            capsule = { bottom: 56, height: 32, left: 278, right: 365, top: 24, width: 87 };
        }
        return capsule;
    },
    // 数组操作
    isArr: {
        //数组中是否存在
        ifItemKey(arr, item) {
            return arr.indexOf(item) !== -1;
        },
        //获取数组索引
        getItemIndex(arr, item) {
            return arr.indexOf(item);
        },
        //移除数组中指定元素
        delItem(arr, item) {
            let index = arr.indexOf(item);
            let items = [...arr];
            items.splice(index, 1);
            return [...items];
        },
        //移除数组中其它元素
        delItemKey(arr, item) {
            let index = arr.indexOf(item);
            let items = [...arr];
            for (let i = 0; i < arr.length; i++) {
                if (index !== i) items.splice(i, 1);
            }
            return [...items];
        },
        //移除数组中左边的元素
        delItemLeft(arr, item) {
            let index = arr.indexOf(item);
            let items = [...arr];
            for (let i = 0; i < arr.length; i++) {
                if (index >= i) return;
                items.splice(i, 1);
            }
            return [...items];
        },
        //移除数组中右边的元素
        delItemRight(arr, item) {
            let index = arr.indexOf(item);
            let items = [...arr];
            for (let i = 0; i < arr.length; i++) {
                if (index > i) items.splice(i, 1);
            }
            return [...items];
        },
        //替换数组中两个元素的位置
        replaceItem(arr, item_a, item_b) {
            let index_a = arr.indexOf(item_a);
            let index_b = arr.indexOf(item_b);
            let items = [...arr];
            items.splice(index_a, 1);
            items.splice(index_b, 0, item_a);
            return [...items];
        },
        //数组中是否存在
        ifKey(arr, keyName, key) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][keyName] === key) {
                    return true;
                }
            }
            return false;
        },
        //获取数组索引
        getIndex(arr, keyName, key) {
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][keyName] === key) {
                    return i;
                }
            }
            return false;
        },
        //移除数组中指定元素
        del(arr, keyName, key) {
            let s = false, name = '', ArrData = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][keyName] !== key) {
                    if (!s) name = arr[i][keyName];
                    ArrData.push(arr[i]);
                } else {
                    s = true;
                }
            }
            return { key: name, arr: ArrData };
        },
        //移除数组中其它元素
        delKey(arr, keyName, key) {
            let ArrData = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][keyName] === key) {
                    ArrData.push(arr[i]);
                }
            }
            return ArrData;
        },
        //移除数组中左边的元素
        delLeft(arr, keyName, key) {
            let s = false, ArrData = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][keyName] === key) {
                    s = true;
                    ArrData.push(arr[i]);
                } else {
                    if (s) ArrData.push(arr[i]);
                }
            }
            return ArrData;
        },
        //移除数组中右边的元素
        delRight(arr, keyName, key) {
            let s = true, ArrData = [];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i][keyName] === key) {
                    s = false;
                    ArrData.push(arr[i]);
                } else {
                    if (s) ArrData.push(arr[i]);
                }
            }
            return ArrData;
        },
        //数组或对象深拷贝
        nextArr(arr) {
            return JSON.parse(JSON.stringify(arr));
        },
        isForEach(arr, fn) {
            if (!arr.length || !fn) return;
            let i = -1, len = arr.length;
            while (++i < len) {
                let item = arr[i];
                fn(item, i, arr);
            }
        },
        //得到两个数组的交集, 两个数组的元素为数值或字符串
        intersection(arr1, arr2) {
            let len = Math.min(arr1.length, arr2.length)
            let i = -1, res = [];
            while (++i < len) {
                if (arr1.indexOf(arr2[i]) > -1) res.push(arr2[i])
            }
            return res
        },
        //得到两个数组的并集, 两个数组的元素为数值或字符串
        getUnion(arr1, arr2) {
            return Array.from(new Set([...arr1, ...arr2]));
        },
        //判断要查询的数组是否至少有一个元素包含在目标数组中
        hasOneOf(arr1, arr2) {
            return arr1.some(_ => arr2.indexOf(_) > -1);
        },
        //判断下级数组是否为空
        hasChild(arr, key = 'children') {
            return arr[key] && arr[key].length !== 0
        }
    },
    // 日期时间操作
    isDate: {
        new_date: new Date(),
        year: new Date().getFullYear(),  //当前年
        month: new Date().getMonth(),    //当前月
        date: new Date().getDate(),      //当前日
        day: new Date().getDay(),        //今天本周的第几天
        //获取当前的日期
        currentDate() {
            return this.formatDate(new Date());
        },
        //获得本周的开端日期
        weekStartDate() {
            return this.formatDate(new Date(this.year, this.month, this.date - this.day));
        },
        //获得本周的停止日期
        weekEndDate() {
            return this.formatDate(new Date(this.year, this.month, this.date + (6 - this.day)));
        },
        //获得上周的停止日期
        weekLastEndDate() {
            return this.formatDate(new Date(this.year, this.month, this.date + (6 - this.day - 7)));
        },
        //获得本月的开端日期
        monthStartDate() {
            return this.formatDate(new Date(this.year, this.month, 1));
        },
        //获得本月的停止日期
        monthEndDate() {
            return this.formatDate(new Date(this.year, this.month, this.monthDays(this.month)));
        },
        //获得上月开端时候
        monthLastStartDate() {
            return this.formatDate(new Date(this.year, this.month - 1, 1));
        },
        //获得上月停止时候
        monthLastEndDate() {
            const day = new Date(this.year, this.month, 0).getDate();
            return this.formatDate(new Date(this.year, this.month - 1, day));
        },
        //获取今年的开头
        currentYear() {
            return this.new_date.getFullYear() + "-01-01";
        },
        //获取今天之前的多少天的日期
        DateCountDay(Day) {
            return this.formatDate(new Date().setDate(this.date + Day));
        },
        //获得某月的天数
        monthDays(month) {
            let StartDate = new Date(this.year, month, 1);
            let EndDate = new Date(this.year, month + 1, 1);
            return (StartDate - EndDate) / (1000 * 60 * 60 * 24);
        },
        //格局化日期：yyyy-MM-dd
        formatDate(date) {
            let y = date.getFullYear();
            let m = date.getMonth() + 1;
            let d = date.getDate();
            if (m < 10) m = "0" + m;
            if (d < 10) d = "0" + d;
            return (y + "-" + m + "-" + d);
        },
        //字段拼接
        substrDataStr(date) {
            let strArr = [];
            strArr.push(date.substr(0, 4))
            strArr.push(date.substr(4, 2))
            strArr.push(date.substr(6, 2))
            return strArr
        }
    },
    // 对象操作
    isObj: {
        //判断一个对象是否存在key
        hasKey(obj, key) {
            //如果传入第二个参数key，则是判断这个obj对象是否存在key这个属性
            //如果没有传入key这个参数，则判断obj对象是否有键值对
            if (key) return key in obj;
            let keysArr = Object.keys(obj);
            return keysArr.length;
        },
        // 判断两个对象是否相等，这两个对象的值只能是数字或字符串
        objEqual(obj1, obj2) {
            const keysArr1 = Object.keys(obj1)
            const keysArr2 = Object.keys(obj2)
            if (keysArr1.length !== keysArr2.length) return false
            else if (keysArr1.length === 0 && keysArr2.length === 0) return true
            else return !keysArr1.some(key => obj1[key] != obj2[key])
        },
    },
    // 随机字符串操作
    isRandom: {
        NUM: '0123456789',
        XEU: 'abcdefghijklmnopqrstuvwxyz',
        DEU: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        //生成随机字符串,默认为全部类型
        getRandom(num, chars) {
            if (!chars) chars = this.NUM + this.XEU + this.DEU
            let maxPos = chars.length, value = '';
            for (let i = 0; i < num; i++) {
                value += chars.charAt(Math.floor(Math.random() * maxPos));
            }
            return value;
        },
        //数字
        getRandomNUM(num) {
            return this.getRandom(num, this.NUM);
        },
        //小写字母
        getRandomXEU(num) {
            return this.getRandom(num, this.XEU);
        },
        //大写字母
        getRandomDEU(num) {
            return this.getRandom(num, this.DEU);
        },
        //数字+ 小写字母
        getRandomNUM_XEU(num) {
            return this.getRandom(num, this.NUM + this.XEU);
        },
        //数字 + 大写字母
        getRandomNUM_DEU(num) {
            return this.getRandom(num, this.NUM + this.DEU);
        },
        //小写字母 + 大写字母
        getRandomXEU_DEU(num) {
            return this.getRandom(num, this.XEU + this.DEU);
        },
        //范围随机数
        getRandomFrom(lower, upper) {
            return Math.floor(Math.random() * (upper - lower + 1) + lower);
        }
    },
    // 判断数据类型
    isDataType: {
        ifNull(value) {
            return value === undefined || value === null;
        },
        ifBoolean(value) {
            return typeof value == 'boolean';
        },
        ifFunction(value) {
            return typeof value == 'function';
        },
        ifObject(value) {
            return Object.prototype.toString.call(value) === '[object Object]';
        },
        ifArray(value) {
            return value instanceof Array || Object.prototype.toString.call(value) === '[object Array]';
        },
        ifDate(value) {
            return value instanceof Date || Object.prototype.toString.call(value) === '[object Date]';
        },
        ifNumber(value) {
            return value instanceof Number || Object.prototype.toString.call(value) === '[object Number]';
        },
        ifString(value) {
            return value instanceof String || Object.prototype.toString.call(value) === '[object String]';
        }
    }
}

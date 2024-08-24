

# JavaScript Data Types and Conversions

## 1. String
**Description:** A sequence of characters used to represent text.

**Conversions:**
- **String to Number**
  ```javascript
  let str = "42";
  console.log(Number(str));  // 42
  ```

- **String to Boolean**
  ```javascript
  let strBoolean = "Hello";
  console.log(Boolean(strBoolean));  // true
  let emptyStr = "";
  console.log(Boolean(emptyStr));  // false
  ```

- **String to Null/Undefined**
  ```javascript
  let strNull = null;
  console.log(strNull);  // null
  ```

## 2. Number
**Description:** Represents both integer and floating-point numbers.

**Conversions:**
- **Number to String**
  ```javascript
  let num = 123;
  console.log(String(num));  // "123"
  ```

- **Number to Boolean**
  ```javascript
  let zero = 0;
  let positiveNum = 10;
  console.log(Boolean(zero));  // false
  console.log(Boolean(positiveNum));  // true
  ```

- **Number to Null/Undefined**
  ```javascript
  let numNull = null;
  console.log(numNull);  // null
  ```

## 3. Boolean
**Description:** Represents logical values: true or false.

**Conversions:**
- **Boolean to String**
  ```javascript
  let isTrue = true;
  console.log(String(isTrue));  // "true"
  ```

- **Boolean to Number**
  ```javascript
  let isFalse = false;
  console.log(Number(isFalse));  // 0
  console.log(Number(isTrue));   // 1
  ```

- **Boolean to Null/Undefined**
  ```javascript
  let boolNull = undefined;
  console.log(boolNull);  // undefined
  ```

## 4. BigInt
**Description:** Used for representing integers with arbitrary precision.

**Conversions:**
- **BigInt to String**
  ```javascript
  let big = 12345678901234567890n;
  console.log(String(big));  // "12345678901234567890"
  ```

- **BigInt to Boolean**
  ```javascript
  let bigZero = 0n;
  console.log(Boolean(bigZero));  // false
  ```

- **BigInt to Number**
  ```javascript
  let bigNum = 10n;
  console.log(Number(bigNum));  // 10
  ```

## 5. Null
**Description:** Represents the intentional absence of a value.

**Conversions:**
- **Null to String**
  ```javascript
  let n = null;
  console.log(String(n));  // "null"
  ```

- **Null to Number**
  ```javascript
  console.log(Number(null));  // 0
  ```

- **Null to Boolean**
  ```javascript
  console.log(Boolean(null));  // false
  ```

## 6. Undefined
**Description:** Represents an uninitialized or missing value.

**Conversions:**
- **Undefined to String**
  ```javascript
  let u;
  console.log(String(u));  // "undefined"
  ```

- **Undefined to Number**
  ```javascript
  console.log(Number(undefined));  // NaN
  ```

- **Undefined to Boolean**
  ```javascript
  console.log(Boolean(undefined));  // false
  ```

## 7. Symbol
**Description:** A unique and immutable primitive used as object keys.

**Conversions:**
- **Symbol to String**
  ```javascript
  let sym = Symbol('foo');
  console.log(String(sym));  // "Symbol(foo)"
  ```

- **Symbol to Boolean**
  ```javascript
  let symBoolean = Symbol('bar');
  console.log(Boolean(symBoolean));  // true
  ```

- **Symbol to Number/Null/Undefined**
  ```javascript
  // Direct conversion results in a TypeError:
  // console.log(Number(sym));  // TypeError
  ```

## 8. Object
**Description:** Collections of properties and methods.

**Conversions:**
- **Object to String**
  ```javascript
  let obj = { name: "John" };
  console.log(String(obj));  // "[object Object]"
  ```

- **Object to Number**
  ```javascript
  console.log(Number(obj));  // NaN
  ```

- **Object to Boolean**
  ```javascript
  console.log(Boolean(obj));  // true
  ```

## Weird Conversions
- **String + Number**
  ```javascript
  console.log("123" + 456);  // "123456"
  ```

- **String * Number**
  ```javascript
  console.log("123" * 2);  // 246
  ```

- **Boolean + String**
  ```javascript
  console.log(true + "foo");  // "truefoo"
  ```

- **Number + null/undefined**
  ```javascript
  console.log(100 + null);  // 100 (null is treated as 0)
  console.log(100 + undefined);  // NaN (undefined results in NaN)
  ```



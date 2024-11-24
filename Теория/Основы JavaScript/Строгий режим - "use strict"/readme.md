# 'use strict'

Включает строгий режим выполнения javascript.

В строгом режиме интерпретатор будет явно выбрасыть ошибки на действия, которые ранее пропускалю

Если строгий режим включен, то отключить его нельзя

Строгий режим был введен в JS со стандартом ECMAScript 5 в 2009 году

Строгий режим включается в себя следующее:

### Нельзя использовать переменные без объявления. Интерпретатор выбросит ошибку:

`

    'use strict'
    
    const name = 'Anna'
    console.log(name)
    // Anna
    
    age = 24
    console.log(age)
    // Uncaught ReferenceError: age is not defined
`

Без включения интепретатор создать переменную в глобальной области видимости.


### Явная ошибка если значения поля нельзя изменить или удалить

```
    'use strict'
    
    const obj = {}
    
    Object.defineProperty(obj, 'someProp', { value: 'Alex', writable:false })
    
    console.log(obj.someProp)
    // Alex
    
    obj.someProp = 'James'
```

    
```
    'use strict'
    
    const notExtensableObj = {}
    
    Object.preventExtensions(notExtensableObj)
    
    notExtensableObj.someProp = 'Value'
    // Uncaught TypeError: Can't add property someProp, object is not extensible

```

Если запускать без строго режима - ошибки не будет, но значение не изменится

### Параметры функции не могут иметь одинаковые имена

Если будут 2 одинаковых параметра в функции 
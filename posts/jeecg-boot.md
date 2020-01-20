
we always implement v-model like this
bind value and emit 'input'
use this 
```
   model: {
      prop: 'value',
      event: 'change'
    }
```
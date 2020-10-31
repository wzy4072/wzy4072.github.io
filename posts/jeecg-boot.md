
- 我们实现v-model组件时 通常使用 value字段接受值 可以更改 value字段
we always implement v-model like this
bind value and emit 'input'
use this 
```
   model: {
      prop: 'value',
      event: 'change'
    }
```

- 当 table 没有提供render方法时 我们要自定义内容 这时候就需要用到 $createElement

```
testRender(row, column, cellValue) {
      const r = this.$createElement
      return this.$createElement('div', [
        r(
          'el-button',
          {
            props: { type: 'primary' },
            on: { click: () => { this.clickHandler(cellValue) } }
          },
          'button1'
        ),
        r(
          'el-button',
          {
            props: { type: 'primary' },
            on: { click: this.clickHandler }
          },
          'button2'
        )
      ])
    },
    clickHandler(v) {
      console.log(v)
    }

```
- watch 监控变化，但是首次需要默认执行怎么办 可以用immediate

```
watch: {
  text: {
    handler: 'fetchText',
    immediate: true
  }
}
```
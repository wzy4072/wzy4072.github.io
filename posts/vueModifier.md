### .stop .native

some time,we have to use a lot of events in our web-front projects
i had meet some problem on vue modifier
by a little test , i see .stop and .native ,make notes for everyone.

### .stop

> this is only for child components when you define theme
> .stop can help you to stop event to parents dom

```
// child component MyBtn

<template>
  <div @click.stop="childEvent">this is my button</div>
</template>
methods: {
  childEvent () {
    console.log('child')
  }
}
```

```
// parent component

<template>
  <div @click="parentEvent">
  <h2>this is form  </h2>
  <my-btn></my-btn>
  </div>
</template>
methods: {
  parentEvent () {
    console.log('parent')
  }
}
```

- click tag h2  
\> parent
- click my-btn  
\> child


### .native

> this is only for parent bind event on child components
> with out .native ,this event won't work

```
// child component MyBtn

<template>
  <div @click="childEvent"><slot></slot></div>
</template>
methods: {
  childEvent () {
    console.log('child')
  }
}
```

```
// parent component

<template>
  <div>
  
    <my-btn @click="parentEvent1">btn1</my-btn>

    <my-btn @click.native="parentEvent2">btn2</my-btn>

  </div>
</template>
methods: {
  parentEvent1 () {
    console.log('p1')
  },
  parentEvent1 () {
    console.log('p2')
  }
}
```

- click btn1  
\> child
- click my-btn  
\> child  
\> p2  


now it's easy to know how to use .stop and .native

# vue-slim-loader
webpack slim loader

# Usage

**config/webpack/loaders/vue.js**
```ruby
module.exports = {
  test: /\.vue(\.erb)?$/,
  use: [{
    loader: 'vue-loader',
    options: {
      loaders: {
        slim: "vue-slim-loader"
      },
      extractCSS
    }
  }]
}
```

**any.vue**
```html
<template lang="slim">
#app_id
  p
    | {{message}}
</template>

<script>
</script>
```

# PR test 1

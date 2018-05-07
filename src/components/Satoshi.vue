<template>
  <div class="satoshi">
    
    <input type="text" ref="satoshi-currency" value=""> 사토시는 <br/>
    한화로 <button ref="exchange-money">얼마?</button>
    <div class="result-krw-currency">

    </div>
  </div>
</template>

<script>
export default {
  name: 'Satoshi',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

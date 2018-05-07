<template>
  <div class="satoshi container">
    <div class="input-group">
      <input type="number" class="form-control col-4" placeholder="satoshi"
             ref="satoshiCurrency" aria-label="satoshi-currency" aria-describedby="basic-addon1"
      >
    </div>
    <div class="calculate">
      한화로
      <button type="button" class="btn btn-light" v-on:click="calculateCurrency">얼마?</button>
      <div class="resultKrw">
        <span class="priceResult">
          {{ krwPrice !== null ? krwPrice : '' }}
          {{ krwPrice !== null ? '원' : '' }}
        </span>
      </div>
      <div class="description">
        <p>upbit로부터 비트코인 가격을 불러와 한화로 계산합니다</p>
        <p>버튼을 클릭하는 순간의 가격으로 계산합니다</p>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'

import VueAxios from 'vue-axios'
import axios from 'axios'

Vue.use(VueAxios, axios)

export default {
  name: 'Satoshi',
  created() {
    this.callBtcPric()

  },
  data () {
    return {
      'btcPrice': null,
      'krwPrice': null
    }
  },
  methods: {
    calculateCurrency() {
      this.callBtcPric();
      let satoshi = this.btcPrice / 100000000;
      console.log(this.$refs.satoshiCurrency.value)
      this.krwPrice = satoshi * parseInt(this.$refs.satoshiCurrency.value);
    },
    callBtcPric() {
      Vue.axios.get('https://crix-api-endpoint.upbit.com/v1/crix/candles/minutes/10?code=CRIX.UPBIT.KRW-BTC').then((response) => {
        let currentPrice = response.data[0].tradePrice
        this.btcPrice = parseInt(currentPrice)
      }).catch((errorResponse) => {
        console.log(errorResponse)
      })

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.satoshi {
  .input-group {
    margin-bottom: 10px;
    input {
      margin: 0 auto;
    }
  }
  .result-krw-currency {
    margin-top: 10px;
  }
  .priceResult{
    font-size: 1.5em;
    color: #42b983;
  }
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>

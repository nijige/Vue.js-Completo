export default {
  name: "DolarHoje",
  data() {
    return {
      valorDolar: 0,
    };
  },
  template: `<p>Valor do dolar/real:{{valorDolar}}</p>`,
  methods: {
    puxarDolar() {
      fetch("https://www.mercadobitcoin.net/api/BTC/ticker/")
        .then((r) => r.json())
        .then((r) => {
          this.valorDolar = r.ticker.high;
        });
    },
  },
  created() {
    this.puxarDolar();
  },
};

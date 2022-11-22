import DolarHoje from "./DolarHoje.js"

export default{
    name:"AcaoHoje",
    components:{
        DolarHoje,

    },
    data() {
        return {
            valorMercado: 0,
        }
    },
   
    template: `
    <div>
    <p> Valor da Apple:{{valorMercado}}</p>
    <dolar-hoje></dolar-hoje>
    </div>
    
    
    `,

    methods: {
        puxarAcao(){
            fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
            .then(r => r.json())
            .then(r => {
                this.valorMercado = r.USDBRL;
            } )
        }
    },
    created() {
        this.puxarAcao();
    },

}
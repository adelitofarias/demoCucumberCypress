const { AssertionsBaseExtended } = require("@utils/assertions/assertionsBaseExtended");

class AssertionsGetMunicipalitiesStandard extends AssertionsBaseExtended {

    verifyPageItens(response, page){
        expect(response.body, `O número de locais retornados foi: ${response.body.length}`).to.have.length.at.most(page);
    }

    verifyMunicipalitiesIsFiltered(response) {
        /*
          Estratégia: iterar por cada objeto da lista verificando
          se seu atributo "created_at" contém uma data superior 
          a data de início e inferior a data de fim. Se para 
          todos os objetos isso for verdadeiro significa que os 
          objetos respeitam o filtro de datas.
        */
        const dataInicio = new Date(); //Pega a data atual
        dataInicio.setMonth(dataInicio.getMonth() - 1) //Pega o mês anterior (no objeto Date os meses vão de 0 a 11)
        dataInicio.setDate(1); //Pega ano atual

        const dataFim = new Date(); //Pega data atual
        dataFim.setDate(28);    //Coloca o dia como sendo 28

        const dentroDoIntervalo = response.body.every((element) => { //verifica em cada item
            const dataAtual = new Date(element.created_at);
            return dataAtual >= dataInicio && dataAtual <= dataFim;
        });

        expect(dentroDoIntervalo).to.be.true;
    }

}

export const assertionsGetMunicipalitiesStandard = new AssertionsGetMunicipalitiesStandard();
import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsGetProceduretypesStandard extends AssertionsBaseExtended {
    
    verifyPageItens(response, page){
        expect(response.body, `O número de tipos de procedimentos retornados foi: ${response.body.length}`).to.have.length.at.most(page);
    }

    compararName(a, b){
        return a.name.localeCompare(b.name);
    }

    verifyOrdenationString(response, procedure, itens){
        let i = 0;
        for(i = 0; i < itens; i++){
            if(response[0].name != procedure[0].name){
                return false;
            }
        }
        return true;
    }

    verifyProcedureTypesIsFiltered(response) {
        /*
          Estratégia: iterar por cada objeto da lista verificando
          se seu atributo "created_at" contém uma data superior 
          a data de início e inferior a data de fim. Se para 
          todos os objetos isso for verdadeiro significa que os 
          objetos respeitam o filtro de datas.
        */
        const dataInicio = new Date(); //Pega a data atual
        dataInicio.setMonth(dataInicio.getMonth() - 1) //Pega o mês anterior (no objeto Date os meses vão de 0 a 11)
        dataInicio.setDate(1); //Coloca o dia da data início pra 1

        const dataFim = new Date(); //Pega data atual
        dataFim.setDate(31);    //Coloca o dia como sendo 28

        const dentroDoIntervalo = response.body.every((element) => { //verifica em cada item
            const dataAtual = new Date(element.created_at);
            return dataAtual >= dataInicio && dataAtual <= dataFim;
        });

        expect(dentroDoIntervalo).to.be.true;
    }
}

export const assertionsGetProceduretypesStandard = new AssertionsGetProceduretypesStandard();
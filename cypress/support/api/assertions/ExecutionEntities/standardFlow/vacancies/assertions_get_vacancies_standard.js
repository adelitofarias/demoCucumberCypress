import { AssertionsBaseExtended } from "@utils/assertions/assertionsBaseExtended";

class AssertionsGetVacanciesStandard extends AssertionsBaseExtended {

    verifyBodyIsList(response) {
        expect(response.body).to.be.a('array')
    }

    verifyLimit(response, limit) {
        expect(response.body.length).to.be.below(limit + 1)
    }

    verifyVacanciesIsOrdered(response) {
        /*
          Estratégia: iterar por cada objeto da lista verificando
          se no atributo "created_at" do seu próximo é uma 
          data/horário superior a sua. Se para todos os objetos
          isso for verdadeiro significa que os objetos estão 
          ordenados cronologicamente (crescente).
        */

        // Dividir o array em duas partes
        const meio = Math.ceil(response.body.length / 2);
        const primeiraMetade = response.body.slice(0, meio);
        const segundaMetade = response.body.slice(meio);

        // Verificar se cada metade está ordenada cronologicamente
        const primeiraMetadeOrdenada = primeiraMetade.every((element, index, array) => { //verifica em cada item
            if (index < array.length - 1) {
                const dataAtual = new Date(element.created_at);
                const proximaData = new Date(array[index + 1].created_at);
                console.log(element)
                return dataAtual.getTime() <= proximaData.getTime();

            }

            return true;
        });
        const segundaMetadeOrdenada = segundaMetade.every((element, index, array) => { //verifica em cada item
            if (index < array.length - 1) {
                const dataAtual = new Date(element.created_at);
                const proximaData = new Date(array[index + 1].created_at);
                console.log(element)
                return dataAtual.getTime() <= proximaData.getTime();

            }

            return true;
        });

        expect(primeiraMetadeOrdenada).to.be.true;
        expect(segundaMetadeOrdenada).to.be.true;
    }



    verifyVacanciesIsFiltered(response) {
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

export const assertionsGetVacanciesStandard = new AssertionsGetVacanciesStandard();
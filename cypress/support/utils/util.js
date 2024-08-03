import { jwtDecode } from "jwt-decode";

class Util {

    analisaWindow = () => {
        cy.window().then((win) => {
            cy.stub(win, 'open').as('open')
        })
    }

    verificaNovaJanelaAberta = () => {
        cy.get('@open').should('be.calledOnce')
    }

    dataLocal() {
        const data = new Date();
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0'); // +1 porque os meses são indexados a partir de 0
        const ano = data.getFullYear();
        const dataFormatada = dia + '/' + mes + '/' + ano;
        return dataFormatada
    }

    randomIndex(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }

    gerarNumero(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    gera_random(n) {
        return Math.floor(Math.random() * (n + 1));
    }

    mod(dividendo, divisor) {
        return Math.round(dividendo - Math.floor(dividendo / divisor) * divisor);
    }

    geradorLocalCPF() {
        const rnd = (n) => Math.round(Math.random() * n);
        const mod = (base, div) => Math.round(base - Math.floor(base / div) * div)
        const n = Array(9).fill('').map(() => rnd(9));

        let d1 = n.reduce((total, number, index) => (total + (number * (10 - index))), 0)
        d1 = 11 - mod(d1, 11);
        if (d1 >= 10) d1 = 0;

        let d2 = (d1 * 2) + n.reduce((total, number, index) => (total + (number * (11 - index))), 0)
        d2 = 11 - mod(d2, 11);
        if (d2 >= 10) d2 = 0;

        return `${n.join('')}${d1}${d2}`
    }

    geradorLocalCNPJ() {
        let total_array = 8;
        let n = 9;
        let [n1, n2, n3, n4, n5, n6, n7, n8] = Array.from({ length: total_array }, () => this.gera_random(n));
        let n9 = 0;
        let n10 = 0;
        let n11 = 0;
        let n12 = 1;

        let d1 = n12 * 2 + n11 * 3 + n10 * 4 + n9 * 5 + n8 * 6 + n7 * 7 + n6 * 8 + n5 * 9 + n4 * 2 + n3 * 3 + n2 * 4 + n1 * 5;
        d1 = 11 - (this.mod(d1, 11));
        if (d1 >= 10) d1 = 0;

        let d2 = d1 * 2 + n12 * 3 + n11 * 4 + n10 * 5 + n9 * 6 + n8 * 7 + n7 * 8 + n6 * 9 + n5 * 2 + n4 * 3 + n3 * 4 + n2 * 5 + n1 * 6;
        d2 = 11 - (this.mod(d2, 11));
        if (d2 >= 10) d2 = 0;

        return `${n1}${n2}${n3}${n4}${n5}${n6}${n7}${n8}${n9}${n10}${n11}${n12}${d1}${d2}`;
    }

    gerarString(tamanho) {
        var string = "";
        var caracteres =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < tamanho; i++) {
            string += caracteres.charAt(
                Math.floor(Math.random() * caracteres.length)
            );
        }
        return string;
    }

    gerarEmail() {
        var email = this.gerarString(this.gerarNumero(6, 18))
        return email + "@email.com";
    }

    decodeJWTToken(token) {
        if (typeof token !== 'string') {
            throw new Error('Token inválido: deve ser uma string');
        }
        const decodedToken = jwtDecode(token);
        return decodedToken.iss;
    }

    formatarDataParaCypress(dataString) {
        // separar a data e a hora
        const partes = dataString.split(' às ');

        // separar o dia, mês e ano
        const dataPartes = partes[0].split('/');
        const dia = dataPartes[0];
        const mes = dataPartes[1];
        const ano = dataPartes[2];

        // separar a hora e o minuto
        const horaPartes = partes[1].split(':');
        const hora = horaPartes[0];
        const minuto = horaPartes[1];

        // formatar a data para o formato aceito pelo Cypress
        const dataFormatada = `${ano}-${mes}-${dia}T${hora}:${minuto}:00`;

        return dataFormatada;
    }

    sortIgnoreCase(arr) {
        return arr.map(item => item.toLowerCase())
            .sort()
            .map(item => item.charAt(0).toUpperCase() + item.slice(1));
    }

    generateLowerCaseEmail(email) {
        return email.toLowerCase();
    }

    gerarCaminhoArquivoRelatorio() {
        const dataAtual = new Date();
        const mesesDoAno = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
        const mesAtual = mesesDoAno[dataAtual.getMonth()];
        let anoAtual = dataAtual.getFullYear(); anoAtual = anoAtual.toString().slice(-2);

        return `cypress/downloads/relatório-${mesAtual}-${anoAtual}`;
    }

    gerarCaminhoArquivoZip() {
        const dataAtual = new Date();
        const diaAtual = String(dataAtual.getDate()).padStart(2, '0');
        const mesAtual = String(dataAtual.getMonth() + 1).padStart(2, '0');
        const anoAtual = dataAtual.getFullYear();

        return `cypress/downloads/relatorios-${diaAtual}-${mesAtual}-${anoAtual}.zip`;
    }

    leituraDoArquivoXlsx() {
        const caminhoArquivo = this.gerarCaminhoArquivoRelatorio();
        const XLSX = require('xlsx');

        cy.readFile(`${caminhoArquivo}.xlsx`, 'binary').then((fileContent) => {
            const workbook = XLSX.read(fileContent, { type: 'binary' });
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const csvData = XLSX.utils.sheet_to_csv(worksheet);

            cy.writeFile(`${caminhoArquivo}.csv`, csvData, 'utf8');
        });
    }

    validarArquivoCSV() {
        const caminhoArquivoCSV = this.gerarCaminhoArquivoRelatorio() + '.csv';

        return cy.readFile(caminhoArquivoCSV).then((fileContent) => {
            const csvLines = fileContent.trim().split('\n');
            const primeiraLinha = csvLines[1].split(',');

            const registroSolicitacaoCSV = primeiraLinha[0].trim();
            const nomeResponsavelCSV = primeiraLinha[1].trim();
            const nomeAnimalCSV = primeiraLinha[2].trim();
            const nomeProcedimentoCSV = primeiraLinha[3].trim();
            const dataSolicitacaoCSV = primeiraLinha[8].trim();

            return {
                registroSolicitacaoCSV, dataSolicitacaoCSV, nomeResponsavelCSV, nomeAnimalCSV, nomeProcedimentoCSV
            };
        });
    }

    // Obter o invervalo da data atual no formato da requisição para a API
    obterIntervaloDiaAtual() {

        const dataAtual = new Date();
        const ano = dataAtual.getFullYear();
        const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
        const dia = String(dataAtual.getDate()).padStart(2, '0');

        const dataFormatada = `${ano}-${mes}-${dia}`;
        const intervaloDataAtual = `created_at=gte:${dataFormatada}T00:00:00.000Z&created_at=lte:${dataFormatada}T23:59:59.999Z`;

        return intervaloDataAtual;
    }
    // Obter o invervalo da semana atual no formato da requisição para a API
    obterIntervaloSemanaAtual() {
        const dataAtual = new Date();

        //primeiro dia da semana (domingo)
        const primeiroDia = new Date(dataAtual.setDate(dataAtual.getDate() - dataAtual.getDay()));
        const anoInicio = primeiroDia.getFullYear();
        const mesInicio = String(primeiroDia.getMonth() + 1).padStart(2, '0');
        const diaInicio = String(primeiroDia.getDate()).padStart(2, '0');
        const dataInicioFormatada = `${anoInicio}-${mesInicio}-${diaInicio}T00:00:00.000Z`;

        // Último dia da semana (sábado)
        const ultimoDia = new Date(primeiroDia);
        ultimoDia.setDate(ultimoDia.getDate() + 6);
        const anoFim = ultimoDia.getFullYear();
        const mesFim = String(ultimoDia.getMonth() + 1).padStart(2, '0');
        const diaFim = String(ultimoDia.getDate()).padStart(2, '0');
        const dataFimFormatada = `${anoFim}-${mesFim}-${diaFim}T23:59:59.999Z`;

        const intervaloSemanaAtual = `created_at=gte:${dataInicioFormatada}&created_at=lte:${dataFimFormatada}`;

        return intervaloSemanaAtual;
    }

    // Obter o invervalo do mês atual no formato da requisição para a API
    obterIntervaloMesAtual() {
        const dataAtual = new Date();

        // Obter o primeiro dia do mês
        const primeiroDiaMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 1);
        const anoInicio = primeiroDiaMes.getFullYear();
        const mesInicio = String(primeiroDiaMes.getMonth() + 1).padStart(2, '0');
        const diaInicio = String(primeiroDiaMes.getDate()).padStart(2, '0');
        const dataInicioFormatada = `${anoInicio}-${mesInicio}-${diaInicio}T00:00:00.000Z`;

        // Obter o último dia do mês
        const ultimoDiaMes = new Date(dataAtual.getFullYear(), dataAtual.getMonth() + 1, 0);
        const anoFim = ultimoDiaMes.getFullYear();
        const mesFim = String(ultimoDiaMes.getMonth() + 1).padStart(2, '0');
        const diaFim = String(ultimoDiaMes.getDate()).padStart(2, '0');
        const dataFimFormatada = `${anoFim}-${mesFim}-${diaFim}T23:59:59.999Z`;

        const intervaloMesAtual = `created_at=gte:${dataInicioFormatada}&created_at=lte:${dataFimFormatada}`;

        return intervaloMesAtual;
    }

    // quebrar datas desse formato "Datas: 17/07 a 31/07/2024" 
    quebrarData(dataStr) {
        // Remover o prefixo "Datas: "
        let data = dataStr.replace("Datas: ", "");

        // Dividir a string com base no " a "
        let datas = data.split(" a ");

        // Extrair a primeira e a segunda data
        let primeiraData = datas[0].split("/");
        let segundaData = datas[1].split("/");

        // Extrair dia, mês e ano
        let diaInicio = primeiraData[0]// Garantir que o dia tenha dois dígitos
        let mesInicio = primeiraData[1] // Garantir que o mês tenha dois dígitos
        let anoInicio = primeiraData[2];

        let diaFim = segundaData[0].padStart(2, '0'); // Garantir que o dia tenha dois dígitos
        let mesFim = segundaData[1].padStart(2, '0'); // Garantir que o mês tenha dois dígitos
        let anoFim = segundaData[2];

        // Retornar um objeto com as datas completas
        return {
            inicio: `${diaInicio}${mesInicio}${anoInicio}`,
            fim: `${diaFim}${mesFim}${anoFim}`
        };
    }

    quebrarFrase(frase) {
        // Remover o prefixo "Exibindo "
        let semPrefixo = frase.replace("Exibindo ", "");

        // Dividir a string com base em "-" e " de "
        let partes = semPrefixo.split(/[-\sde\s]+/);

        // Converter as partes em números inteiros
        let inicio = parseInt(partes[0], 10);
        let fim = parseInt(partes[1], 10);
        let total = parseInt(partes[2], 10);

        // Retornar um objeto com os números extraídos
        return {
            inicio: inicio,
            fim: fim,
            total: total
        };
    }

}

export const util = new Util();
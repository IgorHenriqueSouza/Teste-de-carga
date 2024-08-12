import http from "k6/http";
import { sleep } from "k6";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

const BASE_URL1 = "";
const BASE_URL2 = "";
const BASE_URL3 = "";
const BASE_URL4 = "";
const BASE_URL5 = "";
const BASE_URL6 = "";
const BASE_URL7 = "";
const BASE_URL8 = "";
const BASE_URL9 = "";
const BASE_URL10 = "";
const BASE_URL11 = "";
const BASE_URL12 = "";
const BASE_URL13 = "";

export const options = {
  stages: [
    {
      target: 100,
      duration: "5m",
    } /* {target: 10, duration: "2m"}, {target: 10, duration: "5m"},  {target: 10, duration: "2m"}, {target: 10, duration: "1m"   } */,
    // Adicione mais estágios aqui, se necessário
    ,
  ],
};

export default function () {
  // Faz a primeira requisição
  const response1 = http.get(BASE_URL1);
  if (response1.status !== 200) {
    console.error(`Erro na requisição 1: ${response1.status}`);
  } else {
    console.log(
      `Resultado da Consulta 1: ${JSON.parse(response1.body).result}`
    );
  }

  // Espera um segundo antes de fazer a próxima requisição
  sleep(1);

  // Faz a segunda requisição
  const response2 = http.get(BASE_URL2);
  if (response2.status !== 200) {
    console.error(`Erro na requisição 2: ${response2.status}`);
  } else {
    console.log(
      `Resultado da Consulta 2: ${JSON.parse(response2.body).result}`
    );
  }

  // Espera um segundo antes de fazer a próxima requisição
  sleep(1);

  // Faz a terceira requisição
  const response3 = http.get(BASE_URL3);
  if (response3.status !== 200) {
    console.error(`Erro na requisição 3: ${response3.status}`);
  } else {
    console.log(
      `Resultado da Consulta 3: ${JSON.parse(response3.body).result}`
    );
  }
  // Espera um segundo antes de fazer a próxima requisição
  sleep(1);

  const response4 = http.get(BASE_URL4);
  if (response4.status !== 200) {
    console.error(`Erro na requisição 4: ${response4.status}`);
  } else {
    console.log(
      `Resultado da Consulta 4: ${JSON.parse(response4.body).result}`
    );
  }
  // Espera um segundo antes de fazer a próxima requisição
  sleep(1);

  const response5 = http.get(BASE_URL5);
  if (response5.status !== 200) {
    console.error(`Erro na requisição 5: ${response5.status}`);
  } else {
    console.log(
      `Resultado da Consulta 5: ${JSON.parse(response5.body).result}`
    );
  }
  // Espera um segundo antes de fazer a próxima requisição
  sleep(1);

  const response6 = http.get(BASE_URL6);
  if (response6.status !== 200) {
    console.error(`Erro na requisição 6: ${response6.status}`);
  } else {
    console.log(
      `Resultado da Consulta 6: ${JSON.parse(response6.body).result}`
    );
  }
  // Espera um segundo antes de fazer a próxima requisição
  sleep(1);

  const response7 = http.get(BASE_URL7);
  if (response7.status !== 200) {
    console.error(`Erro na requisição 7: ${response7.status}`);
  } else {
    console.log(
      `Resultado da Consulta 7: ${JSON.parse(response7.body).result}`
    );
  }
  // Espera um segundo antes de fazer a próxima requisição
  sleep(1);

  const response8 = http.get(BASE_URL8);
  if (response8.status !== 200) {
    console.error(`Erro na requisição 8: ${response8.status}`);
  } else {
    console.log(
      `Resultado da Consulta 8: ${JSON.parse(response8.body).result}`
    );
  }
  // Espera um segundo antes de fazer a próxima requisição
  sleep(1);
  const response9 = http.get(BASE_URL9);
  if (response9.status !== 200) {
    console.error(`Erro na requisição 9: ${response9.status}`);
  } else {
    console.log(
      `Resultado da Consulta 9: ${JSON.parse(response9.body).result}`
    );
  }
  // Espera um segundo antes de fazer a próxima requisição
  sleep(1);

  const response10 = http.get(BASE_URL10);
  if (response10.status !== 200) {
    console.error(`Erro na requisição 10: ${response10.status}`);
  } else {
    console.log(
      `Resultado da Consulta 10: ${JSON.parse(response10.body).result}`
    );
  }
  // Espera um segundo antes de fazer a próxima requisição
  sleep(1);

  const response11 = http.get(BASE_URL11);
  if (response11.status !== 200) {
    console.error(`Erro na requisição 11: ${response11.status}`);
  } else {
    console.log(
      `Resultado da Consulta 11: ${JSON.parse(response11.body).result}`
    );
  }
  // Espera um segundo antes de fazer a próxima requisição
  sleep(1);

  const response12 = http.get(BASE_URL12);
  if (response12.status !== 200) {
    console.error(`Erro na requisição 12: ${response12.status}`);
  } else {
    console.log(
      `Resultado da Consulta 12: ${JSON.parse(response12.body).result}`
    );
  }
  // Espera um segundo antes de fazer a próxima requisição
  sleep(1);

  const response13 = http.get(BASE_URL13);
  if (response13.status !== 200) {
    console.error(`Erro na requisição 13: ${response13.status}`);
  } else {
    console.log(
      `Resultado da Consulta 13: ${JSON.parse(response13.body).result}`
    );
  }
}

// Função para gerar relatório HTML
export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}
/* { cdProd: "1035", idCarCtr: "0", nrCPF: "77957454070", qtPrest: "7", txJuros: "1", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "81428139044", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "64031026056", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "28723029056", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "18198987096", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "50998335002", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "34121382072", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "40230000002", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "68191994062", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "97926678066", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "18784895004", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "10994006004", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "57327727078", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "68931270062", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "68605070048", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "27635006096", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "16628803082", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "25108562004", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "52383664006", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "22228703052", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "38488327048", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "90454698046", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "24737100072", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "47242305098", qtPrest: "7", txJuros: "3.5", vlContra:"200" },
  { cdProd: "1035", idCarCtr: "0", nrCPF: "98930922058", qtPrest: "7", txJuros: "3.5", vlContra:"200" }, */

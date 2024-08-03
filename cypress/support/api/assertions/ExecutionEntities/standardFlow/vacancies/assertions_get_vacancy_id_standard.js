const {
  AssertionsBaseExtended,
} = require("@utils/assertions/assertionsBaseExtended");

class Assertions_get_vacancy_id_standard extends AssertionsBaseExtended {
  verifyVacanciesEqual(vacancies, response) {
    expect(
      response.body.female_feline,
      `a quantidade de vagas para felinos fêmea é: ${response.body.female_feline}`
    ).to.eq(10);
    expect(
      response.body.male_feline,
      `a quantidade de vagas para felinos macho é: ${response.body.male_feline}`
    ).to.eq(5);
    expect(
      response.body.female_canine,
      `a quantidade de vagas para caninos fêmea é: ${response.body.female_canine}`
    ).to.eq(10);
    expect(
      response.body.male_canine,
      `a quantidade de vagas para caninos macho é: ${response.body.male_canine}`
    ).to.eq(5);
    expect(
      response.body.municipality_id,
      `o id do município é: ${response.body.municipality_id}`
    ).to.eq(vacancies.municipality_id);
    expect(
      response.body.executionentity_id,
      `o id da entidade de execução é: ${response.body.executionentity_id}`
    ).to.eq(vacancies.executionentity_id);
    expect(
      response.body.proceduretype_id,
      `o id do tipo de procedimento é: ${response.body.proceduretype_id}`
    ).to.eq(vacancies.proceduretype_id);
  }
}

export const assertions_get_vacancy_id_standard =
  new Assertions_get_vacancy_id_standard();

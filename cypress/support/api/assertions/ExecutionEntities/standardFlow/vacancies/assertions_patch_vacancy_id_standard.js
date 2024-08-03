const {
  AssertionsBaseExtended,
} = require("@utils/assertions/assertionsBaseExtended");

class Assertions_patch_vacancy_id_standard extends AssertionsBaseExtended {
  verifyVacanciesEqual(vacancies, response) {
    expect(
      response.body.female_feline,
      `a quantidade de vagas para felinos fêmea é: ${response.body.female_feline}`
    ).to.eq(vacancies.female_feline);
    expect(
      response.body.male_feline,
      `a quantidade de vagas para felinos macho é: ${response.body.male_feline}`
    ).to.eq(vacancies.male_feline);
    expect(
      response.body.female_canine,
      `a quantidade de vagas para caninos fêmea é: ${response.body.female_canine}`
    ).to.eq(vacancies.female_canine);
    expect(
      response.body.male_canine,
      `a quantidade de vagas para caninos macho é: ${response.body.male_canine}`
    ).to.eq(vacancies.male_canine);
  }
}

export const assertions_patch_vacancy_id_standard =
  new Assertions_patch_vacancy_id_standard();

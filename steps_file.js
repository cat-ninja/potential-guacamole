const { I, loginPage } = inject();

module.exports = function () {
  return actor({
    loginAs: user => {
      I.fillField(loginPage.username, user.name);
      I.fillField(loginPage.password, user.password);
      I.click(loginPage.login);
    },
  });
};

const { I, loginPage } = inject();

Feature('dummy').tag('@test');

const u = {
  name: 'admin@admin.com',
  password: '1q2w3e4r5t!',
};

Scenario('test something', async () => {
  var u = await I.haveMultiple('user', 3, { company_id: 1 });
});

module.exports = (plop) => {
  plop.setGenerator('Component', {
    description: 'Component generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component Name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: `src/HTML/components/{{pascalCase name}}.html`,
        templateFile: 'templates/component.hbs',
      },
      {
        type: 'add',
        path: `src/SASS/components/{{pascalCase name}}.scss`,
        templateFile: 'templates/component-styles.hbs',
      },
    ],
  });
};

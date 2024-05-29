import { mount } from 'cypress/react';
import { IntlProvider } from 'react-intl';
import { messages } from '../../src/messages'; // Adjust the path to your messages file

Cypress.Commands.add('mountWithIntl', (component) => {
  const locale = 'en'; // Use 'en' or your desired locale
  mount(
    <IntlProvider locale={locale} messages={messages[locale]}>
      {component}
    </IntlProvider>
  );
});

import React from 'react';

import TextIcon from 'components/molecules/textIcon';
import List from 'components/molecules/list';

/**
 * Component to display contact info
 */
const ContactInfo = (props) => {
  const email = (<TextIcon icon="envelope" text="savramis.sartios@gmail.com" color="gray" />);
  const linkedin = (<TextIcon icon="linkedin" text="linkedin.com/sartios" color="gray" />);
  const work = (<TextIcon icon="laptop" text="web developer @ordereze" color="gray" />);
  const location = (<TextIcon icon="marker" text="thessaloniki, greece" color="gray" />);

  const items = [
    { component: email },
    { component: linkedin },
    { component: work },
    { component: location },
  ];

  return (<List items={items} />);
};

export default ContactInfo;

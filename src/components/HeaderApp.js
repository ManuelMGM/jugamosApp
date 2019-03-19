import React from 'react';
import { Header, Popup, Icon } from 'semantic-ui-react';

function HeaderApp(props) {
  const renderMenu = () => {
    if (props.children) {
      return (
        <Popup trigger={<Icon name="sidebar" size="big" inverted />}>
          {props.children}
        </Popup>
      );
    }
  };
  return (
    <div>
      <header className="custom-header">
        <Header as="h1" floated="left" inverted>
          Jugamos?
        </Header>
        {renderMenu()}
      </header>
    </div>
  );
}

export default HeaderApp;

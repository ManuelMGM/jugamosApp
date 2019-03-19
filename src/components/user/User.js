import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
import HeaderApp from '../HeaderApp';
import firebase from 'firebase';

function User() {
  console.log(firebase.auth().currentUser)
  return (
    <div>
      <HeaderApp>
        <Button basic content="Cerrar Sesión" />
      </HeaderApp>
      <Button circular size="massive" compact>
        <Icon name="futbol" />
        RESERVAR
      </Button>
    </div>
  );
}

export default User;

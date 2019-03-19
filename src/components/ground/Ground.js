import React from 'react';
import { Link } from 'react-router-dom';
import { Label, Icon } from 'semantic-ui-react';
import HeaderApp from '../HeaderApp';
import firebase from 'firebase';

function Ground() {
  console.log(firebase.auth().currentUser)
  return (
    <div>
      <HeaderApp>
        <Link to={'/groundFields'}>Mis horarios</Link> <br />
        <Link to={'/login'}>Cerrar sesión</Link>
      </HeaderApp>
      <Label>Nombre del Predio</Label>
      <br/>
      <Label>
        <Icon name="map marker alternate" />
        Ubicación del predio
      </Label>
      <br />
      <Label>
        <Icon name="phone" />
        Telefono
      </Label>
    </div>
  );
}

export default Ground;

import React, { useState } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import HeaderApp from '../HeaderApp';

function Login(props) {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const profileUrl = role => {
    return role === 'jugador' ? 'user' : 'ground';
  };
  const onSubmit = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, pwd)
      .then(user => {
        firebase
          .database()
          .ref('/users/' + user.user.uid)
          .once('value', snapshot => {
            const role = snapshot.val().role
            props.history.push(`/${profileUrl(role)}/${user.user.uid}`);
          });
      })
      .catch(err => console.error(err));
  };

  return (
    <div>
      <HeaderApp />
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <label>E-MAIL</label>
          <Input
            placeholder="example@email.com"
            name="email"
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>CONTRASEÑA</label>
          <Input
            placeholder="Contraseña"
            name="pwd"
            type="password"
            required
            value={pwd}
            onChange={e => setPwd(e.target.value)}
          />
        </Form.Field>
        <Button type="submit" disabled={email === '' || pwd === ''} circular>
          CONFIRMAR
        </Button>
        <Link to="/create">Crear cuenta nueva</Link>
      </Form>
    </div>
  );
}

export default Login;

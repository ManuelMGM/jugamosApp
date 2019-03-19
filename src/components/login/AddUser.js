import React, { useState, useEffect } from 'react';
import { Form, Button, Input, Dropdown } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import firebase from 'firebase';
import HeaderApp from '../HeaderApp';

function AddUser(props) {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwd2, setPwd2] = useState('');
  const [role, setRole] = useState('');
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    dropOptions();
  }, []);

  const profileUrl = () => {
    return role === 'jugador' ? 'user' : 'ground';
  };
  const onSubmit = () => {
    if (pwd === pwd2) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, pwd)
        .then(user => {
          firebase
            .database()
            .ref('users/' + user.user.uid)
            .set({
              email,
              role,
            });
          props.history.push(`/${profileUrl()}`);
        })
        .catch(err => console.error(err));
    }
  };

  const dropOptions = () => {
    firebase
      .database()
      .ref('/roles')
      .once('value', snapshot => {
        const arr = snapshot.val().map(item => ({
          key: item.value,
          text: item.label,
          value: item.value,
        }));
        setRole(arr[0].value);
        setRoles(arr);
      });
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
          <Input
            placeholder="Confirmar Contraseña"
            name="pwd2"
            type="password"
            required
            value={pwd2}
            onChange={e => setPwd2(e.target.value)}
          />
        </Form.Field>
        <span>
          SOY:{' '}
          <Dropdown
            inline
            options={roles}
            value={role}
            onChange={(e, data) => {
              setRole(data.value);
            }}
          />
        </span>
        <Button
          type="submit"
          disabled={email === '' || pwd === '' || pwd2 === ''}
          circular
        >
          CONFIRMAR
        </Button>
      </Form>
      <Link to="/login">iniciar Sesión</Link>
    </div>
  );
}

export default AddUser;

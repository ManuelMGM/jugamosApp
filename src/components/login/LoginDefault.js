import React from 'react';
import { Image, Header, Button } from 'semantic-ui-react';

function LoginDefault() {
  const renderImage = () => {
    return (
      <Image
        src="https://react.semantic-ui.com/images/wireframe/square-image.png"
        size="medium"
        bordered
        centered
        circular
      />
    );
  };

  const renderUserName = () => {
    return (
      <Header size="huge" textAlign="center" inverted>
        Nombre
      </Header>
    );
  };

  const renderButton = () => {
    return <Button  content="INGRESAR" circular  type="submit" icon='right arrow' labelPosition='right'/>
  };

  return (
    <div>
      {renderImage()}
      {renderUserName()}
      {renderButton()}
    </div>
  );
}

export default LoginDefault;

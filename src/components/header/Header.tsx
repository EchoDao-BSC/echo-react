import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Container } from 'components';
import Logo from 'assets/img/logo.png';

import styles from './Header.module.scss';

type Props = RouteComponentProps;

const Header: React.FC<Props> = ({ history }: Props) => {
  return (
    <Container>
      <div className="nav-header" style={{ zIndex: 1 }}>
        <Button onClick={() => history.push('/')}>
			    <img src={Logo} height='50' alt='Echo DAO' />
          <span className={styles.logoText}>Echo DAO</span>
        </Button>
        <div>
          <Button onClick={() => {}} className='btn-header' style={{marginRight: 15}} disabled>
            Launch App
          </Button>
          <Button onClick={() => {}} className='btn-header' >
            Join Presale
          </Button>
        </div>
      </div>
    </Container>
  )
}

export default withRouter(Header);

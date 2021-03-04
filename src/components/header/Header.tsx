import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { Button, IconButton } from '@material-ui/core';
import { Container } from 'components';
import { selectAccount } from 'store/account/accountSelector';
import { RootState } from 'types';
import { truncateAddress } from 'utils';
import Config from 'config';
import Logo from 'assets/img/logo.png';
import { loadAccount } from 'store/account/accountActions';

import styles from './Header.module.scss';

interface StateFromProps {
  account: ReturnType<typeof selectAccount>;
}
interface DispatchFromProps {
  loadAccount: typeof loadAccount;
}
type Props = StateFromProps & DispatchFromProps & RouteComponentProps;

const Header: React.FC<Props> = ({ account, history, loadAccount }: Props) => {
  return (
    <Container>
      <div className="nav-header" style={{ zIndex: 1 }}>
        <Button onClick={() => history.push('/')}>
			    <img src={Logo} height='50' alt='Echo DAO' />
          <span className={styles.logoText}>Echo DAO</span>
        </Button>
        {account ? (
          <Button
            variant='contained'
            className='btn-header'
            href={`${Config.etherscan}${account.address}`}
            target='_blank'
          >{truncateAddress(account.address)}</Button>
        ) : (
          <Button onClick={loadAccount} className='btn-header' >
            Join Presale
          </Button>
        )}
      </div>
    </Container>
  )
}

function mapStateToProps(
  state: RootState,
): StateFromProps {
  return {
    account: selectAccount(state),
  };
}
function mapDispatchToProps(dispatch: Dispatch): DispatchFromProps {
  return {
    loadAccount: () => dispatch(loadAccount()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Header));
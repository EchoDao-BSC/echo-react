import React, { useEffect } from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import Config from 'config';
import { Button, IconButton } from '@material-ui/core';

import { Container, Header, Footer, ParticlesContainer } from 'components';
import { RootState } from 'types';
import { selectAccount } from 'store/account/accountSelector';
import logoImage from 'assets/img/logo.png';
import telegramImage from 'assets/img/telegram.png';
import discordImage from 'assets/img/discord.png';
import githubImage from 'assets/img/github.png';
import mediumImage from 'assets/img/medium.png';

interface StateFromProps {
  account: ReturnType<typeof selectAccount>;
}
interface DispatchFromProps {}
interface OwnProps {}

type Props = StateFromProps & DispatchFromProps & OwnProps;

const FarmComposition = ({ account }: Props) => {
  const [tokenPrice, setTokenPrice] = React.useState<number>(0);
  const [pool1APY, setPool1APY] = React.useState<number>(0);
  //const [pool2APY, setPool2APY] = React.useState<number>(0);
  const [pool1TVL, setPool1TVL] = React.useState<number>(0);
  //const [pool2TVL, setPool2TVL] = React.useState<number>(0);
  // useEffect(() => {
  //   dexclient.getTokenPrice().then(res => setTokenPrice(res));
  // });
  // useEffect(() => {
  //   if (tokenPrice > 0) {
  //     dexclient.getWethLpTokenPrice().then(price => {
  //       web3client.poolGetRewardRate(web3client.pool1Contract).then(res => {
  //         const roi = res * tokenPrice / Math.pow(10, 18) / price * 86400 * 365 * 100;
  //         setPool1APY(roi);
  //       });
  //       web3client.getTotalSupply(web3client.pool1Contract).then(amount => {
  //         setPool1TVL(price * amount / Math.pow(10, Config.WethLpToken.decimals));
  //       });
  //     });
  //   }
  // }, [tokenPrice]);

  //const totalValueLocked = () => pool1TVL + pool2TVL;

  const openLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <ParticlesContainer>
      <Header />
      <Container>
        <div className='flex-v'>
          <div className='center-h mt-50'>
            <img src={logoImage} alt='Echo DAO' width='80' />
            <div className='center-v ml-20'>
              <div className='text-large'>Echo DAO</div>
            </div>
          </div>
          <div className='text-tiny text-center mt-50'>
            This project is in beta. Use at your own risk.
          </div>
          <div className='center-h mt-30'>
            <Button variant='contained' className='btn-announce'>
              Read The Announcement
            </Button>
          </div>
          <div className='center-h text-medium mt-100 mb-10 text-center' style={{ paddingLeft: 200, paddingRight: 200 }}>
            <span>Reflect DAO is a DeFi protocol which is launched by sodu and me. Also allows users to farm NFTs.</span>
          </div>
          <div className='center-h mt-50'>
            <IconButton className='mr-50' onClick={() => openLink('https://t.me/echodao')}>
              <img src={telegramImage} width="50" alt='Telegram Link' />
            </IconButton>
            <IconButton className='mr-50' onClick={() => openLink('https://discord.gg/NGWmgxVGNm')}>
              <img src={discordImage} width="50" alt='Discord Link' />
            </IconButton>
            <IconButton className='mr-50' onClick={() => openLink('https://github.com/EchoDao-BSC')}>
              <img src={githubImage} width="50" alt='Github Link' />
            </IconButton>
            <IconButton onClick={() => openLink('https://echodao.medium.com')}>
              <img src={mediumImage} width="50" alt='Medium Link' />
            </IconButton>
          </div>
        </div>
        <div className='mb-100' />
      </Container>
    </ParticlesContainer>
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
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FarmComposition)

import React from 'react';
import { Button, IconButton } from '@material-ui/core';

import { Container, Header, Footer, ParticlesContainer } from 'components';
import logoImage from 'assets/img/logo.png';
import telegramImage from 'assets/img/telegram.png';
import discordImage from 'assets/img/discord.png';
import githubImage from 'assets/img/github.png';
import mediumImage from 'assets/img/medium.png';

import Tooltip from './Tooltip';
import './styles.scss';

const data = [
  { title: 'Presale', value: 20, color: '#bf38fe' },
  { title: 'Development', value: 25, color: '#f05536' },
  { title: 'Pancake Liquidity', value: 20, color: '#2cae57' },
  { title: 'Marketing', value: 10, color: '#e2e113' },
  { title: 'Ecosystem Growth', value: 25, color: '#eb0d87' },
];

const FarmComposition = () => {
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

          <div className='center-h text-medium mt-100 mb-10 text-center' style={{ paddingLeft: 200, paddingRight: 200, lineHeight: '40px' }}>
            <span>DAO dedicated to building products and infrastructure to bring Bitcoin to DeFi on Binance Smart Chain.</span>
          </div>

          <div className='testimonial'>
            <div className='testimonial-header'>About EchoDao</div>
            <div className='testimonial-body'>
              Are we following binance smart chain? - <i>Yes, we do!</i>
              <br/><br/>
              Then do we keep Bitcoin on our chain? - <i>No, we don’t!</i>
              <br/><br/>
              Who will bring this crypto giant to BSC defi? - <i>EchoDao team will do this!</i>
            </div>
          </div>

          <div className='about'>
            <div className='about-title'>What We Are Doing</div>

            <div className='about-item'>We are building the binance smart chain version of BadgerDao under the name of Echodao, hoping the Defi on BSC grows up super fast.</div>
            <div className='about-item'>We will provide a shortcut to traders to swap stable coins easily & quickly with one click operation.</div>
          </div>

          <div className='tokenomics-container'>
            <div className='tokenomics-title'>Smart Contract</div>
            <a className="token-addr" href="https://bscscan.com/token/0xa78ec343a18f0b7f795c0a5f976d464a3d385fdc" target="_blank">0xa78ec343a18f0b7f795c0a5f976d464a3d385fdc</a>

            <div className="tokenomics">
              <Tooltip
                data={data}
              />

              <div className='allocations'>
                <div className='allocations-title'>Token Allocation</div>
                {data.map((item, idx) => (
                  <div className='allocation-item' key={idx}>
                    <div className='allocation-item-label' style={{ color: item.color }}>{item.title}</div>
                    <span className='allocation-item-value'>{item.value}%</span>
                  </div>
                ))}
                <div className='allocation-item'>
                    <div className='allocation-item-label'>Total Supply</div>
                    <span className='allocation-item-value'>50,000,000</span>
                  </div>
              </div>
            </div>
          </div>

          <div className='social-panel mt-50'>
            <h1>Join our community</h1>
            <div className='center-h'>
              <IconButton className='mr-50' onClick={() => openLink('https://t.me/echodao')}>
                <img src={telegramImage} width="50" alt='Telegram Link' />
              </IconButton>
              <IconButton className='mr-50' onClick={() => openLink('https://discord.gg/NGWmgxVGNm')}>
                <img src={discordImage} width="50" alt='Discord Link' />
              </IconButton>
              <IconButton className='mr-50' onClick={() => openLink('https://github.com/EchoDao-BSC')}>
                <img src={githubImage} width="50" alt='Github Link' />
              </IconButton>
              <IconButton onClick={() => openLink('https://medium.com/@Echodao')}>
                <img src={mediumImage} width="50" alt='Medium Link' />
              </IconButton>
            </div>
          </div>
        </div>
        <div className='mb-100' />
      </Container>
    </ParticlesContainer>
  )
}

export default FarmComposition

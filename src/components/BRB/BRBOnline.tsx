// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// React + Web3 Essentials
import React from 'react';

// External Components
import styled from 'styled-components';

// Internal Components
import { Button, Image, ItemH, ItemV, Span } from '@site/src/css/SharedStyling';
import useMediaQuery from '@site/src/hooks/useMediaQuery';

// Import Assets
import Arrow from '@site/static/assets/website/brb/schedules/arrow.svg';

// Internal Configs
import { brbOnlineList } from '@site/src/config/BRBOnlineList';
import { device } from '@site/src/config/globals';

const BRBOnline = ({sectionRef}) => {
  const isMobile = useMediaQuery(device.tablet);

  const openLink = (link: string) => {
    if (link) {
      window.open(link, '_blank');
    } else {
      return;
    }
  };
  return (
    <PartnerBountiesContainer ref={sectionRef}>
    <ItemH>
        <Span fontSize={isMobile ? "18px" : "23px"} fontWeight="200" color="#fff">
        Join Virtually, Build and Win $50k+
        </Span>
    </ItemH>
    <ItemH gap={!isMobile ? "24px" : "5px"} flexDirection={!isMobile ? 'row' : 'column'} margin="0px 0px 40px">
      <Header>BRB Online</Header>
      <Button
        background="#e64de9"
        display="flex"
        maxWidth="187px"
        alignItems="center"
        borderRadius="8px"
        padding="8px 16px 6px 16px"
        height="33px"
        margin='0 0 0 0'
        fontFamily="Glancyr, sans-serif"
        style={{ cursor: 'pointer' }}
        onClick={() =>
          openLink(
            'https://lu.ma/on4kcvxu'
          )
        }
      >
        <Span
          fontSize="16px"
          fontWeight="400"
          letterSpacing="0.3"
          margin="0 5px 0 0"
        >
          Join BRB Online
        </Span>
        <ArrowSmall />
      </Button>
    </ItemH>
    
    <GridItem>
    {brbOnlineList?.map((item, i) => (
      <PartnerLine
        key={i}
        onClick={() => openLink('https://lu.ma/on4kcvxu')}
        disabled={item?.link ? false : true}
      >
        <PartnersLogo
          src={require(`@site/static/assets/website/brb/partners/${item.srcref}.webp`).default}
          srcSet={`${require(`@site/static/assets/website/brb/partners/${item.srcref}@2x.webp`).default} 2x, ${require(`@site/static/assets/website/brb/partners/${item.srcref}@3x.webp`).default} 3x`}
          alt={item.alt}
          style={{ scale: `${item?.srcref === 'chainsafe' ? '1.2' : '1'}` }}
        />

        <BountyDescription>
          {item.text}
        </BountyDescription>

        <BountyItem>
          <DateSpan>
            {item.date}
          </DateSpan>

          <TimeSpan>
            {item.time}
          </TimeSpan>

        </BountyItem>
      </PartnerLine>
    ))}
  </GridItem>
  </PartnerBountiesContainer>
  )
}

export default BRBOnline

const PartnerBountiesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 20px 0px 50px 0px;
  @media (max-width: 768px) {
    margin: 20px 0px 70px 0px;
  }
  @media (min-width: 1400px) {
    margin: 110px 0px 100px 0px;
  }
`;

const Header = styled.h3`
  font-size: 46px;
  font-weight: 400;
  font-family: "Glancyr", sans-serif;
  color: #fff;
  margin: 0px;

  @media ${device.mobileL} {
    font-size: 36px;
}
`;

const GridItem = styled.div`
  width: 1280px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 33px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 90%;
}

  @media ${device.mobileL} {
      grid-template-columns: repeat(1, minmax(0, 1fr));
      width: 90%;
  }
`;

const PartnerLine = styled.div`
  width: 100%;
  background: #1b1b25;
  margin: 0 auto;
  display: flex;
  border-radius: 32px;
  padding: 24px;
  box-sizing: border-box;
  border: 1px solid transparent;
  position: relative;
  height: auto;
  flex-direction: column;
  align-items: flex-start;


  &:hover {
    border: ${(props) => (props.disabled ? '1px solid transparent' : '1px solid #E64DE9')};
    cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

    & .buttonId {
      background: ${(props) => (!props.disabled ? '#E64DE9 !important' : 'transparent')};
    }
  }

 

  @media (min-width: 1024px) {
    &:last-child {
        justify-self: center;
        grid-column-start: 2;
      }
  }


`;

const PartnersLogo = styled(Image)`
  width: auto;
  max-width: 150px;
`;

const ViewBountyText = styled(Span)`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  color: var(--ifm-color-primary-inverse);

  @media ${device.mobileS} {
    flex: 1;
  }
`;

const BountyButton = styled.div`
  min-width: 114px;
  max-width: ${(props) => props.maxWidth || '114px'};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 0px 0px;
  border: 1px solid ${(props) => props.borderColor || '#e64de9'};
  background: ${(props) => props.background || 'transparent'};
  border-radius: 8px;
  cursor: pointer;
`;

const ArrowSmall = styled(Arrow)`
  width: 8px;
  position: relative;
  top: 0.1em;
`;

const BountyDescription = styled(Span)`
  font-weight: 200;
  font-size: 15px;
  color: #D0D3E7;

    margin: 16px 0px;
    position: relative;
    width: 100%;
    left: 0px;
`;

const DateSpan = styled(Span)`
  color: #E64DE9;
  font-size: 21px;
  font-style: normal;
  font-weight: 200;
  font-family: Glancyr;
  line-height: normal;
`;

const TimeSpan = styled(Span)`
    color: #959CAA;

    font-family: Glancyr;
    font-size: 15px;
    font-style: normal;
    font-weight: 200;
    line-height: normal;
`;

const BountyItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 15px auto auto 0;
`;

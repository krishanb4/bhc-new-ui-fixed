import React from 'react'
import useI18n from 'hooks/useI18n'
import styled from 'styled-components'
import { Box } from '@mui/system'
import Page from 'components/layout/Page'

type UserCasesType = {
  icon: string
  text: string
}

const useCases: UserCasesType[] = [
  {
    icon: 'icon-staking',
    text: 'Staking',
  },
  {
    icon: 'icon-farming',
    text: 'Farming',
  },
  {
    icon: 'icon-defi',
    text: 'Defi',
  },
  {
    icon: 'icon-store',
    text: 'Store of Value',
  },
  {
    icon: 'icon-nft-market',
    text: 'NFT Marketplace',
  },
]

const UseCaseCardComponent = ({ icon, text }: UserCasesType) => {
  return (
    <UseCaseCard>
      <UseCaseIcon src={`/images/icons/${icon}.svg`} />
      <UseCaseText>{text}</UseCaseText>
    </UseCaseCard>
  )
}

const About = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <HeroTitle>{TranslateString(576, 'About Us')}</HeroTitle>
        <HeroSubtitle>
          {TranslateString(
            578,
            'Billion Happiness is a blockchain community-based project, with a goal of introducing blockchain to billions of people through simple means, interests, and passion, including digital artworks.',
          )}
        </HeroSubtitle>
      </Hero>
      <InfoCard sx={{ mb: 3 }}>
        <InfoCardPara>
          BHC is a cryptocurrency originally created as a reward for the ever growing Billion Happiness Community. Its
          further development led its way to the DeFi world, making the token farmable, slakeable, and tradable on
          various exchanges.
        </InfoCardPara>
        <InfoCardPara>
          HPS is a booster token for Billion Happiness project to support, build ecosystem, and develop NFT marketplace.
          To create, trade, or collect digital items secured with BSC blockchain.
        </InfoCardPara>
      </InfoCard>

      <InfoCards>
        <InfoCard>
          <InfoCardTitle>Usecases</InfoCardTitle>
          <UseCases>
            {useCases.map((usecase) => (
              <UseCaseCardComponent key={usecase.icon} icon={usecase.icon} text={usecase.text} />
            ))}
          </UseCases>
        </InfoCard>
        <InfoCard />
      </InfoCards>
    </Page>
  )
}

const Hero = styled.div`
  padding-top: 40px;
  padding-bottom: 36px;
  text-align: center;
  @media only screen and (min-width: 1200px) {
    padding-top: 0;
  }
`

const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 50px;
  line-height: 1.2;
  color: #fa8123;
  margin-top: 0;
  margin-bottom: 10px;
  @media only screen and (min-width: 768px) {
    font-size: 62px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 75px;
  }
`

const HeroSubtitle = styled.p`
  font-size: 24px;
  color: #fff;
  margin: 0;
  @media only screen and (min-width: 768px) {
    font-size: 30px;
  }
`

const InfoCard = styled(Box)`
  border-radius: 25px;
  backdrop-filter: blur(9px);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 36px 50px;
  flex-grow: 1;
`

const InfoCardPara = styled.p`
  font-size: 25px;
  color: #fa8123;
  margin: 0;
  & + p {
    margin-top: 40px;
  }
`

const InfoCardTitle = styled.p`
  font-size: 34px;
  text-align: center;
  margin: 0;
  margin-bottom: 24px;
  color: #fff;
  line-height: 1;
`

const InfoCards = styled.div`
  display: flex;
  flex-direction: column;
  & > div + div {
    margin-top: 24px;
  }
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    & > div + div {
      margin-top: 0;
      margin-left: 24px;
    }
  }
`

const UseCases = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  @media only screen and (min-width: 768px) {
    justify-content: space-between;
  }
`

const UseCaseCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100px;
  margin-bottom: 40px;
  &:last-child {
    margin-bottom: 0;
  }
  @media only screen and (min-width: 768px) {
    width: 80px;
    & + div {
      margin-top: 0;
      margin-left: 20px;
      margin-bottom: 0;
    }
  }
  @media only screen and (min-width: 1200px) {
    width: 100px;
  }
`

const UseCaseIcon = styled.img`
  width: 80px;
  height: 80px;
  margin-bottom: 20px;
  @media only screen and (min-width: 768px) {
    width: 60px;
    height: 60px;
    margin-bottom: 16px;
  }
  @media only screen and (min-width: 1200px) {
    width: 60px;
    height: 60px;
    margin-bottom: 16px;
  }
`

const UseCaseText = styled.p`
  line-height: 1.2;
  font-size: 20px;
  color: #fff;
  margin: 0;
  min-width: 64px;
  @media only screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 16px;
  }
`

export default About

import Page from 'components/layout/Page'
import useI18n from 'hooks/useI18n'
import React from 'react'
import styled from 'styled-components'
import TeamMembers from './TeamMembers'
import SocialLinks from './SocialLinks'

const MeetTeam = () => {
  const TranslateString = useI18n()

  return (
    <Page>
      <Hero>
        <HeroTitle>{TranslateString(576, 'Meet the Team')}</HeroTitle>
        <HeroSubtitle>
          {TranslateString(
            578,
            'Our team is the perfect combination of happy crypto enthusiasts all built with the same goal to spread happiness.',
          )}
        </HeroSubtitle>
      </Hero>

      <TeamMembers />

      <Hero>
        <HeroTitle>{TranslateString(576, 'Our Community')}</HeroTitle>
        <HeroSubtitle>
          {TranslateString(
            578,
            'Join our communities and follow us for the latest updates!',
          )}
        </HeroSubtitle>
      </Hero>

      <SocialLinks />
    </Page>
  )
}

const Hero = styled.div`
  padding-top: 40px;
  padding-bottom: 50px;
  text-align: center;

  @media only screen and (min-width: 768px) {
    padding-bottom: 50px;
  }

  @media only screen and (min-width: 1200px) {
    padding-top: 0;
    padding-bottom: 64px;
  }
`

const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 50px;
  line-height: 1.2;
  color: #e84142;
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

export default MeetTeam

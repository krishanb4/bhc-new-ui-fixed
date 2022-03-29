import React from 'react'
import styled from 'styled-components'
import SocialCard from './SocialCard'

const socialDetails = [
  {
    icon: 'icon-telegram',
    text: 'join our official channel on Telegram for the latest news!'
  },
  {
    icon: 'icon-twitter',
    text: 'Follow our official Twitter account and get exclusive updates'
  },
  {
    icon: 'icon-twitter',
    text: 'Follow our NFT twitter account for BH NFT updates'
  },
  {
    icon: 'icon-facebook',
    text: 'Like us on Facebook for more news and highlights'
  },
  {
    icon: 'icon-facebook',
    text: 'Join our Facebook group and interact with other members'
  },
  {
    icon: 'icon-instagram',
    text: 'Follow us on Instagram for updates and art posts!'
  }
]

const SocialLinks = () => {
  return (
      <CardWrapper>
        {socialDetails.map((social) => (
          <SocialCard key={social.icon} icon={social.icon} text={social.text} />
        ))}
      </CardWrapper>
  )
}

const CardWrapper = styled.div`
  Display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media only screen and (min-width: 768px) {
  }

  @media only screen and (min-width: 1200px) {
  }
`

export default SocialLinks
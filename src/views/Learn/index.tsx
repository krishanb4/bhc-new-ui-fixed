import React from 'react'
import styled from 'styled-components'
import { Box } from '@mui/system'
import Page from 'components/layout/Page'
import { useParams } from 'react-router-dom'

const videos = [
  { id: '1', title: 'QUICK TOUR', link: 'https://www.youtube.com/embed/83CzJ-VqhCk' },
  { id: '2', title: 'What is BILLION HAPPINESS?', link: 'https://www.youtube.com/embed/7J6251H24PI' },
  { id: '3', title: 'How to Set-up your Wallet?', link: 'https://www.youtube.com/embed/7J6251H24PI' },
  { id: '4', title: 'How to Trade or Swap?', link: 'https://www.youtube.com/embed/-xi-MxBVOfQ' },
]

const Learn: React.FC = () => {
  const { id: paramsId } = useParams<any>()
  const video = videos.find(({ id }) => paramsId === id) || null

  return (
    <Page>
      <Hero>
        <HeroTitle>{video?.title ?? ''}</HeroTitle>
      </Hero>
      <InfoCard sx={{ mb: 3 }}>
        <div className="video-responsive">
          <iframe
            width="100%"
            height="1100"
            src={video.link}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video?.title ?? ''}
            style={DisplayStyle}
          />
        </div>
      </InfoCard>
    </Page>
  )
}

const DisplayStyle = {
  display: 'flex',
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
  color: #6681ca;
  margin-top: 0;
  margin-bottom: 10px;
  @media only screen and (min-width: 768px) {
    font-size: 62px;
  }
  @media only screen and (min-width: 1200px) {
    font-size: 75px;
  }
`

const InfoCard = styled(Box)`
  border-radius: 25px;
  backdrop-filter: blur(9px);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 36px 50px;
  flex-grow: 1;
`

export default Learn

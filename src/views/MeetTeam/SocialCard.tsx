import React from 'react'
import styled from 'styled-components'

const SocialCard = ({text, icon}) => {
  return (
    <MemberCard>
      <Avatar src={`/images/icons/${icon}.svg`} />
      <MemberName>{text}</MemberName>
    </MemberCard>
  )
}

const MemberCard = styled.div`
  Display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 16px 40px 16px;
  width: 200px;
  text-align: center;
`

const Avatar = styled.img`
  width: 46px;
  height: 46px;
  margin-bottom: 15px;
  border-radius: 50%;
`

const MemberName = styled.p`
  font-size: 15px;
  color: #fff;
  margin: 0;
`

export default SocialCard
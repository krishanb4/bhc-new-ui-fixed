import React from 'react'
import styled from 'styled-components'

const TeamMemberCard = () => {
  return (
    <MemberCard>
      <Avatar src="/images/ftm.png" />
      <MemberName>Arnel</MemberName>
      <MemberRole>Founder</MemberRole>
    </MemberCard>
  )
}

const MemberCard = styled.div`
  Display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 16px 40px 16px;
`

const Avatar = styled.img`
  width: 190px;
  height: 190px;
  border: solid 10px #f87430;
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 50%;
`

const MemberName = styled.p`
  font-size: 34px;
  line-height: 1;
  color: #6681ca;
  margin: 0;
  margin-bottom: 5px;
`

const MemberRole = styled.p`
  font-size: 34px;
  line-height: 1;
  color: #fff;
  text-transform: uppercase;
  margin: 0;
`

export default TeamMemberCard
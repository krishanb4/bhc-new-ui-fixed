import React from 'react'
import styled from 'styled-components'
import TeamMemberCard from './TeamMemberCard'

const TeamMembers = () => {
  return (
      <CardWrapper>
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
          <TeamMemberCard />
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

export default TeamMembers
import Agent from '@/components/Agent'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <>
        <h3>Interview Generation</h3>

        <Agent userName="You" userId="user1" type="generate" />
    </>
  )
}

export default page

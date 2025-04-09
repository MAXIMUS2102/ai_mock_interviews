import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'

const page = () => {
  return (
    <>
      <section className='card-cta'>
        <div className='flex flex-col gap-6 max-w-lg'>
          <h2>
            Get Interview-Ready with AI-Powered Practice & Feedback
          </h2>
          <p className='text-lg'>
            Practice on real interview questions & get instant feedback
          </p>
          <Button asChild className='btn-primary max-sm:w-full'>
            <Link href='/interview'>
              Start an Interview
            </Link>
          </Button>
        </div>
        <Image className='max-sm:hidden' src='/robot.png' alt='robo-dude' width={400} height={400}/>
      </section>
      <section className='flex flex-col gap-6 mt-8'>
        <h2>Your Interviews</h2>

        <div className='interviews-section'>
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview}/>
          ))}
          {/* <p>You haven&apos;t taken any interviews</p> */}
        </div>
      </section>

      <section className='flex flex-col gap-6 mt-8'>
        <h2>Take an Interview</h2>

        <div className='interviews-section'>
          {dummyInterviews.map((interview) => (
            <InterviewCard key={interview.id} {...interview}/>
          ))}
          {/* <p>There are no interviews available</p> */}
        </div>
      </section>
    </>
  )
}

export default page

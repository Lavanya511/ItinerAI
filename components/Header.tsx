"use client";

import Link from 'next/link';
import React from 'react'
import AgentIcon from './AgentIcon';
import Image from 'next/image';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';
import { Button } from './ui/button';

function Header() {
  return (
    <header className='sticky top-0 z-50 left-0 right-0 px-4 py-2 bg-white/80 backdrop-blur-sm border-b border-gray-200'>
        <div className='container mx-auto'>
            <div className='flex items-center justify-between'>
                {/* Left */}
                <div className='flex items-center justify-between h-16'>
                    <Link href='/' className='flex items-center gap-2'>
                        {/* <AgentIcon size='small' color='blue'/> */}
                        <Image
                            src='/luggage.png'
                            alt='Image'
                            width={40}
                            height={30}
                            className='p-1'
                        />
                        <h1 className='text-2xl font-semibold bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent'>Itiner<span className='text-amber-300'>ai</span></h1>
                    </Link>
                </div>

                {/* Right */}
                <div className='flex items-center gap-4'>
                    <SignedIn>
                        {/* <Link href='/manage-plan' className=''>
                            <Button variant={'outline'} className='mr-4 bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent hover:text-orange-400 transition-colors cursor-pointer'>
                                Manage Plan
                            </Button>
                        </Link> */}

                        <div className='p-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border bg-blue-100 border-blue-200'>
                            <UserButton/>
                        </div>
                    </SignedIn>

                    <SignedOut>
                        <SignInButton mode='modal'>
                            <Button variant={'ghost'} size='sm' className='bg-gradient-to-r from-amber-600 to-amber-400 bg-clip-text text-transparent border px-4 py-2 font-semibold hover:text-orange-400 transition-colors cursor-pointer'>
                                Sign In
                            </Button>
                        </SignInButton>

                    </SignedOut>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
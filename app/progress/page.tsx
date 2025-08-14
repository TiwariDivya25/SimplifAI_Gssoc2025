import React from 'react'
import { HeroSection } from "@/components/hero-section-2";
import { AnimatedBackground } from "@/components/animated-background";
import { UserLabel } from "@/components/user-label";
import StatusBar from "@/components/stats-bar";
import { Features } from '@/components/features-2';
import { prisma } from "@/lib/prisma";
import RecentActivity from '@/components/recent-activity';
import ChartAreaClient from '@/components/docsbarchartclient';
import DocsProcessedServer from '@/components/docsbarchartserver';
import { SectionCards } from "@/components/personalDetails";
import Link from 'next/link';
const progress = async () => {


    const user = await prisma.user.findMany();

    return (
        <div>
            <div>
                <AnimatedBackground />
                <UserLabel />
                <HeroSection />
            </div>

            <div className=" px-4 py-12 mx-auto relative z-10 ">


                <div className="relative bg-gradient-to-br from-primary/10 via-purple-50/50 to-pink-50/30 dark:from-primary/5 dark:via-purple-950/20 dark:to-pink-950/10 pt-28 sm:pt-20 pb-16 overflow-hidden  p-6 rounded-lg shadow-lg h-[80vh] w-[80%]  flex items-center justify-start mx-auto  gap-10">
                    <div className='bg-background w-[35%] h-[100%] rounded-2xl p-10 border-4 '>


                        <div className='bg-background w-[100%] h-[35%] rounded-2xl p-10 border-4 flex flex-col items-center justify-center gap-4'>
                            <h1>{user[0].image}</h1>
                            <h1 className='font-bold text-2xl'>{user[0].name}</h1>
                            <h1 className='font-bold text-2xl'>{user[0].email}</h1>
                            <p>Created At : {user[0].createdAt.toLocaleDateString()}</p>
                            <p>Last updated : {user[0].updatedAt.toLocaleDateString()}</p>
                            <div className='flex gap-4 mt-4'>
                                <Link href="https://x.com/home"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22l-8.205-11.467Zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31l-4.934-6.89Z" />
                                </svg></Link>
                                <Link href="https://www.facebook.com/"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z" clip-rule="evenodd" />
                                </svg></Link>
                                <Link href="https://www.google.com/"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z" clip-rule="evenodd" />
                                </svg></Link>
                                <Link href="https://www.apple.com/in/"><svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M17.537 12.625a4.421 4.421 0 0 0 2.684 4.047 10.96 10.96 0 0 1-1.384 2.845c-.834 1.218-1.7 2.432-3.062 2.457-1.34.025-1.77-.794-3.3-.794-1.531 0-2.01.769-3.275.82-1.316.049-2.317-1.318-3.158-2.532-1.72-2.484-3.032-7.017-1.27-10.077A4.9 4.9 0 0 1 8.91 6.884c1.292-.025 2.51.869 3.3.869.789 0 2.27-1.075 3.828-.917a4.67 4.67 0 0 1 3.66 1.984 4.524 4.524 0 0 0-2.16 3.805m-2.52-7.432A4.4 4.4 0 0 0 16.06 2a4.482 4.482 0 0 0-2.945 1.516 4.185 4.185 0 0 0-1.061 3.093 3.708 3.708 0 0 0 2.967-1.416Z" />
                                </svg></Link>
                            </div>
                        </div>
                    </div >


                    <div className='bg-background w-[100%] h-[100%] rounded-2xl p-10 border-4 flex gap-10'>
                        <div>
                            <Features />
                        </div>
                        <div className='bg-background  rounded-2xl p-10 border-4  w-[50vh] h-[50vh] '>
                            <h1 className='text-center font-bold text-2xl mb-20'>Your Progress</h1>
                            <StatusBar />
                            <SectionCards />
                        </div>
                        <div>

                            <RecentActivity />
                        </div>
                    </div>

                </div>
                <div className='mx-auto w-[80%] bg-background justify-center items-center p-10 mt-10 rounded-2xl border-4'>
                    <div className="p-6">
                        <h2 className="text-xl font-bold mb-4">Documents Overview</h2>
                        <ChartAreaClient />

                    </div>
                </div>
            </div>

        </div>
    )
}

export default progress

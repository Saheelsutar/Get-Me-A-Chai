import React from 'react';

const About = () => {
    return (
        <>
            <div className="container mx-auto px-2 md:px-4 py-8">
                
                <h1 className="md:text-2xl text-xl font-semibold mb-4">About Get Me a Chai</h1>
                <p className="text-md mb-6 ">
                    Get Me a Chai is a crowdfunding platform designed for creators to fund their projects with the support of their fans. It&apos;s a space where your fans can directly contribute to your creative endeavors by buying you a chai. Unlock the potential of your fanbase and bring your projects to life.
                </p>

                <h2 className="md:text-2xl text-xl text-purple-600 font-semibold mb-4">How It Works</h2>
                <div className="grid md:grid-cols-2 md:grid-rows-5 gap-10 md:gap-x-10">
                    <div className='flex'>
                        <img className="md:w-20 md:h-20 h-16 w-16 rounded-full mr-4" src="/group.gif" alt="Fans Want to Collaborate" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Fans Want to Collaborate</h3>
                            <p>Your fans are enthusiastic about collaborating with you on your projects.</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <img className="md:w-20 md:h-20 h-16 w-16 rounded-full mr-4" src="/dollar.gif" alt="Support Through Chai" />
                        <div>
                            <h3 className="text-xl font-semibold mb-2">Support Through Chai</h3>
                            <p>Receive support from your fans in the form of chai purchases, directly contributing to your project funding.</p>
                        </div>
                    </div>
                <div>
                    <h2 className="md:text-2xl text-xl text-purple-600 font-semibold mb-4">Benefits for Creators</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li className="mb-2">Direct financial support from your fanbase</li>
                        <li className="mb-2">Engage with your fans on a more personal level</li>
                        <li className="mb-2">Access to a platform tailored for creative projects</li>

                    </ul>
                </div>
                <div>
                    <h2 className="md:text-2xl text-xl text-purple-600 font-semibold mb-4">Benefits for Fans</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li className="mb-2">Directly contribute to the success of your favorite creators</li>
                        <li className="mb-2">Exclusive rewards and perks for supporting creators</li>
                        <li className="mb-2">Be part of the creative process and connect with creators</li>

                    </ul>
                </div>

                <div>
                    <h2 className="md:text-2xl text-xl text-purple-600 font-semibold mb-4">Benefits of Collaboration</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li className="mb-2">Unlock new opportunities through collaboration with fellow creators</li>
                        <li className="mb-2">Expand your network and reach a wider audience</li>
                        <li className="mb-2">Combine skills and resources to create innovative projects</li>

                    </ul>
                </div>

                <div>
                    <h2 className="md:text-2xl text-xl text-purple-600 font-semibold mb-4">Community Engagement</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li className="mb-2">Interact with a supportive community of like-minded individuals</li>
                        <li className="mb-2">Receive valuable feedback and encouragement from peers</li>
                        <li className="mb-2">Participate in discussions and events centered around your interests</li>

                    </ul>
                </div>

                <div>
                    <h2 className="md:text-2xl text-xl text-purple-600 font-semibold mb-4">Access to Resources</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li className="mb-2">Gain access to resources such as tutorials, templates, and tools</li>
                        <li className="mb-2">Receive guidance and mentorship from experienced creators</li>
                        <li className="mb-2">Stay updated on industry trends and best practices</li>

                    </ul>
                </div>
                <div>
                    <h2 className="md:text-2xl text-xl text-purple-600 font-semibold mb-4">Recognition and Exposure</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li className="mb-2">Showcase your work to a global audience and gain recognition</li>
                        <li className="mb-2">Feature in promotional materials and campaigns</li>
                        <li className="mb-2">Build your portfolio and increase your credibility as a creator</li>

                    </ul>
                </div>
                <div>
                    <h2 className="md:text-2xl text-xl text-purple-600 font-semibold mb-4">Supportive Community</h2>
                    <ul className="list-disc pl-6 mb-6">
                        <li className="mb-2">Join a community that values creativity, diversity, and inclusivity</li>
                        <li className="mb-2">Find encouragement and inspiration from fellow members</li>
                        <li className="mb-2">Collaborate on projects and share resources for mutual growth</li>

                    </ul>
                </div>
              </div>
            </div>
        </>
    );
}

export default About;

export const metadata = {
    title: "About - Get Me A Chai",
}

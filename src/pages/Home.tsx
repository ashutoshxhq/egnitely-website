import { useAuth0 } from '@auth0/auth0-react';
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
    const { loginWithRedirect} = useAuth0();
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])
    
    return (
        <>
            <div>
                <div className="div-block-6">
                    <div className="div-block-7">
                        <div className="text-block text-orange-hero">Develop.</div>
                        <div className="text-block">Collaborate.</div>
                        <div className="text-block">Deploy.</div>
                    </div>
                    <div className="div-block-8"><span onClick={() => loginWithRedirect({screen_hint: "signup"})} className="button-3 w-button">Start Building</span><a href="#" className="button-3 btn-brand w-button">Download App</a></div>
                    <div>
                        <div className="text-block-2">Egnitely helps engineering teams to develop and deploy scalable backend applications faster and cheaper.<br />Our function marketplace helps cut development cost and empowers your team to ship faster.</div>
                    </div>
                </div>
            </div>
            <div className="div-block-9">
                <div className="div-block-10">
                    <div className="text-block-3">EXPLORE THE EGNITELY WAY</div>
                    <div className="div-block-12">
                        <div className="div-block-11"></div>
                        <div className="div-block-13">
                            <div className="text-block-4">1</div>
                        </div>
                    </div>
                    <div className="text-block-5">Develop</div>
                    <div>
                        <div className="text-block-6">Start with Egnitely Functions</div>
                        <div className="text-block-7">Functions are building blocks of Egnitely, each one solving a unit of problem. These functions can be used to build applications and services by composing and connecting them together. We provide a marketplace of functions so you can focus on writing the business logic and leave the repetitive problems for the community to solve.</div>
                    </div>
                    <div className="div-block-14">
                        <div className="div-block-16"><img src="/develop.svg" loading="lazy" alt="develop illustration" className="image-6" /></div>
                        <div className="div-block-49">
                            <div className="div-block-15">
                                <div className="text-block-8">Generate Boilerplate</div>
                                <div className="text-block-9">Use Egnitely CLI  to generate function boilerplate. </div>
                                <div className="div-block-20">
                                    <div className="div-block-22">
                                        <div className="text-block-10">egnitely new </div>
                                        <div className="text-block-11">function-name</div>
                                    </div>
                                    <div className="div-block-21">
                                        <div className="text-block-12">Copy</div>
                                    </div>
                                </div>
                            </div>
                            <div className="div-block-15">
                                <div className="text-block-8">Implement business logic</div>
                                <div className="text-block-9">You can implement your business logic in one of the supported languages: Nodejs, Rust, Go</div>
                            </div>
                            <div className="div-block-15">
                                <div className="text-block-8">Push Function to Egnitely</div>
                                <div className="text-block-9">You can easily push a function to Egnitely with one command.</div>
                                <div className="div-block-20">
                                    <div className="div-block-22">
                                        <div className="text-block-10">egnitely push </div>
                                    </div>
                                    <div className="div-block-21">
                                        <div className="text-block-13">Copy</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="div-block-12">
                        <div className="div-block-11"></div>
                        <div className="div-block-13">
                            <div className="text-block-4">2</div>
                        </div>
                    </div>
                    <div className="text-block-5">Collaborate</div>
                    <div>
                        <div className="text-block-6"><strong>Build with the global community</strong></div>
                        <div className="text-block-7">Egnitely gives you access to a marketplace of functions developed by a global community of developers. You can use functions built by the community to collaboratively develop your application.</div>
                    </div>
                    <div className="div-block-25">
                        <div className="div-block-50"><img src="/collab.svg" loading="lazy" alt="Collaborate illustration" className="image-7" /></div>
                        <div className="div-block-27">
                            <div className="div-block-31">
                                <div className="div-block-32"></div>
                            </div>
                            <div className="div-block-31">
                                <div className="div-block-32"></div>
                            </div>
                            <div className="div-block-31">
                                <div className="div-block-32"></div>
                            </div>
                            <div className="div-block-31">
                                <div className="div-block-32"></div>
                            </div>
                        </div>
                        <div className="div-block-26"></div>
                        <div className="div-block-28">
                            <div className="div-block-29">
                                <div className="text-block-14">Function Marketplace </div>
                                <div className="text-block-15">Egnitely hosts a marketplace of functions which can be used to build applications. We enable you to focus on your business logic such that you can iterate fast and provide more business value to your customers.</div>
                            </div>
                            <div className="div-block-29">
                                <div className="text-block-14">Test Functions with your team</div>
                                <div className="text-block-15">Egnitely provides tools to help you test the functions written by your team or the community. Healthy functions are key to a delightful customer experience.</div>
                            </div>
                            <div className="div-block-29">
                                <div className="text-block-14">Observe Metrics &amp; Optimize</div>
                                <div className="text-block-15">Egnitely provides metrics related to function triggers, memory/cpu consumption so you can optimize your functions to be more performant and provide a better user experience.</div>
                            </div>
                            <div className="div-block-29">
                                <div className="text-block-14">Discuss &amp; Document Functions</div>
                                <div className="text-block-15">Egnitely enables your teams to create markdown documentation and discussion threads for functions, so they can collaborate build better functions.</div>
                            </div>
                        </div>
                    </div>
                    <div className="div-block-12 mt-0 gradient-gray">
                        <div className="div-block-11 gradient-gray"></div>
                        <div className="div-block-13">
                            <div className="text-block-4">3</div>
                        </div>
                    </div>
                    <div className="text-block-5">Deploy</div>
                    <div className="div-block-48">
                        <div className="text-block-6">Deploy to your Infrastructure</div>
                        <div className="text-block-7">Egnitely can deploy functions to your cloud providers with automatic deployments based on changes from git or by push of a button. Egnitely generates code for the application layer, deploys to your Kubernetes cluster and exposes an API so you can trigger your functions easily. Egnitely can also deploy your functions independently to AWS Lambda to be triggered based on events from API gateway, SNS, SQS etc.</div>
                    </div>
                    <div className="div-block-40">
                        <div className="div-block-41"><img src="/images/6302276579dc343276898eef_docker.png" loading="lazy" alt="docker logo" className="image-4" /></div>
                        <div className="div-block-42"><img src="/images/630227a6b7fffa8402a02eb3_kubernetes.png" loading="lazy" alt="kubernetes logo" sizes="(max-width: 479px) 66vw, 79.9884262084961px" /></div>
                        <div className="div-block-45"><img src="/images/630227b8f0775de161c7f97c_aws-lambda.png" loading="lazy" alt="aws lambda logo" sizes="(max-width: 479px) 66vw, 79.9884262084961px" className="image-5" /></div>
                        <div className="div-block-45"><img src="/images/63022bbcb7fffa25cba073e9_azure.png" loading="lazy" alt="azure logo" sizes="(max-width: 479px) 66vw, 79.9884262084961px" className="image-5" /></div>
                        <div className="div-block-45"><img src="/images/630258f009a3223a533ceaa4_gcp.png" loading="lazy" width="94" sizes="(max-width: 479px) 66vw, 79.9884262084961px" alt="gcp logo" className="image-5" /></div>
                        <div className="div-block-44"><img src="/images/6302580179dc34d8f28c8fbb_aws.png" loading="lazy" alt="Aws logo" /></div>
                    </div>
                </div>
            </div>
            <div className="div-block-47">
                <div className="div-block-30">
                    <div className="text-block-19">Ready to try the Egnitely way?</div>
                    <div className="div-block-46"><span onClick={() => loginWithRedirect({screen_hint: "signup"})} className="button-3 w-button">Register Now</span><a href="#" className="button-3 btn-brand w-button">Download App</a></div>
                </div>
            </div>
        </>

    )
}

export default Home
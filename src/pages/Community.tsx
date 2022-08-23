import React, { useEffect } from 'react'

const Community = () => {
    
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])

    return (
        <>
            <div className="div-block-51">
                <div className="div-block-6">
                    <div className="div-block-7">
                        <div className="text-block page-header-title">Join our Community</div>
                        <div className="text-block-20">Open community for developers and companies to build functions collaboratively</div>
                    </div>
                </div>
            </div>
            <div className="div-block-52">
                <div className="div-block-53">
                    <div className="div-block-54">
                        <div className="div-block-55"><img src="../discord.png" loading="lazy" alt="" className="image-8" /></div>
                        <div className="div-block-56">
                            <div className="text-block-21">Discord </div>
                            <div className="text-block-22">Get live support, and stay up to date on product and event announcements.</div>
                            <a href="https://discord.gg/zARWG8KFh5" target="_blank" className="button-4 discord-btn w-button">Join Server</a>
                        </div>
                    </div>
                    <div className="div-block-54">
                        <div className="div-block-55"><img src="../github.png" loading="lazy" alt="" className="image-8" /></div>
                        <div className="div-block-56">
                            <div className="text-block-21">Github</div>
                            <div className="text-block-22">Check out our open source repo, request new features, or contribute.</div>
                            <a href="https://github.com/egnitely" target="_blank" className="button-4 github-btn w-button">Open GitHub Org</a>
                        </div>
                    </div>
                    <div className="div-block-54">
                        <div className="div-block-55"><img src="../twitter.png" loading="lazy" alt="" className="image-8" /></div>
                        <div className="div-block-56">
                            <div className="text-block-21">Twitter</div>
                            <div className="text-block-22">Follow us on twitter to stay up to date in product and event announcements.</div>
                            <a href="https://twitter.com/egnitely" target="_blank" className="button-4 twitter-btn w-button">Follow Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Community
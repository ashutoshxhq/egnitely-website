import React, { useEffect } from 'react'

const Register = () => {

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }, [])

    return (
        <>
            <div className="div-block-51">
                <div className="div-block-6">
                    <div className="div-block-7">
                        <div className="text-block page-header-title">Register</div>
                        {/* <div className="text-block-20">New releases and system updates</div> */}
                    </div>
                </div>
            </div>
            <div className="div-block-52">
                <div className="div-block-53">
                    <div className="text-block-20">Thanks for showing Interest, We will be Launching Soon.</div>
                </div>
            </div>
        </>
    )
}

export default Register
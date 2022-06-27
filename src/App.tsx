import { useState } from "react";
// @ts-ignore
import HttpsRedirect from "react-https-redirect";

function App() {
  return (
    <>
      <HttpsRedirect>
        <div
          data-animation="default"
          data-collapse="medium"
          data-duration="400"
          data-easing="ease"
          data-easing2="ease"
          role="banner"
          className="navbar w-nav"
        >
          <div className="div-block">
            <div className="div-block-2">
              <img
                src="/egnitely-full.png"
                loading="lazy"
                alt=""
                className="image"
              />
            </div>
            <div className="div-block-3">
              <div className="div-block-5">
                <a
                  href="https://egnitely.com"
                  className="link-block w-inline-block"
                >
                  <div className="text-block">Home</div>
                </a>
              </div>
              <div className="div-block-6">
                <a href="#features" className="link-block w-inline-block">
                  <div className="text-block-3">Features</div>
                </a>
              </div>
              <div className="div-block-7">
                <a href="https://forms.gle/ZKcBjKPw4Eb4FDYh8" target={"_blank"} className="link-block w-inline-block">
                  <div className="text-block-4">Request Functions</div>
                </a>
              </div>
            </div>
            <div className="div-block-4">
              <a href="https://forms.gle/iuHhVyCPcRj8y9m86" target={"_blank"} className="button nav-button w-button">
                Join our Waitlist
              </a>
            </div>
          </div>
          <div
            className="w-nav-overlay"
            data-wf-ignore=""
            id="w-nav-overlay-0"
          ></div>
        </div>
        <div className="div-block-8">
          <div className="div-block-9">
            <div className="text-block-5">
              Automation Engine
              <br />
              for knowledge workers
            </div>
            <div className="text-block-6">
              Open Links/Apps, Execute Scripts &amp; Trigger functions
              seamlessly <br />
              from our command bar interface to automate your life/business
              workflows.
            </div>
          </div>
          <div>
            <div className="div-block-10">
              <a href="https://forms.gle/iuHhVyCPcRj8y9m86" target={"_blank"} className="button header-button w-button">
                Join our Waitlist<strong></strong>
              </a>
              <a
                href="https://docs.egnitely.com"
                target="_blank"
                className="button header-button secondary w-button"
              >
                Documentation (Building Functions)
              </a>
            </div>
            <div className="text-block-7">
              Coming Soon for Windows, Mac &amp; Linux
            </div>
          </div>
          <img
            src="/egnitely-cmd.png"
            loading="lazy"
            sizes="(max-width: 767px) 100vw, 736.1979370117188px"
            alt=""
            className="image-2"
          />
        </div>
        <div className="section wf-section">
          <div id="features" className="div-block-11">
            <div className="div-block-12 features">
              <div className="text-block-5 features-text">
                Perform actions at the speed of thought
              </div>
              <div className="div-block-14">
                <div className="div-block-15">
                  <div className="div-block-18">
                    <img
                      src="/link.svg"
                      loading="lazy"
                      alt=""
                      className="image-6"
                    />
                  </div>
                  <div className="div-block-19">
                    <div className="text-block-8">Open Links &amp; Apps</div>
                    <div className="text-block-9">
                      Open links to important documents and apps right from
                      Egnitely command bar without wasting time looking for
                      them.
                    </div>
                  </div>
                </div>
                <div className="div-block-15">
                  <div className="div-block-18">
                    <img
                      src="/script.svg"
                      loading="lazy"
                      alt=""
                      className="image-7"
                    />
                  </div>
                  <div className="div-block-19">
                    <div className="text-block-8">Execute Scripts</div>
                    <div className="text-block-9">
                      Automate common tasks &amp; workflows in your operating
                      system by writing shell scripts and executing them
                      whenever required.
                    </div>
                  </div>
                </div>
                <div className="div-block-15">
                  <div className="div-block-18">
                    <img
                      src="/function.svg"
                      loading="lazy"
                      alt=""
                      className="image-8"
                    />
                  </div>
                  <div className="div-block-19">
                    <div className="text-block-8">Trigger Functions</div>
                    <div className="text-block-9">
                      Automate complex tasks/workflows by writing code or using
                      community made functions from the Egnitely Marketplace.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="div-block-22">
              <div className="div-block-23">
                <div className="div-block-25">
                  <div className="text-block-8 card-title">
                    Function Marketplace
                  </div>
                  <div className="text-block-9">
                    Functions are building bocks of Egnitely, each function
                    solves a unit of problem or automates a specific workflow.
                    Egnitely Marketplace is a collection of those functions
                    built by our internal team and the partner/developer
                    community.
                  </div>
                </div>
              </div>
              <div className="div-block-23">
                <div className="div-block-26">
                  <div className="text-block-8 card-title">
                    Automation Services
                  </div>
                  <div className="text-block-9">
                    We also provide function development services to our
                    customers who need help developing functions for their
                    specific workflows. We assign competent automations
                    engineers who work with these companies to build and
                    automate their business workflows.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section wf-section">
          <div className="div-block-11">
            <div className="div-block-22">
              <div className="text-block-12">Join our Community</div>
            </div>
            <div className="div-block-27">
              <div className="div-block-28">
                <div className="div-block-29">
                  <img
                    src="/discord.png"
                    loading="lazy"
                    alt=""
                    className="image-3"
                  />
                </div>
                <div className="div-block-30">
                  <div className="text-block-13">Discord </div>
                  <div className="text-block-14">
                    Get live support, and stay up to date on product and event
                    announcements.
                  </div>
                  <a
                    href="https://discord.gg/zARWG8KFh5"
                    target="_blank"
                    className="button-3 discord-btn w-button"
                  >
                    Join Server
                  </a>
                </div>
              </div>
              <div className="div-block-28">
                <div className="div-block-29">
                  <img
                    src="/github.png"
                    loading="lazy"
                    alt=""
                    className="image-3"
                  />
                </div>
                <div className="div-block-30">
                  <div className="text-block-13">Github</div>
                  <div className="text-block-14">
                    Check out our open source repo, request new features, or
                    contribute.
                  </div>
                  <a
                    href="https://github.com/egnitely"
                    target="_blank"
                    className="button-3 github-btn w-button"
                  >
                    Open GitHub Org
                  </a>
                </div>
              </div>
              <div className="div-block-28">
                <div className="div-block-29">
                  <img
                    src="/twitter.png"
                    loading="lazy"
                    alt=""
                    className="image-3"
                  />
                </div>
                <div className="div-block-30">
                  <div className="text-block-13">Twitter</div>
                  <div className="text-block-14">
                    Follow us on twitter to stay up to date in product and event
                    announcements.
                  </div>
                  <a
                    href="https://twitter.com/egnitely"
                    target="_blank"
                    className="button-3 twitter-btn w-button"
                  >
                    Follow Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="footer-dark wf-section">
          <div className="container-2">
            <div className="footer-wrapper">
              <div className="div-block-31">
                <a href="#" className="footer-brand w-inline-block">
                  <img
                    src="/egnitely-full.png"
                    loading="lazy"
                    alt=""
                    className="image-5"
                  />
                </a>
                <div className="text-block-15">
                  Automation Engine for knowledge workers
                </div>
                <div className="text-block-15">
                  Email: support@egnitely.com
                  <br />
                  Phone: +91 6207689508
                </div>
              </div>
              <div className="footer-content">
                <div
                  id="w-node-_8d44387f-563e-22bc-5619-90d2e9178355-a9ae1a46"
                  className="footer-block"
                >
                  <div className="title-small">Company</div>
                  <a href="https://egnitely.com" className="footer-link">
                    Home
                  </a>
                  <a
                    href="https://blog.egnitely.com"
                    target="_blank"
                    className="footer-link"
                  >
                    Blog
                  </a>
                  <a href="https://docs.egnitely.com" className="footer-link">
                    Docs
                  </a>
                </div>
                <div
                  id="w-node-_8d44387f-563e-22bc-5619-90d2e9178369-a9ae1a46"
                  className="footer-block"
                >
                  <div className="title-small">Contact</div>
                  <a
                    href="https://discord.gg/zARWG8KFh5"
                    target="_blank"
                    className="footer-link"
                  >
                    Join Discord Server
                  </a>
                  <a
                    href="https://twitter.com/egnitely"
                    target="_blank"
                    className="footer-link"
                  >
                    twitter.com/egnitely
                  </a>
                  <a
                    href="https://github.com/egnitely"
                    target="_blank"
                    className="footer-link"
                  >
                    github.com/egnitely
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-divider"></div>
          <div className="footer-copyright-center">
            Copyright © 2022 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Egnitely
          </div>
        </section>
      </HttpsRedirect>
    </>
  );
}

export default App;

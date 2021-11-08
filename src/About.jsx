import React from 'react'

const About = () => {
    return (
        <div>
            <div className="about">
                <div className="about-story">
                    <h2>
                        OUR CULTURE
                    </h2>
                    <p style={{ fontFamily: "Arial, Helvetica, sans-serif;" }}>

                        Ever since the first piece of software code was written in the 1960s, programmers have strived to
                        deliver innovation through technology.
                        Since that time, the software development industry has evolved at a rapid pace. In just a single
                        lifetime,
                        we have evolved from building the first OS, Unix platform to launching missions into outer space.
                        Being a programmer means being a lifelong learner, and that is what we offer at Daffodil.
                        We give you a platform to learn and grow as a programmer to help us in our mission to deliver
                        innovation.
                    </p>
                    <button type="button" id="b1">
                        Explore More
                    </button>
                </div>
                <div className="about-image">
                    <img src="https://www.daffodilsw.com/wp-content/themes/daffodil/images/culture.png"
                        style={{ width: "100%", height: "300px;" }} />
                </div>
            </div>
        </div>
    )
}

export default About

import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#E9C46A]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full px-4 grid">
          <div className="sm:text-center pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-red-500">
              ABOUT
            </p>
          </div>
          <div></div>
          <div className="max-w-[1000px] w-full sm:grid grid-row-2 gap-8 px-4">
            <div className="sm:text-center text-4xl font-bold">
              <p>HOW DID WE GET HERE?</p>
            </div>
            <div>
              <p>
                I served in the US Navy for 6 years (APR 2013 - APR 2019) and
                I've recently expanded my skill set to include the wonderful
                world of web development. After receiving hands-on training at
                LEARN Academy in San Diego, I've been fully equipped with the
                tools needed to embrace the role of Full Stack Web Developer. I
                am well-versed in JavaScript, HTML, CSS, Ruby, Ruby on Rails,
                React, and PostgreSQL. But that's not all: I also have extensive
                knowledge of current IT practices, as I've earned 3 different
                certifications through CompTIA (Cybersecurity Analyst+ CE,
                Security+ CE, Network+ CE). I'm looking to earn my CompTIA
                Advanced Security Practitioner (CASP+) in the near future as
                well.
              </p>
              <p>
                In short, my love for computers and technology knows no bounds.
                I really enjoy what I do. I have a cemented progression-based
                mindset; I don't give up. Everyday is a new opportunity to get a
                little better. Teamwork and leadership come naturally to me.
                Additionally, both providing and participating in mentorship
                activities are essential.
              </p>
              <p>
                When I'm not in the mix, I love playing my ukulele, writing
                poetry, and singing. Please have a look around my portfolio and
                reach out! I'd love to connect with you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

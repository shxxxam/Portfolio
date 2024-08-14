import React from 'react'

function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div>
            <h1 className="text-3xl font-bold mb-5">About</h1>
            <p>
                Well, hello there! You've stumbled upon the realm of Shubham Thakur, where code meets creativity and sarcasm is always in style.
            </p>
            <br />
            <h1 className="text-green-600 font-semibold text-xl">Who Am I?</h1>
            <p>
            I'm a Computer Science Engineer, the person who turns coffee into code and occasionally saves the world (or at least the Internet) from chaos. With a keyboard as my trusty sidekick, I navigate the digital landscape, crafting sleek websites and robust software solutions.
            </p>
            <br />
            <h1 className="text-green-600 font-semibold text-xl">My Journey</h1>
            <p>
            My fascination with coding began at an early age, and over the years, I have honed my skills through a variety of projects and challenges. From mastering HTML, CSS, and JavaScript to delving into complex algorithms, my journey has been one of growth and discovery.
            </p>
            <br />
            <h1 className="text-green-600 font-semibold text-xl">What Do I Do?</h1>
            <p>
            When I'm not busy being a digital superhero, I specialize in:
            <ul>
                <li>Web Development: Making the web a prettier place, one pixel at a time.</li>
                <li>Software Engineering: Building solutions that (hopefully) won't crash your system.</li>
                <li>Problem Solving: Tackling challenges with the grace of a ninja and the persistence of a caffeine addict.</li>
            </ul>
            </p>
            <br />
            {/* <h1 className="text-green-600 font-semibold text-xl">Why Should You Care?</h1>
            <p>
            Because you're here, aren't you? Whether you're intrigued, lost, or looking for someone to bring your digital dreams to life, I'm your go-to person for all things code-related. My dedication to quality and innovation ensures that every project I undertake not only meets but exceeds expectations.
            </p>
            <br /> */}
            <h1 className="text-green-600 font-semibold text-xl">Let's Connect</h1>
            <p>
            Feel free to explore my portfolio, marvel at my projects, and drop me a line if you're interested in collaborating. Together, we can make the digital world a more interesting place, one clever comment at a time. I'm always open to new opportunities and collaborations, eager to bring innovative ideas to life and make a positive impact in the digital landscape.
            </p>
        </div>
    </div>
  )
}

export default About
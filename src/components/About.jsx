import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hi there! My name is Harshdeep Singh and I am so happy to have 
        you here on my page. I am a Full Stack Developer and I absolutely love 
        what I do.When I am not working, you can find me on a football pitch or 
        reading a book in some corner.. I am a big believer in harrdwork and punctuality,  
        and I strive to live out those values every day. Thanks for stopping 
        by and getting to know me a little bit better!


        </p>

        <br />

        <p className="text-xl">
        Highly motivated and detail-oriented Developer with a strong academic 
        background . Skilled in programming languages such as Java and Javascript,
        with hands-on experience in software development lifecycle. Committed to 
        delivering high-quality code and continuously improving software solutions.
        Coding always intrigued me, and development made me fall in love with it.
        </p>
      </div>
    </div>
  );
};

export default About;

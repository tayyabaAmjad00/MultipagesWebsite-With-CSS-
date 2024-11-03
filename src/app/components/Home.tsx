import React from "react";

function Home() {
  return (
    <div className="max-w-2xl mx-auto p-8 text-center">
      
      <h1 className="text-3xl font-bold text-blue-600 mb-4">Welcome to My Multipages Website With Tailwind CSS</h1>
      <p className="text-lg mb-4">
        Hello! I am Tayyaba Amjad, a passionate Frontend Developer. I specialize in creating beautiful and functional web applications using modern technologies.
        My journey in the tech world began with a keen interest in web development, and over the years, I have honed my skills in HTML, CSS, and JavaScript.
      </p>
      <p className="text-lg mb-4">
        I believe in the power of good design and usability, and I strive to create websites that not only look great but also provide an excellent user experience.
        Here, you will find some of my recent projects and a bit about my background.
      </p>
      <img src="data:image/jpeg;base64,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" alt="img" />
      <p className="text-lg">
        Feel free to explore my work and get in touch if you have any questions or opportunities to collaborate!
      </p>

       </div>
  );
}

export default Home;

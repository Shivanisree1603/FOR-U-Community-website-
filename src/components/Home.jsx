import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div className="min-h-screen bg-yellow-400 ">
        <div>
          <div className="flex flex-col md:flex-row justify-between py-6 px-6 items-center">
            <Link to="/">
              <div className="mb-4 md:mb-0">
                <img className="shadow ml-14 md:ml-0" src="images/Logo-y.png" width="70px" height="60px" alt="Logo" />
              </div>
            </Link>
            <div className="hidden md:flex flex-row gap-6 md:gap-14 mt-4 text-lg items-center">
              <p>About</p>
              <p>Features</p>
              <Link to="/FAQ">
                <p>FAQ</p>
              </Link>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 mt-4 md:mt-0 items-center">
              <Link to="/login">
                <button className="rounded-md text-lg">Login</button>
              </Link>
              <Link to="/register">
                <button className="rounded-md border-2 border-black px-4 font-bold py-2">Register</button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="px-6 py-10 md:px-20 md:py-20">
              <strong className="text-3xl md:text-5xl">Ready to join a community where your voice matters?</strong>
              <p className="text-lg md:text-xl mt-6">Anonymously share your story, connecting with others, and seeking justice without fear of retaliation or judgment.</p>
              <div className="flex items-center justify-center py-10 md:py-20">
                <button className="rounded-md bg-black px-7 py-5 text-xl text-white">BEGIN YOUR JOURNEY WITH US</button>
              </div>
            </div>
            <div className="mb-16 md:mb-32 md:mr-20">
              <img src="images/home.png" width="900px" height="200px" alt="Home" />
            </div>
          </div>
        </div>

        <div className="bg-white min-h-screen">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col ">
              <strong className="text-3xl py-10 md:text-5xl px-6 md:px-20 mt-10 ">Empowering Voices, Together</strong>
              <p className="text-lg md:text-xl text-gray-500 mt-6 md:mt-10 px-6 md:px-20">
                To empowering individuals to speak out about the injustices they have faced. Our platform is committed to providing a safe and anonymous space where users can share their experiences without fear of retaliation or judgment. By fostering an environment of support and understanding, we enable users to connect with others who have undergone similar experiences, creating a community of solidarity and mutual encouragement. We believe that everyone has a voice and the power to make a difference by sharing their truth. Through collective storytelling and the sharing of evidence, we aim to shed light on unfair events and drive societal change. For U stands as a testament to the strength of community, where every story matters, and together, we can work towards a more just and accountable world.
              </p>
            </div>
            <div className="md:mr-16">
              <img className="mt-10 md:mt-20" src="images/connect with mail.png" width="2200px" height="300px" alt="Connect" />
            </div>
          </div>
          <i className="mt-6 md:mt-10 text-2xl md:text-3xl font-bold flex justify-center items-center">
            "Break the <strong className="underline decoration-yellow-400">Silence</strong>, Share Your <strong className="underline decoration-yellow-400">Truth</strong>"
          </i>
        </div>

        <div className="bg-white min-h-screen">
          <div className="flex flex-col md:flex-row py-10">
          <div className="md:mr-16">
              <img className="mt-10 ml-12  md:mt-20" src="images/cyber-security.png" width="2800px" height="300px" alt="Security" />
            </div>
            <div className="flex flex-col">
              <strong className="text-3xl md:text-5xl px-6 md:px-20 mt-7">Secure Connect</strong>
              <p className="text-lg md:text-xl text-gray-500 mt-6 md:mt-10 px-6 md:px-20">
                For U prioritizes the security and integrity of all evidence submitted to our platform. We provide a robust and user-friendly system for uploading various forms of evidence, including images, videos, audio recordings, and documents, to support your story. Our advanced encryption protocols ensure that all submissions are securely stored and protected from unauthorized access, safeguarding your sensitive information. Additionally, For U generates anonymous usernames for all users, ensuring that your identity remains protected and untraceable, allowing you to share your experiences without fear of exposure. By allowing you to submit comprehensive evidence securely and maintaining your anonymity, For U empowers you to share your story confidently, contributing to a community where experiences of unfair events can be voiced and acknowledged.
              </p>
            </div>
           
          </div>
         
          <i className="mt-6 md:mt-10 text-2xl md:text-3xl font-bold flex justify-center items-center">
            "Empower Your <strong className="underline decoration-yellow-400">Voice</strong>, Secure Your  <strong className="underline decoration-yellow-400">Story</strong>"
          </i>
        </div>

        <div className="bg-white min-h-screen">
          <div className="flex flex-col md:flex-row py-10">
            <div className="flex flex-col">
              <strong className="text-3xl md:text-5xl px-6 md:px-20 mt-7">Community Support</strong>
              <p className="text-lg md:text-xl text-gray-500 mt-6 md:mt-10 px-6 md:px-20">
                The importance of community support in navigating challenging experiences. Our platform provides a welcoming and inclusive space where individuals with similar experiences can connect, share, and find solidarity. Whether you're seeking encouragement, advice, or simply a listening ear, our community is here to support you every step of the way. By fostering meaningful connections and promoting empathy and understanding, For U empowers individuals to find strength in solidarity, knowing that they are not alone in their journey.
              </p>
            </div>
            <div className="md:mr-16">
              <img className="mt-10 md:mt-20" src="images/chat.png" width="1300px" height="300px" alt="Chat" />
            </div>
          </div>
          <i className="mt-6 md:mt-10 text-2xl md:text-3xl font-bold flex justify-center items-center">
            "United We <strong className="underline decoration-yellow-400">Stand</strong>, Stronger <strong className="underline decoration-yellow-400">Together</strong>"
          </i>
        </div>

        <div className="min-h-screen bg-black text-white">
          <div className="flex flex-col items-center justify-center">
            <img className="py-14" src="images/logo black.png" width="100px" alt="Logo" />
            <div>
              <p className="text-center text-xl mx-6 md:mx-40">
                Explore, connect, and share your voice with our vibrant community. Join us in our mission to foster collaboration, empower individuals, and build a supportive network. Together, we can create positive change.
              </p>
            </div>
            <button className="mt-10 md:mt-16 rounded-3xl bg-yellow-400 px-6 md:px-3 py-3 text-black font-bold">Get in Touch</button>
            <div className="flex flex-row gap-8 py-10">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </div>
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </div>
            </div>
            <div>
              <p>Copyright &copy; 2024</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

const Help = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto shadow">
        <h1 className="text-3xl font-bold mb-8 mt-12 ">Help & Support</h1>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <p>Welcome to <strong>For U</strong>. Our platform allows you to share your experiences and evidence of injustices anonymously and securely. Below you'll find guides and FAQs to help you navigate and use the platform effectively.</p>
        </section>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions (FAQs)</h2>
          
          <h3 className="text-xl font-semibold mb-2">1. How do I create an account?</h3>
          <p>Creating an account on <strong>For U</strong> is simple and secure:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Go to the sign-up page.</li>
            <li>Enter a valid email address and create a strong password.</li>
            <li>Follow the verification steps sent to your email.</li>
            <li>Your username will be generated automatically to ensure anonymity.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-2">2. How do I submit my story?</h3>
          <p>To submit your story:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Click on the "Create Post" button on the top right corner.</li>
            <li>Fill out the title and content of your story.</li>
            <li>Optionally, you can upload supporting evidence such as images, videos, audio recordings, and documents.</li>
            <li>Ensure you follow our guidelines before submitting your story.</li>
          </ul>

          {/* Add more FAQ sections similarly */}
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Troubleshooting</h2>
          
          <h3 className="text-xl font-semibold mb-2">1. I forgot my password. What should I do?</h3>
          <p>Click on the “Forgot Password” link on the login page. Enter your email address to receive a password reset link. Follow the instructions in the email to reset your password.</p>

          <h3 className="text-xl font-semibold mb-2">2. I'm having trouble uploading files. What can I do?</h3>
          <p>Ensure your files are within the supported formats and size limits. Try clearing your browser cache and cookies. If the problem persists, contact our support team.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
          <p>If you have any other questions or need further assistance, please contact our support team:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Email: support@foru.com</li>
            <li>Phone: 1-800-123-4567</li>
            <li>Live Chat: Available 24/7 on our website</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Community Guidelines</h2>
          <p>To ensure a safe and supportive environment, please adhere to our community guidelines:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Respect other users and their experiences.</li>
            <li>Do not share personal information.</li>
            <li>Avoid posting harmful or inappropriate content.</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
          <p>Your privacy is of utmost importance to us. Read our <a href="#" className="text-blue-500">Privacy Policy</a> to understand how we protect your information.</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Terms of Service</h2>
          <p>By using <strong>For U</strong>, you agree to our <a href="#" className="text-blue-500">Terms of Service</a>.</p>
        </section>
      </div>
    </div>
  );
};

export default Help;

import React from 'react'
import {Link} from 'react-router-dom'

export default function FAQ() {
  return (
<div className="text-xl px-10 py-10">
<p><strong className="text-5xl">FAQ</strong></p>
<p className="text-xl mb-6  ">(Frequently Asked Questions)</p>

<div className="flex flex-col gap-3">
<div className="flex flex-col gap-1">
<b>1. What is For U?</b>
<p>For U is an anonymous online community where individuals can share their stories, seek support, and connect with resources to help them find justice.
</p>
</div>

<div className="flex flex-col gap-1">
<b>2. How do I join?</b>
<p>You can join by clicking the "Join Now" button and filling out a simple registration form. Your identity will remain anonymous.
</p>
</div>

<div className="flex flex-col gap-1">
<b>3. Is my information safe?</b>
<p>Absolutely. We use robust security measures to protect your data and ensure your privacy. You can share your stories and evidence without fear.
</p>
</div>

<div className="flex flex-col gap-1">
<b>4. Can I delete my story or account?</b>
<p>Yes, you can delete your story or account at any time through the account settings page.
</p>
</div>

<div className="flex flex-col gap-1">
<b>5. How can I get support?</b>
<p>You can find links to various support resources, such as legal aid and counseling services, on our Resources page. Additionally, our community is here to provide emotional support and advice.
</p>
</div>

<div className="flex flex-col gap-1">
<b>6. What types of evidence can I submit?</b>
<p>You can submit various types of evidence, including images, videos, audio recordings, and documents. All submissions are securely handled to ensure your privacy.
</p>
</div>

<div className="flex flex-col gap-1">
<b>7. Who can see my story?</b>
<p>Your story will be visible to the community, but your identity will remain anonymous unless you choose to reveal it.
</p>
</div>

<div className="flex flex-col gap-1">
<b>8. How does the moderation work?</b>
<p>Our moderation team and automated systems work together to enforce community guidelines and ensure a safe environment. Any content that violates our policies will be removed.
</p>
</div>

<div className="flex flex-col gap-1">
<b>9. Where can I find more information?</b>
<p>For more details, please visit our About Us page or contact our support team through the Contact Us page.
</p>
</div>
</div>
</div>
  )
}

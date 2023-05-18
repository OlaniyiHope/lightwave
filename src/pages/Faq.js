import React, { useState } from 'react';
import Faqq from './Faqq';
import "./Faq.css"
function Faq () {
  const [faqs, setfaqs] = useState([
    {
      question: '	What Is Lightwave Creative Agency? ',
      answer: 'Lightwave Creative Agency is a team of innovative marketers who specialize in creating authentic and engaging content',
      open: true
    },
    {
      question: '	Is Lightwave sustainable?',
      answer: 'Lightwave is more than just a company - it is a movement. We are passionate about creating a circular economy and making sustainability the norm.',
      open: false
    },
    {
      question: '	How Many People Will I Be Working With?',
      answer: 'At Lightwave, we believe in providing our clients with the best possible experience. That is why, once you onboard with us, you will be assigned a full, dedicated team to work with you every step of the way.',
      open: false
    },
    {
      question: '	What Is The Minimum Contract Term?',
      answer: 'Our minimum contract term in Lightwave is 6 months.',
      open: false
    },
    {
      question: '	Our Guarantee?',
      answer: 'We offer an incredibly high minimum return on Ad spend over our contract time, or we we work for free if not achieved.',
      open: false
    },
    {
      question: '	What is your company primary mission? ',
      answer: 'Our key goal is to amplify sustainable brands, helping them shine in the crowded digital landscape.',
      open: false
    },
    {
      question: 'What services do you offer? ',
      answer: 'We specialize in user-generated content, paid social campaigns, Search Engine Marketing (SEM), and sustainable website and mobile app development.',
      open: false
    },
    {
      question: 'What is user-generated content? ',
      answer: 'User-generated content refers to any content, from text to videos, created by individuals rather than brands, which we use to enhance engagement and trust.',
      open: false
    },
    {
      question: 'What is your guarantee? ',
      answer: 'We’ll outperform your current UGC ads using TikTok/ Meta + our creatives. If we don’t, we’ll keep pushing, at no extra cost, until we do!',
      open: false
    },
    {
      question: 'Do we need to pay for creatives separately? ',
      answer: 'Creative fees? They’re bundled in our packages! ',
      open: false
    },
    {
      question: 'How does sustainability factor into your services? ',
      answer: 'Sustainability is incorporated into every aspect of our work. We advocate for eco-friendly practices in our digital marketing strategies and web services.',
      open: false
    },
    {
      question: 'What kind of businesses do you work with?  ',
      answer: 'We work predominantly with brands that prioritize sustainability and aim to make a positive global impact.',
      open: false
    },
    {
      question: 'How can I get started with your services? ',
      answer: 'Start by reaching out to us through our contact form (BOOK A CALL) We will discuss your requirements and how we can help fulfill them.',
      open: false
    },
    {
      question: 'How does sustainability factor into your services? ',
      answer: 'Sustainability is incorporated into every aspect of our work. We advocate for eco-friendly practices in our digital marketing strategies and web services.',
      open: false
    },
  ]);

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open
      } else {
        faq.open = false;
      }

      return faq;
    }))
  }


  return (
    <div className="App">
 
      <div className="faqs">
        {faqs.map((faq, i) => (
          <Faqq faq={faq} index={i} toggleFAQ={toggleFAQ} />
        ))}
      </div>
    </div>
  );
}

export default Faq;

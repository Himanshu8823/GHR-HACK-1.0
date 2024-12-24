import { useState } from "react";
import "../Styles/FAQ.css"; // Optional: Add styles here or use inline styles

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "What is a hackathon?", answer: "A hackathon is an event where participants collaborate intensively to create solutions, software, or projects." },
    { question: "How big a team can be?", answer: "Teams can have up to 6 members, but you can also participate solo." },
    { question: "Who all can participate?", answer: "Anyone with a passion for coding and innovation can participate." },
    { question: "Do I need to have any specific qualifications to be a participant for the hackathon?", answer: "No specific qualifications are required. Just enthusiasm to create something awesome!" },
    { question: "Is there any registration fees for participation?", answer: "No, participation is completely free." },
    { question: "Can I start working on my hack before the event?", answer: "No, all hacks should be started during the hackathon timeframe." },
    { question: "What to bring to the hackathon?", answer: "Bring your laptop, charger, and lots of energy!" },
    { question: "Does GHR-HACK provide Internet facility during hackathon?", answer: "Yes, we provide a high-speed internet connection for all participants." },
    { question: "What is the shortlisting procedure?", answer: "Participants are shortlisted based on the quality and feasibility of their ideas &  solutions." },
    { question: "I am below 18 or a high school student. Can I attend the hackathon?", answer: "Yes, high school students can attend with parental consent." },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <ul className="faq-list">
        {faqs.map((faq, index) => (
          <li key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className="icon">{openIndex === index ? "-" : "+"}</span>
            </button>
            {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQ;

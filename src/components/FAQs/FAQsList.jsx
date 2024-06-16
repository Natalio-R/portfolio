import React from "react";
import { FAQsCard } from "../../hooks/index";
import faqsData from "../../data/faqs.json";

const FAQsList = () => {
  return (
    <div className="faqs__container">
      {faqsData.map((faq) => (
        <FAQsCard key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQsList;

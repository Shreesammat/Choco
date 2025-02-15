import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is my data secure?",
    answer: "Yes, we use end-to-end encryption to ensure your notes are secure and private.",
  },
  {
    question: "Can I access my notes offline?",
    answer: "Yes, you can access and edit your notes offline. They will sync automatically when you're back online.",
  },
  {
    question: "Is there a limit to how many notes I can create?",
    answer: "No, you can create unlimited notes with both our Free and Premium plans.",
  },
  {
    question: "Can I collaborate with others on my notes?",
    answer:
      "Yes, our Premium plan includes collaboration features that allow you to share and edit notes with others in real-time.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-white dark:bg-gray-900 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full text-left p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-gray-800 dark:text-white">{faq.question}</span>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-600 dark:text-gray-300 transform transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-b-lg">
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

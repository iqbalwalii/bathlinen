// import { Button } from "@/components/ui/button";
import {MessageSquareDot, Mails, BookOpenText} from 'lucide-react';

const helpOptions = [
  {
    title: "Customer Service",
    desc: "Click 'Chat Now' for instant support from our friendly staff.",
    action: "Chat Now",
    icon : <MessageSquareDot className="w-50 h-6 sm:w-9 sm:h-6 mb-2 text-blue-400 justify-center"/>,
  },
  {
    title: "Send Mail",
    desc: "Click 'Contact Us' to get started with email support.",
    action: "Contact Us",
    icon: <Mails className="w-6 h-6 sm:w-9 sm:h-6 mb-2 text-blue-400 justify-center"/>
  },
  {
    title: "Bulk Inquiry",
    desc: "Click 'Read Now' for bulk purchase support and additional help.",
    action: "Read Now",
    icon : <BookOpenText className='className="w-6 h-6 sm:w-9 sm:h-6 mb-2 text-blue-400 justify-center"'/>,
  },
];

export default function HelpSection() {
  return (
    <section id="help" className="px-6 md:px-12 py-16">
      <h3 className="text-3xl sm:text-3xl font-semibold text-center mb-6 text-amber-300">Need More Help?</h3>
      <p className="text-center max-w-2xl mx-auto mb-10 text-gray-700 text-sm sm:text-base">
        Whether you have a quick question or need detailed support, our dedicated teams are ready to provide you with the assistance you need. Explore our contact options below to get the help that suits your query.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {helpOptions.map((opt, i) => (
          <div key={i} className="p-6 bg-gray-50 rounded-xl shadow-md text-center flex flex-col justify-between">
            <div className='flex flex-col align-center items-center'>
              {opt.icon}
              <h4 className="text-lg sm:text-xl font-semibold my-2">{opt.title}</h4>
              <p className="mb-4 text-gray-600 text-sm sm:text-base">{opt.desc}</p>
            <button className="w-30 bg-amber-300 hover:bg-blue-400 hover:text-white text-black-700- font-bold py-2 px-4 rounded">
 {opt.action}
</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

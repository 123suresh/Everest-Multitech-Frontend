import React from 'react';

function Contact() {
  return (
    <div className="bg-white p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">EVEREST</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Everest Multi Tech Phone & Computer Repair</h2>
        <p className="text-lg text-gray-600 mb-8">We are Ready to assist you. Please contact us if you cannot find an answer to your question.</p>

        <img src='//img1.wsimg.com/isteam/ip/7fe5675c-56c8-4e1d-baba-1474b5263ce5/blob-8e4d79e.png/:/rs=h:127,cg:true,m/qt=q:95' />

        <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Us</h3>
          <p className="text-gray-600 mb-4">Let us tailor a service package that meets your needs. Tell us a little about your issue, and we will get back to you with some ideas as soon as possible.</p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Contact Us
          </button>
        </div>

        <div className="text-left">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Everest Multi Tech</h3>
          <p className="text-gray-600 mb-2">1929 State Route 256</p>
          <p className="text-gray-600 mb-2">Reproldsburg, Ohio 43068, United States</p>
          <p className="text-gray-600 mb-4">Phone: (614) 282-7012</p>
          <p className="text-gray-600">Open today: 10:00 am - 07:00 pm</p>
          <p className="text-gray-600">Tuesday - Sunday: 10:00 am - 07:00 pm</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
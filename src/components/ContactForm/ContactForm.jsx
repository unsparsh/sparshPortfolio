import React, { useEffect } from 'react';

const ContactForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
    script.async = true;
    script.onload = () => console.log('Visme script loaded');
    script.onerror = () => console.error('Error loading Visme script');
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div
        className="visme_d"
        data-title="Untitled Project"
        data-url="mx87qv4w-untitled-project"
        data-domain="forms"
        data-full-page="false"
        data-min-height="500px"
        data-form-id="80572"
      ></div>
    </div>
  );
};

export default ContactForm;

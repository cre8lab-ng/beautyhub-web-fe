import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { X } from 'lucide-react';
import Modal from './Modal';

export default function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal on component mount (app launch)
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    }),
    onSubmit: (values) => {
      console.log('Subscribing email:', values.email);
      setIsOpen(false);
    },
  });

  return (
    <Modal 
      isOpen={isOpen} 
      onClose={handleClose} 
      maxWidth="max-w-4xl" 
      showCloseButton={false}
    >
      <div className="flex flex-col md:flex-row min-h-[400px]">
        {/* Left Side - Content */}
        <div className="flex w-full flex-col justify-center bg-[#ffd9f0] p-8 md:w-1/2 md:p-12 relative">
          {/* Brand/Logo Placeholder */}
           
          <img
            src="https://res.cloudinary.com/debcfaccq/image/upload/v1766008840/Asset_12BH_bwsukr.png"
            alt="Logo"
          />

          <div className="text-center">
            <h2 className="mb-4 text-4xl font-black uppercase leading-tight  tracking-wide">
              Never Miss Out
            </h2>
            <p className="mb-8  text-sm font-medium">
              Major sales? New drops?? Get it all, straight to your inbox
            </p>
          </div>

          <form onSubmit={formik.handleSubmit} className="w-full space-y-4">
            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="EMAIL"
                className={`w-full bg-white px-4 py-3 text-sm font-semibold text-gray-900 placeholder-gray-500 outline-none transition-all ${
                  formik.touched.email && formik.errors.email
                    ? 'ring-2 ring-red-500'
                    : 'focus:ring-2 focus:ring-white/50'
                }`}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="absolute -bottom-5 left-0 text-xs font-bold text-white bg-red-500 px-1 rounded">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            
            <button
              type="submit"
              className="w-full bg-black px-4 py-3 text-sm font-bold uppercase tracking-wider text-white transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Sign Me Up
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="relative h-64 w-full md:h-auto md:w-1/2">
           {/* Custom Close Button on top of image */}
           <button
            onClick={handleClose}
            className="absolute right-4 top-4 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-md transition-transform hover:scale-110 active:scale-95"
          >
            <X size={20} strokeWidth={1.5} />
          </button>
          
          <img
            src="https://res.cloudinary.com/debcfaccq/image/upload/v1766555101/d0c4edb3-0eac-4bb0-a727-195b4b5e8814_v0cjag.jpg"
            alt="Beauty Products"
            className="h-full w-full object-cover"
          />
          {/* Overlay to ensure close button visibility if needed, though white button on image usually works */}
        </div>
      </div>
    </Modal>
  );
}

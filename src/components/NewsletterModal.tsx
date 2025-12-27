import { useState, useEffect } from "react";
import { Formik, Form, Field, FieldProps } from "formik";
import * as Yup from "yup";
import { X } from "lucide-react";
import Image from "next/image";
import Modal from "./Modal";
import Button from "./Button";
import Input from "./Input";

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

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      maxWidth="max-w-[780px]"
      showCloseButton={false}
    >
      <div className="flex flex-col md:flex-row md:h-[540px]">
        {/* Left Side - Content */}
        <div className="flex w-full flex-col justify-center bg-soft-pink  md:w-1/2 md:p-12 relative">
          <div className="mb-6 flex justify-center">
            <Image
              src="https://res.cloudinary.com/debcfaccq/image/upload/v1766008840/Asset_12BH_bwsukr.png"
              alt="Beauty Hub Logo"
              width={120}
              height={60}
              priority
            />
          </div>

          <div className="text-center">
            <p className="mb-3 text-sm font-medium">
              Be first to hear about what’s new.
            </p>
            <h2 className="mb-4 text-3xl font-black uppercase leading-none tracking-wide ">
              Stay in the Know
            </h2>

            <p className="mb-8 text-sm font-medium leading-relaxed">
              Major sales? New drops?? Get it all, straight to your inbox
            </p>
          </div>

          <Formik
            initialValues={{ email: "" }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log("Subscribing email:", values.email);
              setIsOpen(false);
            }}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="w-full space-y-4">
                <Field name="email">
                  {({ field, meta }: FieldProps) => (
                    <Input
                      {...field}
                      type="email"
                      id="email"
                      placeholder="EMAIL"
                      error={
                        meta.touched && meta.error ? meta.error : undefined
                      }
                      className="focus:ring-white/50" // Override focus ring color for this specific pink background
                    />
                  )}
                </Field>

                <Button
                  type="submit"
                  variant="bh"
                  fullWidth
                  isLoading={isSubmitting}
                >
                  Sign Me Up
                </Button>
              </Form>
            )}
          </Formik>
        </div>

        {/* Right Side - Image */}
        <div className="relative h-64 w-full md:h-auto md:w-1/2">
          {/* Custom Close Button on top of image */}
          <Button
            variant="secondary"
            size="icon"
            onClick={handleClose}
            className="absolute right-4 top-4 z-20 shadow-md rounded-full"
            aria-label="Close modal"
          >
            <X size={20} strokeWidth={1.5} />
          </Button>

          <Image
            src="https://res.cloudinary.com/debcfaccq/image/upload/v1766830191/aa6715ee-4c18-42a2-87cf-d06720bc39a3_i16wpr.jpg"
            alt="Newsletter Image"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay to ensure close button visibility if needed, though white button on image usually works */}
        </div>
      </div>
    </Modal>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import "./styles/testimonials.css";

interface Testimonial {
  id: number;
  name: string;
  image: string;
  text: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}


const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const [activeTestimonial, setActiveTestimonial] =
    useState<Testimonial | null>(null);

  const openModal = (testimonial: Testimonial) => {
    setActiveTestimonial(testimonial);
  };

  const closeModal = () => {
    setActiveTestimonial(null);
  };

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (activeTestimonial) {
      document.addEventListener("keydown", handleEscKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscKey);
    };
  }, [activeTestimonial]);

  return (
    <div>
      <section className="testimonials">
        <ul className="testimonials-list has-scrollbar">
          {testimonials.map((testimonial) => (
            <li key={testimonial.id} className="testimonials-item">
              <div
                className="content-card"
                onClick={() => openModal(testimonial)}
              >
                <figure className="testimonials-avatar-box">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="testimonials-avatar"
                  />
                </figure>
                <h4 className="h4 testimonials-item-title">
                  {testimonial.name}
                </h4>
                <div className="testimonials-text">
                  <p>{testimonial.text}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {activeTestimonial && (
        <div className="modal-container active" aria-modal="true" role="dialog">
          <div
            className={`overlay ${activeTestimonial ? "active" : ""}`}
            onClick={closeModal}
          ></div>
          <section className="testimonials-modal">
            <button
              className="modal-close-btn"
              onClick={closeModal}
              aria-label="Close modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="modal-img-wrapper">
              <figure className="modal-avatar-box">
                <Image
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  width={80}
                  height={80}
                  className="modal-avatar"
                />
              </figure>
              <Image
                src="https://codewithsadee.github.io/vcard-personal-portfolio/assets/images/icon-quote.svg"
                alt="quote icon"
                width={40}
                height={40}
              />
            </div>

            <div className="modal-content">
              <h4 className="h3 modal-title">{activeTestimonial.name}</h4>
              <time dateTime="2021-06-14">14 June, 2021</time>
              <div>
                <p>{activeTestimonial.text}</p>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default Testimonials;

import React from "react";

const Contact = () => {
  // const sendEmail = (event) => {
  //   event.preventDefault();
  // };

  return (
    <div className="min-h-screen">
      <div className="text-center mt-32">
        <h1 className="text-xl md:text-6xl text-primary font-bold">
          Contact Form
        </h1>
      </div>
      <div className="my-16 text-center mx-auto w-1/2">
        <form
          action="https://formspree.io/f/mvolyqan"
          method="POST"
          // onSubmit={sendEmail}
        >
          <div className="form-control w-full mt-2">
            <label className="label">
              <span className="label-text text-lg">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Type your name"
              className="input input-bordered w-full text-xl"
              required
            />
          </div>
          <div className="form-control w-full mt-2 ">
            <label className="label">
              <span className="label-text text-lg ">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Type your email"
              className="input input-bordered w-full text-xl"
              required
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text text-lg">Message</span>
            </label>
            <textarea
              class="textarea textarea-bordered text-lg h-40"
              placeholder="Write your message"
            ></textarea>
          </div>
          <button className=" mt-5 btn btn-primary md:px-16 text-xl ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

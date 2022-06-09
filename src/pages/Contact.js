import React from "react";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="my-8 text-center mx-auto w-1/2">
      <div>
        <h1 className="text-xl md:text-4xl text-primary font-bold">
          Contact Form
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-control w-full mt-2">
          <label className="label">
            <span className="label-text text-lg">Name</span>
          </label>
          <input
            type="text"
            placeholder="Type your name"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full mt-2 ">
          <label className="label">
            <span className="label-text text-lg ">Email</span>
          </label>
          <input
            type="text"
            placeholder="Type your email"
            className="input input-bordered w-full "
          />
        </div>
        <div className="form-control w-full mt-2 ">
          <label className="label">
            <span className="label-text text-lg ">Message</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="write here your message"
          ></textarea>
        </div>

        <button className=" mt-5 btn btn-primary md:px-16 ">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { preview, img_2 } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormField, Loader } from "../components";

let CreatePost = () => {
  let navigate = useNavigate();

  let [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  let [generatingImg, setGeneratingImg] = useState(false);
  let [loading, setLoading] = useState(false);

  let handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  let handleSurpriseMe = () => {
    let randomPrompt = getRandomPrompt(form.prompt);
    setForm({ ...form, prompt: randomPrompt });
  };

  let generateImage = async () => {
    if (form.prompt) {
      try {
        setGeneratingImg(true);
        let response = await fetch("http://localhost:8080/api/v1/dalle/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            prompt: form.prompt,
          }),
        })
          .then(async (response) => {
            if (response.ok) {
              const data = await response.json();
              setForm({
                ...form,
                photo: `data:image/jpeg;base64,${data.photo}`,
              });
            } else {
              alert(`Error retrieving image: ${response.status}`);
            }
          })
          .catch((err) => {
            alert("Error fetching image: " + err);
          });

        // let data = await response.json();
        // setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
      } catch (err) {
        alert(err);
        console.log(err);
      } finally {
        setGeneratingImg(false);
      }
    } else {
      alert("Please provide proper prompt");
    }
  };

  let handleSubmit = () => {};

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[14px] max-w-[500px]">
          Generate an imaginative image through DALL-E AI and share it with the
          community
        </p>
      </div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
            labelName="Your Name"
            type="text"
            name="name"
            placeholder="Ex., john doe"
            value={form.name}
            handleChange={handleChange}
          />

          <FormField
            labelName="Prompt"
            type="text"
            name="prompt"
            placeholder="An Impressionist oil painting of sunflowers in a purple vase…"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />

          <div className="relative bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-64 p-3 h-64 flex justify-center items-center">
            {form.photo ? (
              <img
                src={preview}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-9/12 h-9/12 object-contain opacity-40"
              />
            )}

            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex gap-5">
          <button
            type="button"
            onClick={generateImage}
            className=" text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {generatingImg ? "Generating..." : "Generate"}
          </button>
        </div>

        <div className="mt-10">
          <p className="mt-2 text-[#666e75] text-[14px]">
            ** Once you have created the image you want, you can share it with
            others in the community **
          </p>
          <button
            type="submit"
            className="mt-3 text-white bg-[#6469ff] font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            {loading ? "Sharing..." : "Share with the Community"}
          </button>
          <Link to="/Output"> Your Out put genrtated </Link>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;

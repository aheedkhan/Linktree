import React from "react";
import Github from "./assets/github_733609 (1).png";
import Instagram from "./assets/instagram_1400829.png";
import LinkedIn from "./assets/linkedin_3536569.png";
import Xtwitter from "./assets/twitter_5968830.png";
import backgroundImage from "./assets/aa.jpg";
import Image from "./assets/Screenshot 2024-10-19 215932-min.png";

function App() {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-between p-36 select-none bg-cover bg-center "
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <section>
        {" "}
        <div className=" self-center h-96 w-96  flex flex-col  -mt-20">
          {" "}
          <div className=" self-center flex flex-col ">
            {" "}
            <img
              className="self-center h-32 w-32 rounded-full  duration-700  hover:scale-105"
              src={Image}
              alt=""
            />
            <h1 className="self-center font-josefin select-none mt-3 mb-2 text-2xl text-green-500 hover:scale-105 duration-1000 ">
              @aheed_tahir
            </h1>{" "}
            <p className="font-josefin select-none self-center text-teal-400 hover:scale-105 duration-1000 ">
           '| Cyber Security Enthusiast 🔒| </br>Full Stack Developer 💻 </br>| Lifelong Learner 📚 |'
            </p>
          </div>
          <div className="flex flex-col self-center font-josefin mt-6   p-2">
            <a
              href="https://www.instagram.com/notaheed?igsh=aGdsMG5pZTZjajIy"
              type="button"
              class="flex  duration-500 text-white active:scale-90 active:bg-slate-500  hover:text-black border border-white hover:bg-white hover:scale-105   font-medium rounded-lg text-sm px-5 py-2.5  mb-2 w-60"
            >
              <img className="h-7 w-7 bg-white rounded-lg" src={Instagram} />
              <p className="ml-2 text-lg mt-1">Instagram</p>
            </a>
            <a
              href="https://www.linkedin.com/in/aheed-tahir/"
              type="button"
              class="flex content-center hover:scale-105 active:scale-90 active:bg-slate-500 duration-500 text-white hover:text-black border border-white hover:bg-white   font-medium rounded-lg text-sm px-5 py-2.5  mb-2 "
            >
              <img className=" h-7 w-7 bg-white rounded-md" src={LinkedIn} />
              <p className="ml-2 text-lg mt-1">LinkedIn</p>
            </a>
            <a
              href="https://twitter.com/AheedKhan6"
              type="button"
              class="flex text-white hover:scale-105 active:scale-90 active:bg-slate-500 duration-500 hover:text-black border border-white hover:bg-white   font-medium rounded-lg text-sm px-5 py-2.5   mb-2 "
            >
              <img className="bg-white rounded-md h-7 w-7" src={Xtwitter} />
              <p className="ml-2 text-lg mt-1">Twitter </p>
            </a>
            <a
              type="button"
              href="https://github.com/aheedkhan"
              class="flex text-white hover:scale-105 active:scale-90 active:bg-slate-500  duration-500 hover:text-black border border-white hover:bg-white   font-medium rounded-lg text-sm px-5 py-2.5  "
            >
              <img className="h-7 w-7 bg-white rounded-full" src={Github} />
              <p className="ml-2 text-lg mt-1">GitHub</p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;

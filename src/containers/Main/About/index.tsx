import React from "react";

import "./About.scss";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="about__description">
        <h1>Hello, I&apos;m a Full-stack Pepelover</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean et
          tortor at risus. Felis imperdiet proin fermentum leo vel orci porta
          non pulvinar. In nisl nisi scelerisque eu ultrices vitae auctor. Sed
          lectus vestibulum mattis ullamcorper velit sed ullamcorper. Amet massa
          vitae tortor condimentum lacinia quis vel. Dolor purus non enim
          praesent elementum facilisis leo. Volutpat consequat mauris nunc
          congue nisi. Arcu dictum varius duis at consectetur lorem donec massa
          sapien. Elit ut aliquam purus sit. Nisl vel pretium lectus quam. Risus
          in hendrerit gravida rutrum. Nunc sed velit dignissim sodales ut eu
          sem integer. Ut enim blandit volutpat maecenas volutpat blandit.
        </p>
      </div>

      <div className="about__image">
        <img
          className="about__image__pepe"
          src="https://i1.sndcdn.com/avatars-000485493264-22mu3a-t500x500.jpg"
          alt="Pepe"
        />

        <svg
          className="about__image__sweat--left"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 153.683 153.683"
        >
          <g>
            <path
              d="M76.845,153.683c-27.055,0-49.055-22-49.055-49.054c0-24.746,39.546-94.126,44.046-101.969
         c2.07-3.547,7.925-3.547,10.008,0c4.512,7.843,44.049,77.223,44.049,101.969C125.898,131.683,103.904,153.683,76.845,153.683z
          M76.845,17.314C63.083,42.191,39.32,88.499,39.32,104.629c0,20.679,16.831,37.515,37.525,37.515
         c20.69,0,37.521-16.83,37.521-37.515C114.365,88.487,90.605,42.191,76.845,17.314z"
            />
            <path
              d="M76.845,130.599c-3.194,0-5.773-2.581-5.773-5.778c0-3.191,2.584-5.767,5.773-5.767c7.952,0,14.419-6.442,14.419-14.376
         c0-3.191,2.581-5.773,5.772-5.773c3.203,0,5.784,2.582,5.784,5.773C102.82,118.975,91.166,130.599,76.845,130.599z"
            />
          </g>
        </svg>

        <svg
          className="about__image__sweat--right"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 153.683 153.683"
        >
          <g>
            <path
              d="M76.845,153.683c-27.055,0-49.055-22-49.055-49.054c0-24.746,39.546-94.126,44.046-101.969
         c2.07-3.547,7.925-3.547,10.008,0c4.512,7.843,44.049,77.223,44.049,101.969C125.898,131.683,103.904,153.683,76.845,153.683z
          M76.845,17.314C63.083,42.191,39.32,88.499,39.32,104.629c0,20.679,16.831,37.515,37.525,37.515
         c20.69,0,37.521-16.83,37.521-37.515C114.365,88.487,90.605,42.191,76.845,17.314z"
            />
            <path
              d="M76.845,130.599c-3.194,0-5.773-2.581-5.773-5.778c0-3.191,2.584-5.767,5.773-5.767c7.952,0,14.419-6.442,14.419-14.376
         c0-3.191,2.581-5.773,5.772-5.773c3.203,0,5.784,2.582,5.784,5.773C102.82,118.975,91.166,130.599,76.845,130.599z"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

About.displayName = "About Section";
import Head from "next/head";
import { Inter } from "@next/font/google";
import { useState } from "react";
import Image from "next/legacy/image";
import data from "./api/data";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [index, setIndex] = useState(0);
  const items = data.items;

  const prev = () => {
    setIndex((index) => (index -= 1));
  };

  const next = () => {
    setIndex((index) => (index += 1));
  };

  return (
    <div>
      <Head>
        <title>Assessment</title>
        <meta charSet="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={inter.className}>
        <nav className="nav-bar">
          <ul>
            <li className="fade-in">Nadia Tiwing</li>
          </ul>
        </nav>
        <h1 id="title" className="fade-in">
          {" "}
          Different Kinds of <span className="highlight">Cyberattack</span>
        </h1>
        <div className="slideshow fade-in">
          {index > 0 && (
            <button
              className="arrow-btn prev"
              type="button"
              onClick={() => {
                prev();
              }}
            >
              &lang;
            </button>
          )}
          {index + 1 != items.length && (
            <button
              className="arrow-btn next"
              type="button"
              onClick={() => {
                next();
              }}
            >
              &rang;
            </button>
          )}

          <div
            className="slideshowSlider"
            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
          >
            {items.map((item, i) => (
              <div
                className={index == i ? "slide card active" : "slide card"}
                key={item.id}
              >
                <div className="img-container">
                  <Image
                    src={item.imgSrc}
                    alt={"Image about " + item.title}
                    layout="fill"
                    blurDataURL={item.imgSrc}
                    placeholder="blur"
                  />
                </div>
                <div className="card-body">
                  <h4 className="card-title">{item.title}</h4>
                  <div className="card-content">
                    <p className="card-text">{item.content}</p>
                    <button className="learn-btn">Learn more</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="slideshowDots">
            {items.map((_, idx) => (
              <div
                key={idx}
                className={`slideshowDot${index === idx ? " active" : ""}`}
                onClick={() => {
                  setIndex(idx);
                }}
              ></div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

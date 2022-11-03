import Head from "next/head";
import { Inter } from "@next/font/google";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";

const inter = Inter({
  weight: "400",
  subsets: ["latin"],
});

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#0088FE",
  "black",
  "lightblue",
];

const items = [
  {
    id: "item-0",
    imgSrc:
      "https://cms.recordedfuture.com/uploads/product_threats_ransomware_header_f3e3ea6261.jpg",
    title: "Ransomware",
    content:
      "Ransomware methods continue to evolve and multiply, with tactics, techniques, and procedures (TTPs) changing constantly. Recorded Future proactively keeps tabs on these trends, providing intelligence to help you proactively detect, hunt, and monitor ransomware attacks.",
  },
  {
    id: "item-1",
    imgSrc:
      "https://cms.recordedfuture.com/uploads/platform_threats_state_sponsored_bc5ba64140.jpg",
    title: "State-Sponsored Attacks",
    content:
      "State-sponsored cyber actors aggressively target networks in order to conduct espionage and compromise, steal, alter, or destroy information. These actors go to great lengths to remain undetected. Intelligence brings them out of the shadows, providing insight into who they are, how they operate, and how they can be stopped.",
  },
  {
    id: "item-3",
    imgSrc:
      "https://cms.recordedfuture.com/uploads/platform_threats_phishing_75e06a3d2f.jpg",
    title: "Phishing",
    content:
      "Millions of phishing emails are sent every day, targeting your employees and customers. Human error opens the door for attackers to gain network access, and move freely while exfiltrating critical data. Intelligence helps you track phishing campaigns, and the infrastructure used to deliver malware, allowing you to accelerate your investigations and defend against future attacks.",
  },
  {
    id: "item-4",
    imgSrc:
      "https://cms.recordedfuture.com/uploads/platform_threats_supply_third_party_ee98a81ac8.jpg",
    title: "Supply and Third-Party Risk",
    content:
      "Adversaries are continuously targeting third parties, suppliers, and vendors to launch software supply chain attacks, disrupt physical facilities, deploy ransomware, and more. Intelligence helps you to quickly identify and proactively mitigate supply chain risk before the damage is done.",
  },
  {
    id: "item-5",
    imgSrc:
      "https://cms.recordedfuture.com/uploads/platform_threats_dark_web_monitoring_5f3d9aa99d.jpg",
    title: "Dark Web Monitoring",
    content:
      "The dark web is a marketplace for emerging cyber threats, and a rich source of intelligence that is often relevant to a broad spectrum of potential targets. Our machine learning and natural language processing instantly creates links from sites on the dark web to other threat sources, enabling you to more quickly identify, profile, and mitigate risks to your organization.",
  },
  {
    id: "item-6",
    imgSrc:
      "https://cms.recordedfuture.com/uploads/credit_card_data_security_a412883ed4.jpg",
    title: "Payment Fraud",
    content:
      "Criminals leverage a number of nefarious methods to infiltrate online e-commerce sites and in-store POS systems to steal payment card information. From injecting malicious scripts into Google Tag Manager to creating fake payment forms, the tactics criminals use are constantly evolving. Recorded Future proactively proactively detects attacker infrastructure, compromised points of purchase, and stolen card data to prevent fraud before it occurs.",
  },
];
const loader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

export default function Home() {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((index) => (index -= 1));
  };

  const next = () => {
    setIndex((index) => (index += 1));
  };

  //gray - #22242e
  //red - #c3332b
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
            <li>Nadia Tiwing</li>
          </ul>
        </nav>
        <h1 id="title">
          {" "}
          Different Kinds of <span className="highlight">Cyberattack</span>
        </h1>
        <div className="slideshow">
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
                <img
                  src={item.imgSrc}
                  alt={item.title + " image"}
                  className="img"
                />
                {/* <Image
                  src={item.imgSrc}
                  alt={"Image about " + item.title}
                  blurDataURL={item.imgSrc}
                  placeholder="blur"
                  width={370}
                  height={180}
                /> */}
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
            {colors.map((_, idx) => (
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

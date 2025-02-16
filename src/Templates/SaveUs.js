import React, { useEffect } from "react";
import "../Css Files/SaveUs.css";
import pol1 from "../Images/pol1.jpg";
import pol2 from "../Images/pol2.jpg";
import pol3 from "../Images/pol3.jpg";
import pol4 from "../Images/pol4.jpg";
import nature1 from "../Images/nature1.jpg";
import nature2 from "../Images/nature2.jpg";
import nature3 from "../Images/nature3.jpg";
import nature4 from "../Images/nature4.jpg";
import logo1 from "../Images/logo1.png";
import logo2 from "../Images/logo2.png";
import logo3 from "../Images/logo3.png";
import logo4 from "../Images/logo4.png";
import logo5 from "../Images/logo5.png";
import logo6 from "../Images/logo6.png";
import logo7 from "../Images/logo7.png";
import logo8 from "../Images/logo8.png";
import logo9 from "../Images/logo9.png";
import biglogo1 from "../Images/biglogo1.png";
import biglogo2 from "../Images/biglogo2.png";
import biglogo3 from "../Images/biglogo3.png";
import biglogo4 from "../Images/biglogo4.png";
import biglogo5 from "../Images/biglogo5.png";
import biglogo6 from "../Images/biglogo6.png";
import biglogo7 from "../Images/biglogo7.png";
import biglogo8 from "../Images/biglogo8.png";
import info1 from "../Images/info1.png";
import info2 from "../Images/info2.png";
import info3 from "../Images/info3.png";
import info4 from "../Images/info4.png";
import info5 from "../Images/info5.png";
import info6 from "../Images/info6.png";

function SaveUs() {
  useEffect(() => {
    let observer;

    const timeoutId = setTimeout(() => {
      const images = document.querySelectorAll(".div-img");

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );

      images.forEach((img) => observer.observe(img));
    }, 1000);

    return () => {
      clearTimeout(timeoutId);

      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div className="save-us">
      <h1>What should we do?</h1>
      <section className="container">
        <div className="div a1th">
          <img alt="" className="div-img" src={pol1}></img>
        </div>
        <div className="div a2th">
          <img alt="" className="div-img" src={nature1}></img>
        </div>
        <div className="div a3th">
          <img alt="" className="div-img" src={pol2}></img>
        </div>
        <div className="div a4th">
          <img alt="" className="div-img" src={nature2}></img>
        </div>
        <div className="div a5th">
          <img alt="" className="div-img" src={pol3}></img>
        </div>
        <div className="div a6th">
          <img alt="" className="div-img" src={nature3}></img>
        </div>
        <div className="div a7th">
          <img alt="" className="div-img" src={pol4}></img>
        </div>
        <div className="div a8th">
          <img alt="" className="div-img" src={nature4}></img>
        </div>
      </section>
      <h1>Start Small</h1>

      <section className="container2">
        <div className="div b1th">
          <img alt="" className="div-img" src={logo1}></img>
        </div>
        <div className="div b2th">
          <img alt="" className="div-img" src={logo2}></img>
        </div>
        <div className="div b3th">
          <img alt="" className="div-img" src={logo3}></img>
        </div>
        <div className="div b4th">
          <img alt="" className="div-img" src={logo4}></img>
        </div>
        <div className="div b5th">
          <img alt="" className="div-img" src={logo5}></img>
        </div>
        <div className="div b6th">
          <img alt="" className="div-img" src={logo6}></img>
        </div>
        <div className="div b7th">
          <img alt="" className="div-img" src={logo7}></img>
        </div>
        <div className="div b8th">
          <img alt="" className="div-img" src={logo8}></img>
        </div>
        <div className="div b9th">
          <img alt="" className="div-img" src={logo9}></img>
        </div>
      </section>
      <h1>Maybe someday it will grow</h1>
      <section className="container">
        <div className="div a1th">
          <img alt="" className="div-img" src={biglogo1}></img>
        </div>
        <div className="div a2th">
          <img alt="" className="div-img" src={biglogo2}></img>
        </div>
        <div className="div a3th">
          <img alt="" className="div-img" src={biglogo3}></img>
        </div>
        <div className="div a4th">
          <img alt="" className="div-img" src={biglogo4}></img>
        </div>
        <div className="div a5th">
          <img alt="" className="div-img" src={biglogo5}></img>
        </div>
        <div className="div a6th">
          <img alt="" className="div-img" src={biglogo6}></img>
        </div>
        <div className="div a7th">
          <img alt="" className="div-img" src={biglogo7}></img>
        </div>
        <div className="div a8th">
          <img alt="" className="div-img" src={biglogo8}></img>
        </div>
      </section>
      <h1>Still didn't get it?</h1>
      <h2>Hear me out then.</h2>
      <div className="stepsconta">
        <ul className="steps-to-solve">
          <li className="used-tools-container right">
            <img src={info1} alt="" className="highlight-img"></img>
            <p>
              Our planet is the common home of humanity. However, the
              sustainability of this home is increasingly threatened. Every day,
              we feel the devastating effects of climate change more and more:
              rising sea levels, sudden temperature changes, droughts, and
              increasingly frequent natural disasters are the most concrete
              indicators of this. Yet, there is still a glimmer of hope. It is
              not too late. If we take action today, we can prevent this change
              by living in harmony with nature. This responsibility does not
              belong solely to governments or large corporations; it rests on
              the shoulders of every individual, every family, and every
              community. By adopting more sustainable living habits, we can
              reduce our waste, shrink our carbon footprint, and support
              environmentally friendly policies. Taking steps such as saving
              electricity, reducing plastic usage, and contributing to the
              conservation of natural resources can lead the world to a
              healthier future. Leaving pristine forests, clear lakes, and
              vibrant ecosystems for future generations should be our common
              goal.
            </p>
          </li>
          <li className="used-tools-container left">
            <img src={info2} alt="" className="highlight-img"></img>
            <p>
              Saving the world may seem like a daunting task. However, every
              great transformation begins with small steps. Changing our habits
              a little is a giant step toward a sustainable future. Using
              energy-saving light bulbs, eliminating single-use plastics from
              our lives, and choosing to walk or cycle instead of driving short
              distances are the simplest of these steps. Additionally,
              composting organic waste from our kitchens to return it to the
              soil, using water-saving showerheads and faucets to conserve
              valuable water resources can make a big difference. Unplugging
              unused devices at home may seem small, but these actions can
              significantly reduce overall carbon emissions. Spreading these
              habits across society can initiate a significant transformation in
              our ecosystem. The small, conscious steps we take every day will
              create a huge impact on tomorrow’s world. The sooner we embrace a
              more sustainable lifestyle, the greater our contribution to the
              planet will be.
            </p>
          </li>
          <li className="used-tools-container right">
            <img src={info3} alt="" className="highlight-img"></img>
            <p>
              Individual efforts are valuable and necessary, but the key to
              accelerating change lies in the power of community. By supporting
              ecological projects in your local area, you can multiply your
              impact. Participating in neighborhood tree-planting campaigns,
              joining park and beach clean-up events, or volunteering for local
              organizations not only contributes to nature but also inspires
              those around you. To support community movements, workshops on
              renewable energy, recycling, and similar topics can be organized,
              or financial support can be provided to such projects. You can
              directly contribute by suggesting environmentally friendly
              policies to your local government. Remember, when we act together,
              our voices become stronger, and our capacity to create change
              increases. Every individual can be a role model within their
              community and inspire others to take action.
            </p>
          </li>
          <li className="used-tools-container left">
            <img src={info4} alt="" className="highlight-img"></img>
            <p>
              The steps you take today will shape the world you live in
              tomorrow. By leveraging the power of social media, you can raise
              awareness of environmental issues and reach wider audiences by
              sharing awareness campaigns. Encouraging people around you to take
              action can create a significant difference in your immediate
              community. Moreover, change should not be limited to individual
              efforts. Reach out to local governments, municipalities, and
              legislators to support the implementation of environmentally
              friendly policies. Advocate for increased investment in renewable
              energy, reduction of plastic usage, and preservation of green
              spaces. When each of our voices comes together, we can create a
              powerful movement for change. Be a pioneer of this change. Because
              nature, humanity, and all living beings deserve a future in
              harmony.
            </p>
          </li>
          <li className="used-tools-container right">
            <img src={info5} alt="" className="highlight-img"></img>
            <p>
              Technological advancements offer powerful tools for a sustainable
              world. Renewable energy sources are among the most effective ways
              to reduce carbon emissions and protect nature. Technologies like
              solar panels, wind energy, and electric vehicles help us implement
              future energy solutions today. You can contribute to change by
              incorporating these innovations into your life. Installing solar
              panels at home, using energy-efficient appliances, and opting for
              electric vehicles are just some of these steps. Additionally,
              choosing companies that support innovative environmental
              technologies can encourage industries to adopt more sustainable
              standards. Projects such as vertical gardens in cities,
              energy-efficient buildings, and smart water management play a
              critical role in building a green future. By investing in
              innovations, you can both protect nature and gain economic
              benefits.
            </p>
          </li>
          <li className="used-tools-container left">
            <img src={info6} alt="" className="highlight-img"></img>
            <p>
              How we treat the world today will determine the legacy we leave to
              our children tomorrow. Therefore, raising young generations with
              environmental responsibility awareness is extremely important.
              Introducing them to the beauty of nature, explaining the
              importance of ecosystems, and teaching sustainable living habits
              is one of the most valuable investments we can make for our
              planet’s future. Participating in nature education programs
              organized in schools, planting trees with children, or taking part
              in recycling projects helps us raise them as conscious
              individuals. Additionally, highlighting environmental achievements
              and inspiring leaders can encourage young people to join this
              fight. Through nature-based games, workshops, and stories, we can
              build deep respect and love for nature in future leaders. Thus,
              our children will inherit a healthier planet and carry the
              knowledge and passion to protect it.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default SaveUs;

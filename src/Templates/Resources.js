import React from "react";
import "../Css Files/Resources.css";
import axioslogo from "../Images/axios.png";
import reactlogo from "../Images/react.png";
import csslogo from "../Images/css.png";
import jslogo from "../Images/javascript.png";
import chartjslogo from "../Images/chartjs.png";
import chatgptlogo from "../Images/chatgpt.png";
import htmllogo from "../Images/html5.png";
import image1 from "../Images/image1.png";
import image2 from "../Images/image2.png";
import image3 from "../Images/image3.png";
import image4 from "../Images/image4.png";

function Resources() {
  return (
    <div className="resources-page-container">
      <section className="inspiration">
        <h1>Our Inspiration</h1>
        <p>
          Our inspiration for this project came from discovering the existence
          of the PC-ORD software used in ecological analyses. The systematic
          approach offered by PC-ORD and the perspective it provides on
          analyzing ecological data inspired us to better understand nature and
          develop integrated solutions with technological systems. Our goal was
          to understand ecosystem dynamics and develop sustainable systems by
          optimizing these dynamics. In this direction, we focused on analyzing
          energy production, waste management, and resource cycles using data
          provided by nature. As we approach the end of our project, we are
          thrilled to see our progress step by step. Throughout this process, we
          once again realized how important the harmony between nature and
          system design is. Even though we did not use PC-ORD directly, its
          inspiration helped us develop our own methods and create a solution
          that supports the sustainability of ecological systems.
        </p>
      </section>

      <section className="used-tools-display">
        <h1>Tools We Have Used</h1>
        <div className="used-tools-container right">
          <img src={htmllogo} alt="" className="highlight-img"></img>
          <p>
            HTML (HyperText Markup Language) is the fundamental markup language
            used to create and structure web pages. Developed by Tim Berners-Lee
            in 1991, HTML forms the backbone of the internet and determines how
            content on a web page is displayed by a web browser. HTML allows
            users to structure elements such as text, images, links, videos, and
            audio. Every structure seen on a website is shaped and organized
            with HTML. HTML uses tags to classify content, and these tags
            usually come in pairs: an opening tag and a closing tag. HTML forms
            the skeleton of a web page. Every HTML document starts with the{" "}
            <code>&lt;!DOCTYPE html&gt;</code> declaration, followed by the{" "}
            <code>&lt;html&gt;</code> tag that encompasses the entire document.
            The main tags that define the page content are{" "}
            <code>&lt;head&gt;</code> and <code>&lt;body&gt;</code>. For
            example, the <code>&lt;h1&gt;</code> tag is used to add a heading,
            while the <code>&lt;p&gt;</code> tag is used to create a paragraph.
            Links are added with the <code>&lt;a&gt;</code> tag, and images are
            included in the page with the <code>&lt;img&gt;</code> tag. HTML
            also supports block and inline elements like{" "}
            <code>&lt;div&gt;</code> and <code>&lt;span&gt;</code> to create
            multi-layered structures. Today, HTML5 is the most up-to-date
            version of HTML, bringing significant advancements to the web
            development world. HTML5 supports audio, video, animation, and user
            interactions directly, speeding up modern web development processes.
            Additionally, the introduction of semantic tags (such as{" "}
            <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, and{" "}
            <code>&lt;footer&gt;</code>) has made page structures more
            meaningful and helped search engines better understand the content.
            HTML forms the fundamental building block of web development and is
            typically used alongside CSS (Cascading Style Sheets) and
            JavaScript. While CSS manages the appearance and layout of the
            content created with HTML, JavaScript adds dynamic and interactive
            features to the page. Learning HTML is a mandatory step for anyone
            starting their web development journey and allows for the creation
            of powerful and impressive web pages by working in harmony with
            modern technologies.
          </p>
        </div>
        <div className="used-tools-container left">
          <img src={csslogo} alt="" className="highlight-img"></img>
          <p>
            CSS (Cascading Style Sheets) is a style language that ensures the
            appearance and layout of web pages. Developed by the W3C (World Wide
            Web Consortium) in 1996, CSS is used to control the visual
            properties of web pages structured with HTML. CSS allows the control
            of many features such as the color, size, font, background, and
            position of elements on a web page. By adding a visual dimension to
            HTML, CSS provides users with a more aesthetic and organized
            experience. Using CSS enables faster loading of web pages and more
            organized coding. While HTML forms the skeleton of a page, CSS gives
            this skeleton its visual shape. For example, coloring text,
            adjusting the spacing between elements, and adding color or images
            to the page background are all done with CSS. Additionally, CSS
            ensures design consistency by using the same style definitions
            across multiple HTML pages. CSS can be used in three different ways:
            inline CSS, internal CSS, and external CSS. Inline CSS is used to
            add styles directly within HTML tags but can lead to code clutter in
            large projects. Internal CSS is defined within the{" "}
            <code>&lt;head&gt;</code> section of the page and applies only to
            that page. External CSS is defined in a separate file and linked to
            multiple HTML pages for more organized and effective style
            management. CSS provides powerful tools for creating page layouts
            and designs suitable for different screen sizes. Responsive design
            is one of CSS’s most important features, allowing the creation of
            pages that adapt to various devices such as mobile phones, tablets,
            and desktop computers, thus optimizing user experience on every
            platform. With the development of CSS, many new features and
            techniques have emerged in modern web design. Today’s CSS3 offers
            advanced visual features such as animations, transitions, shadows,
            and 3D effects. CSS prevents web pages from appearing static and
            gives them an interactive, dynamic structure. In conclusion, CSS is
            a fundamental technology that ensures web pages are aesthetic and
            user-friendly. Working together with HTML, it holds an important
            place in the web development world and is an indispensable part of
            modern web design. Learning CSS is the key to creating powerful and
            impressive websites.
          </p>
        </div>
        <div className="used-tools-container right">
          <img src={jslogo} alt="" className="highlight-img"></img>
          <p>
            JavaScript is a programming language that makes web pages dynamic
            and interactive. Developed by Brendan Eich in 1995, JavaScript was
            initially designed to work only in browsers, but today it has become
            a powerful and versatile language that runs on both the client side
            and the server side. Along with HTML and CSS, JavaScript is one of
            the cornerstones of modern web development processes. The main
            purpose of JavaScript is to bring dynamism to static web pages. A
            web page structured with HTML and visually styled with CSS becomes
            interactive and functional through JavaScript. For example, updating
            a specific part of the page when a button is clicked, validating
            data entered in a form, or playing animations are all done with
            JavaScript. JavaScript provides fast performance because it runs on
            the client side. Since it operates directly within the user’s
            browser without constantly sending requests to the server, it
            significantly improves the user experience. Today, with technologies
            like Node.js, JavaScript is also used on the server side, making it
            possible to develop full-stack applications. JavaScript accesses and
            dynamically modifies elements on a web page through the Document
            Object Model (DOM). Tasks such as updating text content, changing
            the visibility of an image, or adding new HTML elements to a page
            can be done using JavaScript. Additionally, JavaScript enables data
            exchange over the internet. Tools like the Fetch API or
            XMLHttpRequest provided by modern browsers make it easy to fetch
            data from a server or send data to a server. JavaScript’s
            capabilities extend beyond web pages. Today, it is widely used in
            fields such as game development, graphic processing, and mobile
            application development. With the Canvas API introduced in HTML5,
            creating graphical content in browsers is possible, allowing for
            simple games and animations to be developed using JavaScript.
            Moreover, many modern JavaScript libraries and frameworks provide
            developers with the ability to write faster and more efficient code.
            In conclusion, JavaScript is one of the most important components of
            modern web development processes. It transforms websites from merely
            viewable content into dynamic, interactive, and user-friendly
            applications. Its ability to run on both the client and server sides
            makes JavaScript an indispensable tool for both frontend and backend
            development.
          </p>
        </div>
        <div className="used-tools-container left">
          <img src={reactlogo} alt="" className="highlight-img"></img>
          <p>
            React is an open-source JavaScript library developed for building
            user interfaces. Created by Facebook in 2013, React is particularly
            used for developing Single Page Applications (SPA). Compared to
            traditional web development methods, React offers faster and more
            efficient solutions, enabling developers to build modern, dynamic,
            and high-performance applications. At the core of React is a
            component-based architecture. It breaks down a web page into small,
            independent, and reusable components, making it easier to manage.
            Each component can contain its own HTML structure, CSS styles, and
            JavaScript functionality. For example, a button, a heading, or a
            form can be defined as a separate React component and reused across
            different pages, resulting in a modular and more readable code
            structure. One of React’s most significant features is its Virtual
            DOM. The Virtual DOM maintains a virtual copy of the browser’s
            traditional DOM structure, quickly detecting changes and updating
            only the necessary parts. This process prevents the entire page from
            reloading and significantly improves performance. React not only
            helps in building user interfaces but also simplifies the dynamic
            updating of data within the UI. Structures called state and props
            manage data flow between components. State holds the data within a
            component, while props are used to pass data from one component to
            another, ensuring flexible and organized data management. React’s
            popularity in modern web development is also driven by its powerful
            ecosystem. React Router enables seamless navigation between pages,
            supporting the SPA concept. Tools like Redux and Context API
            simplify global state management in applications. Additionally, the
            introduction of Hooks enhances component functionality, allowing
            developers to write simpler, more readable function-based components
            instead of class-based ones. React’s flexibility extends beyond
            browser-based applications. With React Native, developers can use
            the same JavaScript codebase to build mobile applications for iOS
            and Android platforms, offering significant time and cost savings.
            In conclusion, React is an indispensable tool for building fast,
            modular, and high-performance user interfaces in the modern web
            development world. Its component-based architecture, Virtual DOM
            performance, and rich ecosystem provide developers with powerful and
            flexible solutions. React is used by major companies worldwide and
            continues to grow in popularity every day. This robust library,
            which unifies web and mobile application development processes, is
            an easy-to-learn and enjoyable technology for developers.
          </p>
        </div>
        <div className="used-tools-container right">
          <img src={axioslogo} alt="" className="highlight-img"></img>
          <p>
            Axios is a popular JavaScript library used for making HTTP requests
            in web applications. In addition to working on the client side, it
            can also be used on the server side with Node.js. Axios is designed
            to communicate with RESTful APIs, facilitate data exchange, and
            provide dynamic content within applications. Compared to
            JavaScript’s built-in fetch() API, Axios offers more convenience and
            features. For example, it provides additional functionalities such
            as automatically adding headers to requests, simplifying error
            handling, and automatically converting data formats. These features
            allow developers to write less code while maintaining a more
            organized and readable structure. Axios works asynchronously,
            ensuring that web pages offer a faster and smoother user experience.
            While the user continues to interact with the rest of the page,
            Axios can fetch data in the background or send data to the server.
            Data is processed in JSON format during this process, which is a
            widely adopted standard in modern web development. The main features
            of Axios include simplifying the creation, management, and handling
            of HTTP requests. It can seamlessly work with Node.js on the server
            side as well as on the client side. Axios is a performance-efficient
            and user-friendly tool for web developers, making it easy to work
            with RESTful APIs. With Axios, HTTP methods such as GET, POST, PUT,
            and DELETE can be used to send requests to the server. For instance,
            a GET request can be used to fetch user data in an application,
            while a POST request can be used to save new data to the server.
            Axios simplifies these operations and enhances code readability. It
            also offers essential features like adding headers to requests,
            setting timeout durations, and automatically converting data. One of
            Axios’s biggest advantages is its ease of error handling. Erroneous
            responses from the server are automatically caught and provide
            developers with more meaningful error messages. For example, if a
            request times out or the server returns an error code like 404,
            Axios automatically processes the error and informs the developer.
            Additionally, Axios allows request and response handling through a
            structure called interceptors. This feature is particularly useful
            for adding a structure to all requests (such as an authorization
            token) or collectively modifying incoming responses. Axios is highly
            compatible with modern JavaScript libraries. It is frequently used
            with popular frameworks like React, Vue.js, and Angular. In React
            applications, Axios is often employed to make API requests, update
            state, and present real-time data to users. In conclusion, Axios
            offers a simple, powerful, and flexible solution for HTTP requests.
            It accelerates data exchange processes and is widely preferred in
            modern web development projects. With its robust error handling,
            automatic data conversion, and extensive configuration options,
            Axios is one of the most suitable tools for managing API connections
            and handling data. It is easy to learn and an efficient tool for
            both frontend and backend developers.
          </p>
        </div>
        <div className="used-tools-container left">
          <img src={chartjslogo} alt="" className="highlight-img"></img>
          <p>
            Chart.js is an open-source JavaScript library used for data
            visualization. It works with HTML5’s Canvas API and allows for the
            creation of dynamic, interactive charts in web applications. Charts
            make data easier to understand and provide users with a more
            visually effective experience. Thanks to its simple structure and
            user-friendly interface, Chart.js has become a popular choice among
            web developers. Chart.js supports various chart types that can be
            customized according to the needs of the application. Users can
            employ line charts to display changes over time, bar charts for
            comparing data, and pie and doughnut charts for analyzing
            proportions. Additionally, it supports more complex data
            visualization methods such as radar charts, mixed charts, and
            scatter plots. This versatility makes Chart.js suitable for both
            simple projects and comprehensive analytical applications. Chart.js
            works seamlessly with modern web development technologies. Charts
            can be dynamically updated based on data inputs and respond to user
            interactions. For instance, real-time chart updates can be made with
            data pulled from a database, or different data sets can be
            visualized when a user clicks a button. Charts are rendered quickly
            in the browser, minimizing performance loss. The library offers
            developers extensive customization options. Chart sizes, colors,
            borders, fonts, and interaction features can be easily adjusted.
            Furthermore, details such as axis values, titles, and legend boxes
            can be added to make charts more meaningful. Chart.js’s flexible
            configuration options cater to project-specific needs and help
            developers visualize their data in the most appropriate way.
            Chart.js can be easily integrated with modern JavaScript libraries
            and frameworks such as React, Vue.js, and Angular. This facilitates
            rapid data visualization processes in single-page applications (SPA)
            and dashboard projects. Its ease of use in web development projects,
            strong documentation, and broad community support are key factors
            that make Chart.js a preferred choice. In conclusion, Chart.js is a
            powerful and flexible library that can be confidently used in any
            project requiring data visualization. It allows developers to
            present their data effectively, clearly, and aesthetically. With its
            customizable structure, performance advantages, and wide range of
            chart types, Chart.js plays an important role in both small-scale
            web projects and large-scale analytical applications.
          </p>
        </div>
        <div className="used-tools-container right">
          <img src={chatgptlogo} alt="" className="highlight-img"></img>
          <p>
            ChatGPT is an AI-powered language model developed by OpenAI, based
            on the GPT (Generative Pre-trained Transformer) architecture.
            Utilizing advanced natural language processing (NLP) techniques,
            ChatGPT can generate meaningful, coherent, and natural responses to
            text-based inputs. It can answer user questions, generate text,
            provide translations, and even offer explanations on complex topics.
            At its core, ChatGPT relies on deep learning models trained on vast
            amounts of text data. These models learn from extensive datasets to
            understand the structure and logic of human language. By analyzing
            relationships between sentences, ChatGPT produces consistent and
            fluent text. Recent versions like GPT-4 are more powerful than
            previous generations, understanding more complex contexts and
            delivering more accurate responses. ChatGPT has a wide range of
            applications, from education and software development to content
            creation and customer service. It is particularly beneficial for
            developers, aiding in tasks such as writing code, debugging, and
            designing algorithms. For example, a developer can present a problem
            to ChatGPT, which in turn offers sample code solutions. In addition,
            one of the key benefits of ChatGPT is its use in content production.
            It can quickly generate blog posts, articles, stories, and social
            media content. For language learners, ChatGPT is an effective tool
            for translations, grammar corrections, and sentence structure
            improvements. Another significant capability of ChatGPT is its use
            in chatbot-based applications. It can provide instant responses to
            user inquiries in customer support services, reducing the need for
            human intervention. Industries such as e-commerce, banking, and
            technology benefit greatly from models like ChatGPT, enhancing
            customer satisfaction. As an advanced AI model, ChatGPT supports
            creative thinking, assisting in brainstorming, generating new ideas,
            and solving complex problems. Researchers, engineers, and students
            can overcome challenges in their projects with the suggestions
            provided by ChatGPT. With advancements in AI technologies, ChatGPT
            continues to produce more reliable and efficient results. In
            conclusion, ChatGPT is a versatile AI tool that understands and
            processes human language to offer effective and rapid solutions to
            users. By enabling quick access to information, improving
            efficiency, and supporting creative production processes, it plays a
            vital role across various fields from education to business. With
            its advanced language model capabilities, ChatGPT will continue to
            be used in more areas in the future, remaining a key component of
            digital transformation.
          </p>
        </div>
      </section>

      <section className="highlights-container">
        <h1> Highlights</h1>
        <div className="inner-highlist-container">
          <figure className="highlight-figure">
            <img src={image4} alt="" className="highlight-img"></img>
            <figcaption></figcaption>
          </figure>
          <figure className="highlight-figure">
            <img src={image1} alt="" className="highlight-img"></img>
            <figcaption></figcaption>
          </figure>
          <figure className="highlight-figure">
            <img src={image2} alt="" className="highlight-img"></img>
            <figcaption></figcaption>
          </figure>
          <figure className="highlight-figure">
            <img src={image3} alt="" className="highlight-img"></img>
            <figcaption></figcaption>
          </figure>
        </div>
      </section>
      <section className="links-to-used-tools-container">
        <h1>Links</h1>
        <ul>
          <li className="anchor-li">
            <a className="link-anchor" href="https://react.dev">
              https://react.dev
            </a>
          </li>
          <li className="anchor-li">
            <a className="link-anchor" href="https://reactrouter.com">
              https://reactrouter.com
            </a>
          </li>
          <li className="anchor-li">
            <a className="link-anchor" href="https://www.chartjs.org">
              https://www.chartjs.org
            </a>
          </li>
          <li className="anchor-li">
            <a className="link-anchor" href="https://chatgpt.com">
              https://chatgpt.com
            </a>
          </li>
          <li className="anchor-li">
            <a className="link-anchor" href="https://unsplash.com">
              https://unsplash.com
            </a>
          </li>
          <li className="anchor-li">
            <a className="link-anchor" href="https://axios-http.com">
              https://axios-http.com
            </a>
          </li>
          <li className="anchor-li">
            <a className="link-anchor" href="https://cssgridgenerator.io">
              https://cssgridgenerator.io
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Resources;

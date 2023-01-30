// let element = document.getElementById("root");
// let div = document.createElement("div")

// element.textContent = "hello world!"
// element.append(div)

// const text = React.createElement("h2", {
//     children: "Ali"
// })
let element = document.getElementById("root");

let info = (
  <>
    <div className="box">
      <div className="information h1">
        <h1>Ali Al-Guaideb</h1>
        <p> Developer</p>
      </div>
      <div className="information">
        <h1>About me</h1>
        <p>
          I'm intrested for Development, in Front-End Specifically interested
        </p>
      </div>{" "}
      <div className="information">
        <h1>Education</h1>
        <ul>
          <li>Bachelor's</li>
          <li>Diploma</li>
        </ul>
        <h2>I study in:</h2>
        <ul>
          <li>Communication and Information College</li>
          <li>King Saud University</li>
        </ul>
      </div>
      <div className="information">
        <h1>Certificates</h1>
        <ul>
          <li>Introduction to React</li>
          <li>Backend JavaScript</li>
          <li>HTML & CSS</li>
        </ul>
      </div>
      <div className="information">
        <h1>My Skills</h1>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>React.js</li>
          <li>Postman</li>
          <li>MongoDB</li>
        </ul>
      </div>
    </div>
  </>
);

ReactDOM.render(info, element);

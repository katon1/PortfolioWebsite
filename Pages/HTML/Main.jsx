var NewComponent = React.createClass({
    render: function() {
      return (
        <div>
          <meta charSet="utf-8" />
          <meta name="keywords" content="Kato, Ng, Resume" />
          <meta name="author" content="Kato Ng" />
          <meta name="description" content="Homepage for Kato's Website" />
          <link rel="stylesheet" href="../CSS/Mainpage.css" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" />
          
          <title>Kato Ng's Portfolio</title>
          <header>
            <ul className="navbar">
              <li id="name">Kato</li>
              <li id="Homepage"><a href="../HTML/Mainpage.html"><img src="/Pictures/KatoLogo.png" /></a></li>   
              <li className="nav" id><input type="button" id="page" defaultValue="Professional" /></li>
              <li className="nav" id><input type="button" defaultValue="Experience" /><br /></li>
              <div className="credit">Kato Ng<br /><a href="https://github.com/katon1" target="_blank">Github</a></div>
            </ul></header>
          <div className="hero">
            <h2>Kato Ng</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="featured-work">
            <h2>Featured Work</h2>
            <div className="featured-work-image">
              <img src="featured-work-image.jpg" alt="Featured Work Image" />
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="testimonials">
            <h2>What Clients Are Saying</h2>
            <div className="testimonial-item">
              <h3>John Smith</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div className="testimonial-item">
              <h3>Jane Doe</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
          </div>
          <div className="contact">
            <h2>Contact Me</h2>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message" defaultValue={""} />
              <button type="submit">Send</button>
            </form>
          </div>
          <div className="footer">
            <p>Copyright © 2023</p>
          </div>
        </div>
      );
    }
  });



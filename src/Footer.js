import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram, faGoodreads } from '@fortawesome/free-brands-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';


import "./Footer.css";

function Footer() {
  return (
      <div class="HomePage-footer">
        <div class="Footer">
            <div class="Footer-flaticon">
                Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a>
            </div>
            <div class="Footer-links">
                <a href="https://www.linkedin.com/in/ellen-fiscina-43043a162/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                </a>
                <a href="https://github.com/ellfiscina" target="_blank">
                    <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <a href="https://profile.codersrank.io/user/ellfiscina" target="_blank">
                    <FontAwesomeIcon icon={faCode} size="lg" />
                </a>
                <a href="https://www.instagram.com/ellfiscina/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a href="https://www.goodreads.com/user/show/72451233-ellen-fiscina" target="_blank">
                    <FontAwesomeIcon icon={faGoodreads} size="lg" />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer;
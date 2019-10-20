import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        return(
            <footer class="footer">
                <div class="linkers">
                    Email: stevenchung650@gmail.com |
                    Phone: 650-863-5324 |
                    <a href="https://www.linkedin.com/in/dev-steven-chung/" target="_blank" class="fa fa-linkedin-square"></a>
                    <a href="https://github.com/Dev-Steven" target="_blank" class="fa fa-github"></a>
                    <a href="https://github.com/Dev-Steven" target="_blank" class="fa fa-envelope"></a>
                </div>
                <div class="copyRight">
                    © 2019 Copyright: Steven Chung
                </div>
            </footer>
        );
    }
}



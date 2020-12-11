var app = new Vue({
    el: '#app',

    data: {
        navbar: [
            {
              menuTitle: 'Home',
              hover: false,
            },
            {
              menuTitle: 'About Me',
              hover: false,
            },
            {
              menuTitle: 'Testimonials',
              hover: false,
            },
            {
              menuTitle: 'My Blog',
              hover: false,
            },
            {
              menuTitle: 'Meetups',
              hover: false,
            },
            {
              menuTitle: 'Shop',
              hover: false,
            },
            {
              menuTitle: 'Contact Me',
              hover: false,
            },

        ],
        footer: [
            {
              menuTitle: 'Latest Books',
            },
            {
              menuTitle: 'Upcoming Events',
            },
            {
              menuTitle: 'Recent Articles',
            },
            {
              menuTitle: 'Business Enquiries',
            },
            {
              menuTitle: 'Visit My Foundation',
            },
        ],
        socials:[ 
          {social:'fab fa-facebook-f', link:'https://it-it.facebook.com/'},
          {social:'fab fa-twitter', link:'https://twitter.com/login?lang=it'},
          {social:'fab fa-instagram', link:'https://www.instagram.com/'},
          {social:'fab fa-linkedin-in', link:'https://it.linkedin.com/'},
          {social:'fab fa-youtube', link:'https://www.youtube.com/?hl=it&gl=IT'}
        ],
        theme: 'ThemeFusion',
        word: 'WordPress'
    },

})

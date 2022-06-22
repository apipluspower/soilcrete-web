import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'Gitpage',
  repo: 'https://github.com/apipluspower/soilcrete-web', // Update to point to your repository
  user: {
   name: 'Kittiphum-Kraisit', // update to use your name
   email: '63011175@kmitl.ac.th' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);
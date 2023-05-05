const ghpages = require("gh-pages");

ghpages.publish(
  "build", // path to public directory
  {
    branch: "gh-pages",
    dotfiles: true,
  },
  () => {
    console.log("Deploy Complete!");
  }
);

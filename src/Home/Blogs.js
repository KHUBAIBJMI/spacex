import React from "react";
import Blog from "./Blog";

const Blogs = () => {
  const blog = [
    {
      id: 1,
      mission: "About",
      title: "this is our title",
      description:
        "(SpaceX) is an American spacecraft manufacturer, launcher, and a satellite communications corporation headquartered in Hawthorne, California. It was founded in 2002 by Elon Musk with the stated goal of reducing space transportation costs to enable the colonization of Mars",
    },
    {
      id: 2,
      mission: "Why is SpaceX successful?",
      title: "this is our title",
      description:
        "Image result SpaceX absorbed knowledge from legacy NASA programs, cutting-edge software development, and its own constant testing. Its engineers took the Falcon 9 architecture and adapted it into Falcon Heavy, the first American heavy-lift rocket in decades.",
    },
    {
      id: 3,
      mission: "Purpose",
      title: "this is our title",
      description:
        "revolutionizing the aerospace industry and making affordable spaceflight a reality. The company entered the arena with the Falcon 1 rocket, a two-stage liquid-fueled craft designed to send small satellites into orbit",
    },
    {
      id: 4,
      mission: "Will SpaceX replace NASA?",
      title: "this is our title",
      description:
        "SpaceX's Starlink may replace NASA's space telecoms network in the next decade. The U.S. space agency wants to focus on science and exploration and hand over all low Earth orbit services to commercial players",
    },
  ];
  return (
    <div className="container">
      <h1 className="text-light">Space X In one Place</h1>
      <div className="row">
        {blog.map((blogs) => {
          return (
            <div className="col-sm-6" key={blogs.id}>
              <Blog
                title={blogs.title}
                description={blogs.description}
                key={blogs.id}
                mission={blogs.mission}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;

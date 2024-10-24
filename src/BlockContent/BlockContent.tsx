import "./BlockContent.scss";
import contentImg1 from "./image1.svg";
import contentImg2 from "./image2.svg";
import contentImg3 from "./image3.svg";
import {BlockContentTypes} from "../Types";

const BlockConetnt = () => {
  const latestPost: BlockContentTypes[] = [
    {
      postText: "5 popular Rust web frameworks—which one is right for you?",
      postContent:
        "From the simplicity of Poem to the full-featured speed of Actix, there’s a Rust web framework for most every user and need.",
      img: contentImg1,
    },
    {
      postText: "Exploring JavaScript ES2024: What's New?",
      postContent:
        "A deep dive into the upcoming features of ES2024, including improvements to asynchronous programming and new data structures.",
      img: contentImg2,
    },
    {
      postText: "TypeScript vs JavaScript: When and Why to Use Each",
      postContent:
        "Understanding the key differences between JavaScript and TypeScript, and when it’s best to choose one over the other.",
      img: contentImg3,
    },
  ];

  return (
    <div className="block-content">
      <div className="container">
        <div className="block-content-inner">
          <div className="contents-blocks">
            <div className="block-content-inner-text">
              <h2 className="block-content-inner-text-inner">Latest posts</h2>
            </div>

            <div className="block-content-inner-items">
              {latestPost.map((item) => (
                <div className="block-conent-inner-item">
                  <div className="block-content-text">
                    <p className="block-content-text-first">
                      {item.postText}
                    </p>
                    <p className="block-content-text-second">{item.postContent}</p>
                  </div>
                  <div className="block-content-img">
                    <img className="block-content-img" src={item.img}></img>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockConetnt;

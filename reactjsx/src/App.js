import React from "react";
import "./App.css";
import faker from "faker";

import ApprovalCard from "./ApprovalCard";
import CommentDetail from "./CommentDetail";

class componentBuilder extends React.Component {
  render(){
  let data = [
    {
      author: "Dennis Obel",
      timeAgo: "Today at 4:45PM",
      commentText: "Good job",
      img: faker.image.avatar(),
    },
    {
      author: "Paul Solomon",
      timeAgo: "Today at 5:45PM",
      commentText: "Nice work",
      img: faker.image.avatar(),
    },
    {
      author: "Peter Nortey",
      timeAgo: "Today at 6:45PM",
      commentText: "Great stuff",
      img: faker.image.avatar(),
    },
    {
      author: "James Asafuah",
      timeAgo: "Today at 7:45PM",
      commentText: "Commendable",
      img: faker.image.avatar(),
    },
    {
      author: "Persius Osei-Tutu",
      timeAgo: "Today at 7:45PM",
      commentText: "Commendable",
      img: faker.image.avatar(),
    },
  ];

  return data
    .filter((element) => {
      return element.author.includes("P");
    })
    .map((element) => {
      return (
        <ApprovalCard>
          <CommentDetail
            author={element.author}
            timeAgo={element.timeAgo}
            commentText={element.commentText}
            img={element.img}
          />
        </ApprovalCard>
      );
    });
}

// convert to class-based component

class App extends React.Component {
  render(){
  return (
    <div className="ui container">
      <ApprovalCard>
        <p>Are you sure?</p>
      </ApprovalCard>
      {componentBuilder()}
    </div>
  );
}
}

export default App;

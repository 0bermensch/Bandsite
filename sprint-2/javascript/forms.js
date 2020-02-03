let form = document.getElementById("comment--form");

form.addEventListener("submit", event => {
  console.log("form submitted");
  event.preventDefault();

  let usercomment = {};
  usercomment.name = event.target.name.value;
  usercomment.comment = event.target.comment.value;

  let userCommentSection = document.querySelector(".user--comment");
  let commentDiv = document.createElement("div");
  commentDiv.classList.add("comment--output");

  let nameOutput = document.createElement("h3");
  nameOutput.classList.add("commenter--name");
  nameOutput.innerText = usercomment.name;
  commentDiv.appendChild(nameOutput);

  let commentOutput = document.createElement("p");
  commentOutput.classList.add("commenter--comment");
  commentOutput.innerText = usercomment.comment;
  commentDiv.appendChild(commentOutput);

  userCommentSection.appendChild(commentDiv);
});

let defaultComment = [
  {
    name: "Micheal Lyons",
    date: "12/18/2018",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started ﬁguring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
  },
  {
    name: "Gary Wong",
    date: "12/12/2018",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
  },
  {
    name: "Theodore Duncan",
    date: "11/15/2018",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s deﬁnitely my favorite ever!"
  }
];

function generateDefaultComment(defaultCommentobj) {
  let comments = document.querySelector(".default--comment");

  let commentSection = document.createElement("div");
  commentSection.classList.add("default--comment--section");

  let commentUpper = document.createElement("div");
  commentUpper.classList.add("default--comment--upper");

  let commenterPic = document.createElement("div");
  commenterPic.classList.add("default--comment--pic");

  let commenterName = document.createElement("h3");
  commenterName.classList.add("default--comment--name");
  commenterName.innerText = defaultCommentobj.name;

  let commenterDate = document.createElement("h3");
  commenterDate.classList.add("default--comment--date");
  commenterDate.innerText = defaultCommentobj.date;

  let commenterComment = document.createElement("p");
  commenterComment.classList.add("defautl--comment--comment");
  commenterComment.innerText = defaultCommentobj.comment;

  commentUpper.appendChild(commenterPic);
  commentUpper.appendChild(commenterName);
  commentUpper.appendChild(commenterDate);
  commentSection.appendChild(commentUpper);
  commentSection.appendChild(commenterComment);
  comments.appendChild(commentSection);
}

for (let x = 0; x < defaultComment.length; x++) {
  generateDefaultComment(defaultComment[x]);
}

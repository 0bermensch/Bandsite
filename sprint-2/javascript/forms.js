let form = document.getElementById("comment__form");

form.addEventListener("submit", event => {
  event.preventDefault();

  let usercomment = {};
  usercomment.name = event.target.name.value;
  usercomment.comment = event.target.comment.value;

  let userCommentSection = document.querySelector(".comment");
  let commentDiv = document.createElement("div");
  commentDiv.classList.add("comment__output");

  let commentOutputUpper = document.createElement("div");
  commentOutputUpper.classList.add("comment__upper");

  let picOutput = document.createElement("div");
  picOutput.classList.add("comment__pic");

  let nameOutput = document.createElement("h3");
  nameOutput.classList.add("comment__name");
  nameOutput.innerText = usercomment.name;

  let dateOutput = document.createElement("h3");
  dateOutput.classList.add("comment__date");
  let d = new Date();
  let commentDate = d.getUTCDate();
  let commentMonth = d.getUTCMonth();
  let commentYear = d.getUTCFullYear();
  dateOutput.innerHTML = `${commentDate}/ ${commentMonth}/ ${commentYear}`;

  let commentOutput = document.createElement("p");
  commentOutput.classList.add("comment__comment");
  commentOutput.innerText = usercomment.comment;

  commentOutputUpper.appendChild(picOutput);
  commentOutputUpper.appendChild(nameOutput);
  commentOutputUpper.appendChild(dateOutput);
  commentDiv.appendChild(commentOutputUpper);
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
  let comments = document.querySelector(".defaultcomment");

  let commentSection = document.createElement("div");
  commentSection.classList.add("defaultcomment__section");

  let commentUpper = document.createElement("div");
  commentUpper.classList.add("defaultcomment__upper");

  let commenterPic = document.createElement("div");
  commenterPic.classList.add("defaultcomment__pic");

  let commenterName = document.createElement("h3");
  commenterName.classList.add("defaultcomment__name");
  commenterName.innerText = defaultCommentobj.name;

  let commenterDate = document.createElement("h3");
  commenterDate.classList.add("defaultcomment__date");
  commenterDate.innerText = defaultCommentobj.date;

  let commenterComment = document.createElement("p");
  commenterComment.classList.add("defaultcomment__comment");
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

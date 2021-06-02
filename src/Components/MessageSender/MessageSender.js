import React, { useContext, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./MessageSender.css";
import axios from "../../Pages/Authentication/axios";
import FormData from "form-data";
import db from "../../Pages/Authentication/firebase";
import { DataContext } from "../../App";
import firebase from "firebase";

function MessageSender() {
  const { loggedInUser } = useContext(DataContext);
  // const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState(null);

  console.log("userrrrr",loggedInUser)
  const handleChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (image) {
      const imgForm = new FormData();
      imgForm.append("file", image, image.name);
      axios
        .post("/upload/image", imgForm, {
          headers: {
            accept: "application/json",
            "Accept-Language": "en-US,en;q=0.8",
            "Content-Type": `multipart/form-data; boundary=${imgForm._boundary}`,
          },
        })
        .then((res) => {
          // console.log(res.data);

          const postData = {
            text: input,
            imgName: res.data.filename,
            user: loggedInUser.name,
            avatar: loggedInUser.photoURL,
            timestamp: Date.now(),
          };
          // console.log(postData);
          savePost(postData);
        });
    } else {
      const postData = {
        text: input,
        user: loggedInUser.name,
        avatar: loggedInUser.photoURL,
        timestamp: Date.now(),
      };
      savePost(postData);
    }

    // axios.post("/upload/image", imgForm, {
    //   headers: {
    //     accept: "application/json",
    //     "Accept-Language": "en-US,en;q=0.8",
    //     "Content-Type": `multipart/form-data; boundary=${imgForm._boundary}`,
    //   },
    // });

    setImageUrl("");
    setInput("");
    setImage(null);
  };

  const savePost = async (postData) => {
    await axios.post("/upload/post", postData).then((res) => console.log(res));
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={loggedInUser.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            placeholder={`What's on your mind? ${loggedInUser.name}`}
          />
          <input
            type="file"
            className="messageSender__fileSelector"
            onChange={handleChange}
          />
          <button onClick={handleSubmit} type="submit">
            submit
          </button>
        </form>
      </div>

    </div>
  );
}

export default MessageSender;

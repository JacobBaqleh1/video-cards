import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  //FLASH CARD CREATOR CODE
  //declaring all the elements
  let videoInput = document.getElementById("video");
  let videoScreen = document.getElementById("video-screen");
  let userDeck = document.getElementById("user-cards");

  //input video file button(Choose File Button)

  document.getElementById("video").addEventListener("change", function () {
    let media = URL.createObjectURL(this.files[0]);
    let video = document.getElementById("video-screen");
    video.src = media;
    video.play();
  });

  //make a button to create a card with the given input

  document.getElementById("create-card").addEventListener("click", () => {
    videoInput.value = "";
    videoScreen.src = "";
  });

  //when that button is clicked , clear the input to allow a new card

  return (
    <div>
      <h1 className="text-center text-red-600">VIDEO CARDS</h1>
      <button>Create new Deck</button>

      <div className="flex flex-col justify-center items-center">
        <label for="video">Choose a video to add</label>
        <input type="file" id="video" name="video" accept="video/*" />
        <video
          id="video-screen"
          className="w-[300px] h-[300px] bg-black"
          controls
        ></video>
        <button id="create-card">Create card</button>
      </div>
      <div id="user-cards"></div>
    </div>
  );
}

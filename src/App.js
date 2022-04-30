import "./App.css";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Scroll from "./components/Scroll/Scroll";
import Video from "./components/Video/Video";
import "./components/responsive/Responsive.css";

import { Loading } from "react-loading-dot";
import {
  Video1,
  Video2,
  Video3,
  Video4,
  Video5,
  Video6,
  Video7,
} from "./components/Video/VideoFileList";
import { useState } from "react";
const tiktokData = [
  {
    urlVideo: Video4,
    urlAvatar: "https://picsum.photos/200/300",
    userName: "Phuong Nguyen",
    userId: "phuongcf1998",
    musicName: "Originalton - 🔥Yujiro🔥",
    tagId: "#fyp #xuhuong #meme",
  },
  {
    urlVideo: Video2,
    urlAvatar: "https://picsum.photos/200/300",
    userName: "Xã Đoàn Online",
    userId: "vukhidonglao",
    musicName: "nhạc nền - Trung Vũ",
    tagId:
      "Sức mạnh trên báo giấy ai cũng hay,ra thực chiến mọi thứ sẽ phô bày.",
  },
  {
    urlVideo: Video3,
    urlAvatar: "https://picsum.photos/200/300",
    userName: "mantv.vn",
    userId: "Man TV",
    musicName: "nhạc nền - Man TV",
    tagId: "Tổng thống Putin kêu gọi #onhaxemtin #mantv",
  },
  {
    urlVideo: Video1,
    urlAvatar: "https://picsum.photos/200/300",
    userName: "cục mèo",
    userId: "teechan_g",
    musicName: "Victory(完整版) - Two Steps From Hell",
    tagId:
      "#Berlin #Germany #🇧🇪 today. More than 5,000 cars. No end to them. #russia #🇷🇺 #sportcar 😁",
  },
  {
    urlVideo: Video5,
    urlAvatar: "https://picsum.photos/200/300",
    userName: "Mr Babibill",
    userId: "cirayremix.vn",
    musicName: "nhạc nền - Mr Babibill",
    tagId: "Anh ơi anh ơi, em nào có tội...  #nguoithanhcong #mrbabibill",
  },
  {
    urlVideo: Video6,
    urlAvatar: "https://picsum.photos/200/300",
    userName: "Tam Quốc Diễn Nghĩa",
    userId: "tamquocdiennghia8",
    musicName: "nhạc nền - Tam Quốc Diễn Nghĩa",
    tagId:
      "thời đến mọi chuyện sẽ thuận lợi #taothao #luubi #khongminh #giacatluong #tamquoc #tamquocdiennghia #learnontiktok",
  },
  {
    urlVideo: Video7,
    urlAvatar: "https://picsum.photos/200/300",
    userName: "24FAMILY🌈",
    userId: "vtv24family",
    musicName: "nhạc nền - 24FAMILY🌈",
    tagId:
      "Đánh giá tích cực hoạt động của opec+ #24family #russia #ukraine #war #xuhuong #tiktok",
  },
];

export const App = () => {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return (
    <div className="App">
      <Header />
      <div className="wrapper-app">
        <Menu />

        <div>
          {loading ? (
            <Loading />
          ) : (
            <div className="video-container">
              {tiktokData.map((item, index) => (
                <Video
                  key={index}
                  urlVideo={item.urlVideo}
                  urlAvatar={item.urlAvatar}
                  userName={item.userName}
                  userId={item.userId}
                  musicName={item.musicName}
                  tagId={item.tagId}
                />
              ))}
            </div>
          )}
        </div>

        <Scroll />
      </div>
    </div>
  );
};

export default App;

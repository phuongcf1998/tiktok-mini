import React, { useRef, useState, useMemo, useEffect } from "react";
import "./Video.css";
import { AiFillHeart } from "react-icons/ai";
import { FaCommentDots, FaShare, FaMusic, FaWhatsapp } from "react-icons/fa";
import { ImEmbed2 } from "react-icons/im";
import { FiSend } from "react-icons/fi";
import LazyLoad from "react-lazyload";
import { BsFacebook } from "react-icons/bs";

const useElementOnScreen = (options, targetRef) => {
  const [isVisibile, setIsVisible] = useState();
  const callbackFunction = (entries) => {
    const [entry] = entries; //const entry = entries[0]
    setIsVisible(entry.isIntersecting);
  };
  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);
  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);
    const currentTarget = targetRef.current;
    if (currentTarget) observer.observe(currentTarget);

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, optionsMemo]);
  return isVisibile;
};

const VideoInfo = ({ urlAvatar, userName, userId, musicName, tagId }) => {
  // Toast function
  const toast = ({
    title = "",
    message = "",
    type = "info",
    duration = 3000,
  }) => {
    const main = document.getElementById("toast");
    if (main) {
      const toast = document.createElement("div");

      // Auto remove toast
      const autoRemoveId = setTimeout(function () {
        main.removeChild(toast);
      }, duration + 1000);

      // Remove toast when clicked
      toast.onclick = function (e) {
        if (e.target.closest(".toast__close")) {
          main.removeChild(toast);
          clearTimeout(autoRemoveId);
        }
      };

      const icons = {
        success: "fas fa-check-circle",
        info: "fas fa-info-circle",
        warning: "fas fa-exclamation-circle",
        error: "fas fa-exclamation-circle",
      };
      const icon = icons[type];
      const delay = (duration / 1000).toFixed(2);

      toast.classList.add("toast", `toast--${type}`);
      toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;

      toast.innerHTML = `
                      <div class="toast__icon">
                          <i class="${icon}"></i>
                      </div>
                      <div class="toast__body">
                          <h3 class="toast__title">${title}</h3>
                          <p class="toast__msg">${message}</p>
                      </div>
                      <div class="toast__close">
                          <i class="fas fa-times"></i>
                      </div>
                  `;
      main.appendChild(toast);
    }
  };

  const showSuccessToast = () => {
    toast({
      title: "Thành công!",
      message: "Bạn đã theo dõi user này",
      type: "success",
      duration: 5000,
    });
  };

  return (
    <>
      <div id="toast"></div>
      <div className="video_info_wrapper">
        <img src={urlAvatar} className="avatar-info" alt="Avatar" />
        <div className="video_info_user">
          <div className="user_info_wrapper">
            <span className="user_id">{userId}</span>
            <span className="user_name">{userName}</span>
          </div>
          <div className="video_info_tag">
            <span className="tag_id">{tagId} </span>
          </div>
          <div className="tag_music">
            {" "}
            <span>
              <FaMusic />
            </span>{" "}
            {musicName}{" "}
          </div>
        </div>
        <button className="btn btn-follow" onClick={showSuccessToast}>
          Follow
        </button>
      </div>
    </>
  );
};

const VideoContent = ({ url, urlAvatar }) => {
  const [isPlaying, setPlaying] = useState(false);
  const [isSubscribe, setSubscribed] = useState(false);
  const videoRef = useRef();
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.7,
  };
  const isVisibile = useElementOnScreen(options, videoRef);

  useEffect(() => {
    document.addEventListener("visibilitychange", function (event) {
      if (document.hidden) {
        videoRef.current.pause();
        isVisibile = false;
      
      } else {
        isVisibile = true;
      }
    });

    if (isVisibile) {
      if (!isPlaying) {
        videoRef.current.play();
        setPlaying(true);
      }
    } else {
      if (isPlaying) {
        videoRef.current.pause();
        setPlaying(false);
      }
    }
  }, [isVisibile]);

  const handleShareIcon = () => {
    // alert("Subscribed")
    if (isSubscribe === false) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
      }, 3000);
    } else {
      setSubscribed(false);
    }
  };

  const playVideo = () => {
    if (isPlaying == false) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <div className="video_content-wrapper">
        <video
          controls
          autoPlay="autoplay"
          webkit-playsinline="true"
          playsInline
          ref={videoRef}
          onClick={playVideo}
          loop
          alt="Video"
          className="video_content-clip"
          src={url}
          type="video/mp4"
        />

        <div className="video_content-emoji">
          <img src={urlAvatar} className="avatar-info" alt="Avatar" />
          <span className="video_content-icon">
            <AiFillHeart
              className="icon-heart"
              onClick={handleShareIcon}
              style={isSubscribe ? { color: "red" } : {}}
            />
          </span>
          <span>13.9k</span>
          <span className="video_content-icon">
            <FaCommentDots />
          </span>
          <span>512</span>

          <span className="video_content-icon">
            <FaShare className="share-icon" />
            <div className="video_share-wrapper">
              <ul className="video_share-list">
                <li className="video_share-item">
                  <span className="video_share-item-icon">
                    <ImEmbed2 />
                  </span>
                  <a href="#" className="video_share-item-link">
                    Nhúng
                  </a>
                </li>
                <li className="video_share-item">
                  <span className="video_share-item-icon">
                    <BsFacebook />
                  </span>
                  <a href="#" className="video_share-item-link">
                    Chia sẻ facebook
                  </a>
                </li>
                <li className="video_share-item">
                  <span className="video_share-item-icon">
                    <FaWhatsapp />
                  </span>
                  <a href="#" className="video_share-item-link">
                    Chia sẻ Whatsapp
                  </a>
                </li>
                <li className="video_share-item">
                  <span className="video_share-item-icon">
                    <FiSend />
                  </span>
                  <a href="#" className="video_share-item-link">
                    Gửi cho bạn bè
                  </a>
                </li>
              </ul>
            </div>
          </span>

          <span>103</span>
        </div>
      </div>
    </>
  );
};

export default function Video({
  urlVideo,
  urlAvatar,
  userName,
  userId,
  musicName,
  tagId,
}) {
  return (
    <div className="video-wrapper">
      <VideoInfo
        urlAvatar={urlAvatar}
        userName={userName}
        userId={userId}
        musicName={musicName}
        tagId={tagId}
      />
      <VideoContent url={urlVideo} urlAvatar={urlAvatar} />
    </div>
  );
}

import "./Joker.css";
import WildCard from "../WildCard/WildCard";

const Joker = ({
  removeTwoOptions,
  callToTeacher,
  callToFriend,
  publicHelp,
}) => {
  const fiftyAudio = () => {
    const audio = new Audio("/5050.mp3");
    audio.play();
  };
  return (
    <div className="joker">
      <WildCard
        icon={<i className="fa-solid fa-chalkboard-user" />}
        text={"Llamar profesora"}
        onClick={callToTeacher}
      />
      <WildCard
        icon={<i className="fa-solid fa-phone-volume" />}
        text={"Llamar amigo"}
        onClick={callToFriend}
      />
      <WildCard
        icon={"50:50"}
        text={"Eliminar opciones"}
        onClick={() => {
          fiftyAudio();
          removeTwoOptions();
        }}
      />
      <WildCard
        icon={<i className="fa-solid fa-chart-simple" />}
        text={"Encuestar público"}
        onClick={publicHelp}
      />
    </div>
  );
};

export default Joker;

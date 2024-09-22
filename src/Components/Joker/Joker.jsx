import "./Joker.css";
import WildCard from "../WildCard/WildCard";

const Joker = () => {
  return (
    <div className="joker">
      <WildCard
        icon={<i className="fa-solid fa-chalkboard-user" />}
        text={"Llamar profesora"}
      />
      <WildCard
        icon={<i className="fa-solid fa-phone-volume" />}
        text={"Llamar amigo"}
      />
      <WildCard icon={"50:50"} text={"Eliminar opciones"} />
      <WildCard
        icon={<i className="fa-solid fa-chart-simple" />}
        text={"Encuestar público"}
      />
    </div>
  );
};

export default Joker;

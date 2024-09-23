import Button from "../../Components/Button/Button";
import WildCard from "../../Components/WildCard/WildCard";
import { useNavigate } from "react-router-dom";
import "./Instructions.css";

const Instructions = () => {
  const navigate = useNavigate();
  return (
    <div className="instructions">
      <div className="title">
        <Button question={true} name={"Instrucciones y Reglas"} />
        <div
          className="prev"
          title="Regresar al home"
          onClick={() => navigate(-1)}
        >
          <i className="fa-solid fa-angle-left" />
        </div>
      </div>
      <div className="tables">
        <table>
          <thead>
            <tr>
              <th>Distribución y participación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Deben dividirse los estudiantes en 4 equipos (el número de
                personas no influye).
              </td>
            </tr>
            <tr>
              <td>
                Cada equipo saca un integrante por pregunta. Se reparten en
                orden numérico. Deben participar todos los miembros del equipo
                y, en caso de haber participado todos, se reinicia el orden para
                salir nuevamente.
              </td>
            </tr>
            <tr>
              <td>
                Esta totalmente prohibido para los integrantes qué no participen
                en la pregunta, decir la opción o algo referente a ella, si la
                docente o el equipo expositor ven alguna anomalía, se puede
                descalificar al equipo por 1 ronda.
              </td>
            </tr>
            <tr>
              <td>
                Para quienes deben responder se les dará una indicación sobre
                cómo será la dinámica para responder. El más rápido a reaccionar
                será quien tendrá derecho a responder, en caso tal de fallar se
                le cedera el turno a alguien más, tras dar la indicación de
                responder solo tiene 10 segundos para elegir una opción o un
                comodin.
              </td>
            </tr>
            <tr>
              <td>
                En caso de hacer una respuesta correcta, el equipo participante
                no puede responder en el siguiente turno, a no ser de que el
                equipo que deba responder falle, entonces podrán participar.
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Puntos, premiación y castigo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Por cada respuesta correcta se ganará un punto. Gana el equipo
                que al final de la ronda 12 obtenga mayor cantidad de aciertos.
              </td>
            </tr>
            <tr>
              <td>
                No existe forma de restar puntos, excepto en casos de saboteo,
                se le restara un punto al equipo en caso de conducta anti
                didáctica y se le sumará al equipo afectado.
              </td>
            </tr>
            <tr>
              <td>
                La docente Sandra cuenta como juez máximo de la actividad, tiene
                la potestad de definir casos de sabotaje, castigos aplicados y
                orden de participación.
              </td>
            </tr>
            <tr>
              <td>
                Se premiará la participación. No hay perdedores, solo ganadores
                y amigos.
              </td>
            </tr>
            <tr>
              <td>
                Los castigos de la actividad no pasan de suspensión de un turno,
                la docente puede decidir castigos más serveros en caso de ser
                necesario.
              </td>
            </tr>
            <tr>
              <td>
                Sabotear la actividad 3 veces implica descalificación, no
                premiación y expulsión del juego.
              </td>
            </tr>
          </tbody>
        </table>
        <table>
          <thead>
            <tr>
              <th>Comodines</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <WildCard />
              </td>
              <td>Se puede escoger solo uno por turno de equipo.</td>
            </tr>
            <tr>
              <td>
                <WildCard />
              </td>
              <td>Tienen un tiempo de espera de 30 segundos tras usarlo.</td>
            </tr>
            <tr>
              <td>
                <WildCard
                  icon={<i className="fa-solid fa-chalkboard-user" />}
                />
              </td>
              <td>
                El comodin [Llamar Profesora] solo sirve para una pequeña guía.
                La docente dará una indicación sin dar la respuesta ( + 20
                segundos).
              </td>
            </tr>
            <tr>
              <td>
                <WildCard icon={<i className="fa-solid fa-phone-volume" />} />
              </td>
              <td>
                El comodin [Llamar Compañero] solo aplica para los miembros del
                equipo ( + 20 segundos).
              </td>
            </tr>
            <tr>
              <td>
                <WildCard icon={"50:50"} />
              </td>
              <td>
                El comodin [50/50] elimina 2 opciones incorrectas, en caso de
                fallar, el siguiente equipo a participar puede escoger la opción
                correcta obvia.
              </td>
            </tr>
            <tr>
              <td>
                <WildCard icon={<i className="fa-solid fa-chart-simple" />} />
              </td>
              <td>
                Comodin [Encuestar Publico] permite preguntarle al salón en
                general, excepto a la docente ( + 20 segundos).
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Instructions;

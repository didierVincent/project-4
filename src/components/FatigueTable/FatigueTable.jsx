import "./FatigueTable.css";

export default function FatigueTable({ user, workout }) {
  const backgroundColorScale = {
    0: "var(--fat-0)",
    1: "var(--fat-1)",
    2: "var(--fat-2)",
    3: "var(--fat-3)",
    4: "var(--fat-4)",
    5: "var(--fat-5)",
    6: "var(--fat-6)",
  };

  const torso =
    workout.initFatigue.torsoFatigue + workout.addedFatigue.torsoFatigue;
  const arms =
    workout.initFatigue.armsFatigue + workout.addedFatigue.armsFatigue;
  const legs =
    workout.initFatigue.legsFatigue + workout.addedFatigue.legsFatigue;

  const torsoFat = backgroundColorScale[torso] || "grey";
  const armsFat = backgroundColorScale[arms] || "grey";
  const legsFat = backgroundColorScale[legs] || "grey";

  return (
    <div className="FatigueTable">
      <table>
        <tbody>
          <tr>
            <th>{user.name}'s Muscles</th>
            <th>
              Fatigue <br /> (Levels 0-6)
            </th>
          </tr>
          <tr>
            <td>Torso</td>
            <td style={{ backgroundColor: torsoFat }}>
              work.init + workout.added <br />
              {workout.initFatigue.torsoFatigue} +{" "}
              {workout.addedFatigue.torsoFatigue} = {torso}
            </td>
          </tr>
          <tr>
            <td>Arms</td>
            <td style={{ backgroundColor: armsFat }}>{arms}</td>
          </tr>
          <tr>
            <td>Legs</td>
            <td style={{ backgroundColor: legsFat }}>{legs}</td>
          </tr>
        </tbody>
      </table>
      <br />
      <div>Color Scale:</div>
      <table>
        <tbody>
          <tr>
            <td style={{ backgroundColor: backgroundColorScale[0] }}>0</td>
            <td style={{ backgroundColor: backgroundColorScale[1] }}>1</td>
            <td style={{ backgroundColor: backgroundColorScale[2] }}>2</td>
            <td style={{ backgroundColor: backgroundColorScale[3] }}>3</td>
            <td style={{ backgroundColor: backgroundColorScale[4] }}>4</td>
            <td style={{ backgroundColor: backgroundColorScale[5] }}>5</td>
            <td style={{ backgroundColor: backgroundColorScale[6] }}>6</td>
          </tr>
          <tr>
            <td colSpan="5">Safe!</td>
            <td colSpan="2"> Risky!</td>
          </tr>
        </tbody>
      </table>
      user.fat --> {user.fatigue.torsoFatigue}
    </div>
  );
}

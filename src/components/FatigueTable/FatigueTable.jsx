import "./FatigueTable.css";

export default function FatigueTable({ user }) {
  const backgroundColorScale = {
    0: "var(--fat-0)",
    1: "var(--fat-1)",
    2: "var(--fat-2)",
    3: "var(--fat-3)",
    4: "var(--fat-4)",
    5: "var(--fat-5)",
    6: "var(--fat-6)",
  };

  const torsoFat = backgroundColorScale[user.fatigue.torsoFatigue] || "grey";
  const armsFat = backgroundColorScale[user.fatigue.armsFatigue] || "grey";
  const legsFat = backgroundColorScale[user.fatigue.legsFatigue] || "grey";

  return (
    <div className="FatigueTable">
      <table>
        <tbody>
          <tr>
            <th>Muscle</th>
            <th>
              Fatigue <br /> (Levels 0-6)
            </th>
          </tr>
          <tr>
            <td>Torso</td>
            <td style={{ backgroundColor: torsoFat }}>
              {user.fatigue.torsoFatigue}
            </td>
          </tr>
          <tr>
            <td>Arms</td>
            <td style={{ backgroundColor: armsFat }}>
              {user.fatigue.armsFatigue}
            </td>
          </tr>
          <tr>
            <td>Legs</td>
            <td style={{ backgroundColor: legsFat }}>
              {user.fatigue.legsFatigue}
            </td>
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
    </div>
  );
}

import "./UserFatigueTable.css";

export default function UserFatigueTable({ user }) {
  const backgroundColorScale = {
    0: "var(--fat-0)",
    1: "var(--fat-0)",
    2: "var(--fat-0)",
    3: "var(--fat-0)",
    4: "var(--fat-0)",
    5: "var(--fat-1)",
    6: "var(--fat-1)",
    7: "var(--fat-1)",
    8: "var(--fat-1)",
    9: "var(--fat-1)",
    10: "var(--fat-2)",
    11: "var(--fat-2)",
    12: "var(--fat-2)",
    13: "var(--fat-2)",
    14: "var(--fat-2)",
    15: "var(--fat-3)",
    16: "var(--fat-3)",
    17: "var(--fat-3)",
    18: "var(--fat-3)",
    19: "var(--fat-3)",
    20: "var(--fat-4)",
    21: "var(--fat-4)",
    22: "var(--fat-4)",
    23: "var(--fat-4)",
    24: "var(--fat-4)",
    25: "var(--fat-5)",
    26: "var(--fat-5)",
    27: "var(--fat-5)",
    28: "var(--fat-5)",
    29: "var(--fat-5)",
  };

  const torso = user.fatigue.torsoFatigue;
  const arms = user.fatigue.armsFatigue;
  const legs = user.fatigue.legsFatigue;

  const torsoFat = backgroundColorScale[torso] || "var(--fat-6)";
  const armsFat = backgroundColorScale[arms] || "var(--fat-6)";
  const legsFat = backgroundColorScale[legs] || "var(--fat-6)";

  return (
    <div className="UserFatigueTable">
      <table>
        <tbody>
          <tr>
            <th>{user.name}'s Muscles</th>
            <th>
              Fatigue <br /> (Levels 0-25+)
            </th>
          </tr>
          <tr>
            <td>Torso</td>
            <td style={{ backgroundColor: torsoFat }}>{torso}</td>
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
    </div>
  );
}

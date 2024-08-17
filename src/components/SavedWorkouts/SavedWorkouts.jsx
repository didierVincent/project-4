import "./SavedWorkouts.css";

export default function SavedWorkouts({ pastWorkouts, counter }) {
  const { totalTorsoFatigue, totalArmsFatigue, totalLegsFatigue } = {
    totalTorsoFatigue:
      pastWorkouts.initFatigue.torsoFatigue +
      pastWorkouts.addedFatigue.torsoFatigue,
    totalArmsFatigue:
      pastWorkouts.initFatigue.armsFatigue +
      pastWorkouts.addedFatigue.armsFatigue,
    totalLegsFatigue:
      pastWorkouts.initFatigue.legsFatigue +
      pastWorkouts.addedFatigue.legsFatigue,
  };

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

  const torso =
    pastWorkouts.initFatigue.torsoFatigue +
    pastWorkouts.addedFatigue.torsoFatigue;
  const arms =
    pastWorkouts.initFatigue.armsFatigue +
    pastWorkouts.addedFatigue.armsFatigue;
  const legs =
    pastWorkouts.initFatigue.legsFatigue +
    pastWorkouts.addedFatigue.legsFatigue;

  const torsoFat = backgroundColorScale[torso] || "var(--fat-6)";
  const armsFat = backgroundColorScale[arms] || "var(--fat-6)";
  const legsFat = backgroundColorScale[legs] || "var(--fat-6)";

  const date = new Date(pastWorkouts.updatedAt);
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "short", // "Fri"
    year: "numeric", // "2024"
    month: "short", // "Aug"
    day: "numeric", // "15"
  });

  return (
    <>
      <tr className="SavedWorkouts">
        <td>{counter++}</td>
        <td>#{pastWorkouts._id.slice(-3).toUpperCase()}</td>
        <td>{formattedDate}</td>
        <td className="split-cell">
          <div className="column" style={{ backgroundColor: torsoFat }}>
            Torso: {pastWorkouts.initFatigue.torsoFatigue} -->{" "}
            {totalTorsoFatigue}
          </div>
          <div className="column" style={{ backgroundColor: armsFat }}>
            Arms: {pastWorkouts.initFatigue.armsFatigue} --> {totalArmsFatigue}
          </div>
          <div className="column" style={{ backgroundColor: legsFat }}>
            Legs: {pastWorkouts.initFatigue.legsFatigue} --> {totalLegsFatigue}
          </div>
        </td>
      </tr>
    </>
  );
}

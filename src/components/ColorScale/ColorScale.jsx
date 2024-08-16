import "./ColorScale.css";

export default function ColorScale({ user, workout }) {
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

  return (
    <div>
      <table className="ColorScale">
        <tbody>
          <tr>
            <th style={{ backgroundColor: backgroundColorScale[0] }}>0-4</th>
            <th style={{ backgroundColor: backgroundColorScale[5] }}>5-9</th>
            <th style={{ backgroundColor: backgroundColorScale[10] }}>10-14</th>
            <th style={{ backgroundColor: backgroundColorScale[15] }}>15-19</th>
            <th style={{ backgroundColor: backgroundColorScale[20] }}>20-24</th>
            <th style={{ backgroundColor: backgroundColorScale[25] }}>25+</th>
            <th style={{ backgroundColor: "var(--fat-6)" }}>!!!</th>
          </tr>
          <tr>
            <td className="safe" colSpan="3">
              Safe!
            </td>
            <td className="rest" colSpan="2">
              Rest!
            </td>
            <td className="danger" colSpan="2">
              Danger!
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

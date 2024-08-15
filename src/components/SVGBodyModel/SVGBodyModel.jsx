import "./SVGBodyModel.css";

export default function SVGBodyModel({ user, workout }) {
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
    workout.initFatigue.torsoFatigue + workout.addedFatigue.torsoFatigue;
  const arms =
    workout.initFatigue.armsFatigue + workout.addedFatigue.armsFatigue;
  const legs =
    workout.initFatigue.legsFatigue + workout.addedFatigue.legsFatigue;

  const torsoFat = backgroundColorScale[torso] || "var(--fat-6)";
  const armsFat = backgroundColorScale[arms] || "var(--fat-6)";
  const legsFat = backgroundColorScale[legs] || "var(--fat-6)";

  return (
    <div className="SVGBodyModel">
      <div className="svg-ctr">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 850 850"
          width="400"
          height="300"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            fill="var(--col-3)"
            d="M230 71l2 1c1 4-1 17-3 21l-1 1c-1-4 1-19 2-23zm446 0l1 1c3 4-2 18-2 22h-2c-1-4 2-19 3-23zm-516 0l2 2 4 21-1 1-1-1c-3-2-4-13-5-17l1-6zm451 0h1l3 23-1 1-2-2c-2-6-4-16-1-22z"
          ></path>
          <g fill={armsFat}>
            <path d="M324 342l4 7 10 21 8 17h-10l-4-14-8-31zm-252 2c1 3-8 37-9 43l-10 1v-1l3-9 8-18 8-16zm45-149l4 35c1 22-10 43-25 58l-1 2h-1c9-20 13-42 17-63l6-32zm159 2c7 7 14 59 17 71l4 17-2-2c-10-9-16-19-20-31-4-16-3-27-1-43l2-12zm38 75l7 15c3 7 8 13 11 21 3 7 4 16 5 24l5 29c2 8 5 18 5 25v-1h-1c-4-16-13-30-20-45-6-12-14-34-15-47 0-7 3-13 3-21zm-207 8l-2 15-4 22c-5 17-17 33-25 50l-5 13-3 10h-1l-2-2 3-14 9-40c1-5 4-24 6-27l9-11 15-16zm183 2c4 4 19 21 21 26 3 5 7 19 9 25l14 55-1 2-1-1-10-17-11-21c-10-19-17-30-20-53-1-5-2-11-1-16z"></path>
            <path d="M280 197c19 16 27 27 30 52l4 23c-4 4-6 14-5 19l1 12-10-14-4-18c-3-16-5-33-9-49l-7-25zM58 390c2 0 4-1 6 1 3 1 4 7 5 10l1 9-1 17-1 18-2 4-2 1c-3-3 2-19-1-23l-1-1c-4 3-2 26-6 31h-2l-1-3c-1-8 3-19 2-26h-2c-3 4-6 23-8 29l-1 1h-2c-4-4 6-26 4-32l-2-1c-5 3-5 20-9 25l-3 1v-1c-1-6 5-25 7-32 1-3 2-5 0-8h-2c-3 2-5 7-7 10l-3-3 6-12c3-3 15-12 20-14l5-1zm279 0l4-1 4 1 3 1 4 1c9 3 13 11 19 18l7 9-1 2c-3-1-6-5-8-7s-4-4-7-4l-1 1c-1 2 0 5 1 6l6 12 5 13c1 1 2 3 1 5h-2c-4-2-10-15-12-20l-2-3-1 1-1 1 7 28v2l-2 1c-4-3-7-22-9-27 0-1 0-3-2-4l-2 2c-1 5 6 24 3 29h-1l-1-1c-3-6-4-24-7-27h-1l-1 1c-2 1 2 17 1 22l-2 1-1-1-2-4-2-17-4-20c0-5 0-11 2-15 1-4 2-5 5-6zM83 271l-1-1-1 3-15 30c-4 14-4 29-6 43l-2 18-2 10 9-21 8-17c4-9 6-23 7-33l3-32z"></path>
            <path d="M114 196l-14 14c-15 17-15 24-18 46-1 3-4 14-3 16v1h2l1-3 1 1 3 4-3 28 8-10c11-20 14-50 18-72l5-25z"></path>
            <g>
              <path d="M514 344l-8 44-8-1h-1l3-10 14-33zm262 2l3 6 11 26 4 9-10 2c-1-14-5-28-8-43zM562 194c3 5 4 17 5 23 0 12-7 40-13 51-5 8-11 15-17 21l-3 3c12-31 19-65 28-98zm164 0c5 7 12 40 15 50l5 19 5 14c2 4 5 9 6 14h-1l-1-2c-7-8-14-17-19-26-9-15-16-34-14-52l4-17zm-204 82h1c1 3 2 10 1 14 0 9-6 36-9 44-6 18-15 35-21 53l-1 1 4-20 4-34c1-8 2-17 5-25 3-11 11-23 16-33zm222 2l4 7c4 4 17 18 19 22s3 19 4 24l7 35 4 25h-1l-3-8-6-18c-6-12-13-23-18-35-7-17-9-34-10-52zm-195 1v1l-2 11-3 23c-6 19-17 38-26 56-3 6-6 13-10 18l5-26 7-35c1-6 1-14 4-19l8-9 17-20z"></path>
              <path d="M559 196v2c-4 15-24 98-34 105v-1l3-18c-3-4-3-8-3-13 1-13 4-36 10-47 4-9 16-21 24-28zm-63 194c4 0 7 0 11 2l2 10v9c0 7-2 13-3 19l-1 18-1 3h-1c-4-4 0-18-1-24l-1-1-2 2-2 7c-1 7-2 16-6 22h-1c-2-5 2-19 3-25l-1-5h-2c-2 3-3 11-4 15l-5 13-1 2h-2c-3-4 8-26 6-32l-1-1c-6 3-9 21-15 23h-1c-3-5 13-28 12-34l-1-2c-6-1-9 7-14 9l-2-1 1-3 6-7c8-10 14-17 27-19zm294 0c5-1 9 0 13 3 10 6 20 13 22 24l-1 3h-1l-4-5c-1-2-2-6-4-6l-2 1-1 3 4 12 5 19v7h-1l-3-2c-2-4-5-22-7-24h-3l-1 2c0 8 6 22 6 30l-3 1c-4-2-5-26-10-31-3 3-1 9-1 13 1 4 3 15 0 18-4-3-5-25-7-30l-2-2c-3 2 2 19-1 23h-1l-1-1-1-3-2-20-2-17c0-5 1-11 3-16l6-2zm-18-113h-1l-2-2c-2 15 2 48 7 63l12 28 10 23c-5-19-7-38-9-57l-4-22-8-24-5-9z"></path>
              <path d="M730 195l5 18c7 27 15 67 32 90-1-11-2-21-1-32l3 4 2 2h1l-4-9c-4-13-5-32-11-43-4-7-10-13-15-18-3-4-8-10-12-12z"></path>
            </g>
          </g>
          <path
            fill="var(--col-3)"
            d="M640 31c7 0 16 1 22 4 5 4 9 8 11 14a84 84 0 01-10 54l-2-2c-4-4-6-5-11-5-12 0-15-2-25 6-6-11-9-18-11-31-1-9-1-22 5-30 5-6 13-9 21-10zM191 32h10c8 1 16 3 21 10 8 9 5 23 4 34l-1 18c-9 7-13 17-25 21l-3 1c-5 1-10-1-14-4-15-12-16-23-18-40-1-10-2-22 5-30 5-7 13-9 21-10z"
          ></path>
          <g fill={legsFat}>
            <path d="M164 756h2c2 4-1 11 0 16l3 11c2 5 2 10 0 15-2 3-4 5-7 5l-6-1c-4-4-1-24-1-30v-14l9-2zm535 2h1c4 2 5 10 7 14 3 7 11 11 14 18v5c-1 2-3 3-5 3l-19 5 1-26 1-19zm-475-3c3 2 7 2 11 3 0 6 3 42 2 44l-4 2h-3c-3-1-6-3-7-6-2-3-4-6-4-9 0-5 4-10 5-15 0-6-2-13 0-19zm364 2h1l1 2 1 16 2 27-19-3c-3-1-6-1-8-3l-2-3c0-8 13-14 16-20 3-5 4-11 8-16zm19 0h2c2 6 6 30 5 36l-1 5-9 6-8-1v-45l11-1zm73-1c3 1 10 1 13 3 2 5 0 37-1 44l-4 1-3-1c-4 0-6-2-8-5l-1-1-1-2v-4c-1-6 3-27 5-35zm-536 0l8 1c1 12-1 24-1 35l1 10-2 2-4-3-2 3c-3 0-2-3-4-4l-1 1-2 2c0 1 0 1 0 0l-4-2v-1l-2 2-1 1-4-4-2 2-3-3 2-8 11-13c4-6 6-15 10-21zm99 0l4 1c4 3 6 11 8 15 3 7 16 16 15 23l-1 3-7 3-1-1h-2l-2 2-3-2-1 1-2 2h-2l-2-2h-1l-3 3-2-1c-2-6-3-38-3-45l5-2zm447-95l2 10c5 29 4 56 4 85l-6-2-9-1c2-13 2-26 2-39l1-26 6-27zM687 541l13 28c-4 8-7 15-9 23 0 4-1 15-3 18v-1c-3-12-8-25-15-36l14-32zm-86 0l4 10 9 23c-9 9-13 32-16 44-2-3-1-8-2-12-1-13-5-23-11-34l16-31zm-5 124l2 7c6 27 5 53 9 81h-7l-9 2c-1-19-1-41 1-61l4-29zm43-242c1 24-3 47-5 71-2 20-1 41-5 61-3 10-7 19-12 28 1-5 4-10 6-14 4-10 6-21 7-31 0-16-5-34-8-50l-10-47 1-1c12-1 19-7 26-17zm74-31c3 5 3 13 4 19a351 351 0 01-6 119l1-13c-2-20-7-42-17-60 1-9 3-17 6-25l8-23 4-17z"></path>
            <path d="M615 576v1c4 5 2 17 3 23 0 17 4 33 2 50-2 18-8 35-9 53v52l-2-8-4-52c-1-12-5-25-7-37-2-24 7-60 17-82zm-31-1l4 11c8 22 6 53 4 76-1 12-3 24-3 37l-1 34v17h-1v-2l-6-45c-3-18-8-38-8-56 0-24 5-48 11-72zm4-145c7 6 12 10 21 10l8 38c4 21 11 44 9 65-1 9-3 17-7 25l-3 6c-5-13-13-29-15-43-2-9-2-19-3-28-1-24-1-50-10-73zm109 3l-3 13-3 15c-2 15-2 29-2 43-1 10-1 21-3 31-3 12-12 29-17 41l-3-6c-4-11-6-21-6-32 0-12 3-24 5-36 4-21 9-41 12-62 8 0 14-1 20-7z"></path>
            <path d="M575 390l2 15 8 24 4 14 3 14c-6 13-18 56-15 68h1l5-29c2-12 6-23 9-34 2 14 2 29 3 44l4 32-12 25-3 7-1 1c-2-5-2-13-2-18l-2-16-7-29c-7-37-7-82 3-118zm76 32l2 4c5 8 13 12 22 14l-10 48c-4 15-7 30-8 46 0 16 3 34 11 48l3-5a121 121 0 0115 80l-5 25c-2 15-1 31-1 46l-3 25-1-1c1-24 1-47-4-71-3-14-8-27-9-42l1-18c2-11 5-22 3-34 0-6-3-11-5-16l-4-14c-3-18-3-35-4-53-1-26-6-55-3-82zm43 39c7 8 18 58 17 69 0 5-2 10-3 14-2 14-4 29-3 42 2 21 11 41 10 62-1 18-6 36-9 54l-6 45-1 6c0-20 1-40-1-59l-4-33c-3-26-3-51 3-76l6-15-6-13-9-20c4-16 4-33 4-49 0-9 0-19 2-27z"></path>
            <path d="M687 333l2 2c8 10 20 35 22 48v7c-2 14-7 35-18 43-5 4-11 5-18 4l-6-1c-10-5-15-13-20-23 6-28 21-58 38-80zm-87-1l6 7c11 16 21 34 28 52l6 22-3 7c-4 9-11 14-20 17-7 2-14 1-20-3-10-6-15-19-17-30-1-6-3-14-2-20 1-15 14-39 22-52zM238 539v1l8 16 10 16c1 6-7 27-9 33l-5 19v4l-1-3c-5-11-15-46-13-57 1-10 6-20 10-29zm-86 0v1c4 9 8 21 9 32 0 15-5 32-10 46-1 3-2 7-4 9v-2c-2-13-7-24-11-36-1-5-3-10-2-15 1-6 14-28 18-35zm91 97l1 8c4 21 3 43 2 65 0 14-1 29-3 43l-10 1h-5l3-36c2-26 4-56 12-81zm-91-179l-1 16-1 34v29c-2 7-9 18-13 24l-4 9h-1v-1l-1-30-2-11c-1-6 0-12 2-17 1-8 4-16 7-24l14-29zm-6 178l1 1q6 26 9 53l4 43 1 21-4 1-11-2c-5-37-7-80 0-117z"></path>
            <path d="M132 584v1l2 6c4 12 9 25 10 38 1 6-2 17-3 23a280 280 0 000 71l2 28-2 1-5-37c-2-16-7-31-9-47-5-28 1-56 5-84zm103-129l1 1 5 9c9 16 21 41 21 59l-2 16-2 26-1 4c-5-9-14-23-17-33-2-6 0-17-1-24l-2-30c0-6-3-23-2-28zm-80 8l6 13c7 19 19 50 17 70-2 11-6 22-11 33l-5 9c3-16 0-27-5-41-1-4-3-7-3-11v-23l1-50zm77 2l1 10 3 49v13l-4 9c-7 18-9 24-4 42l-5-8c-5-10-11-25-12-37-2-21 14-58 21-78zm26 115v1c2 2 3 13 4 16 4 22 6 45 3 67l-8 35-8 51-2 2v-1l1-23 2-52-2-26c-1-7-4-15-3-23 1-16 8-31 13-47z"></path>
            <path d="M208 547c2 1 4 12 5 15l8 20c3 5 6 9 7 14 4 10 5 26 13 35-3 8-4 17-6 26-5 29-7 58-9 87l-2 10c-1-20 1-40-1-60-2-17-8-35-9-51s6-31 6-46c0-13-7-25-10-36-2-5-1-10-2-14zm-77-167l6 19 14 52c-3 11-9 21-14 32a131 131 0 00-10 37c-3-16-4-32-5-48 0-25 1-50 6-74l3-18zm49 167l1 5c0 8-3 14-6 22l-5 19c-1 13 5 27 6 41 0 10-2 19-4 30l-5 30c-2 13-2 25-2 37l1 17-1 4h-1l-1-8c-2-38-5-76-15-112 8-13 10-26 15-40 1-4 5-8 7-12 5-11 8-22 10-33zm79-170v1l3 17a473 473 0 012 125l-3-16c-6-18-15-36-25-53l6-19c5-19 10-37 17-55zm-2-26l1 21-5 12-6 16-17 62c-8 25-19 48-21 74l-3-33-5-48c0-13-4-27-4-40l1-1h2c2 2 3 6 4 9 4 10 6 21 7 32 1 8 1 17 3 25 1-19-2-52-12-68l20-33 14-10 21-18zm-123 0l12 12 21 16 4 4 5 9 11 20c-11 19-15 48-13 70l2-20c1-12 3-24 7-36 1-3 3-10 7-12l2 1v13l-3 26-6 43c-1 13-1 27-3 40-2-16-6-31-11-45l-13-37-5-17-9-32-6-19-4-13 2-23z"></path>
          </g>
          <g fill={torsoFat}>
            <path d="M645 98c10 0 10 1 17 6 1 11 3 22 7 32 1 3 4 12 6 13 1-2-2-8-3-10-4-10-8-24-6-35h1l1 21 14 8 37 18h-31l-43-3V98zM642 151v2h-19l-2-1 21-1zm2 5v-2c0-2 0-2 2-3l21 1-22 1v24l-1-1v-20zm-4-58l3 1v49c-14 0-27 2-40 3h-36c13-5 25-12 37-18l16-8v-24h1-1 1v10c0 10-1 17-5 25l-4 10v2h1l4-7c6-13 7-23 8-37 6-3 8-6 15-6z"></path>
            <g>
              <path d="M569 212l4 7c4 9 11 21 21 24l1 15-18-11-4-16-4-19zm150 0c1 4-7 29-9 34l-18 12v-15c13-4 20-20 27-31z"></path>
              <path d="M723 192c1 3-2 9-3 11-4 10-16 33-26 36-10 4-28-1-38-6l-7-4c29 0 38-2 59-22 5-5 9-10 15-14v-1zm-157 0c4 2 16 16 21 21 15 14 32 17 53 16l-8 5c-9 4-18 6-28 7-6 0-12-1-17-5-8-8-21-32-21-44zm80 72l13 6 23 10v32c-12-5-24-10-37-13l1-35zm-4 0l1 35-36 13c-2-2-1-26-1-31l36-17zm67-14c0 4-4 12-5 17l-5 22c-1 14 3 27 5 40l2 18 3 20-4-10-10-18-9-13c-2-5-2-38-1-44 1-8 6-10 6-22l5-2 5-2 4-3 4-3z"></path>
              <path d="M645 230c15 9 27 13 45 13 0 10 0 21-4 30l-3 5-38-17v-31zm-67 20l17 10c1 9 4 11 7 18 2 5 1 42 0 46-2 6-6 10-9 15a159 159 0 00-13 29l1-18 5-36c2-9 3-18 2-27-1-12-7-23-10-36v-1zm64-20c2 4 1 25 1 31l-37 18-3-5c-6-9-6-21-7-31 18 0 32-3 46-13zM711 153c7-1 15-1 22 1s13 6 17 12c8 13 7 36 4 50l-5-6-13-13-9-8-7-10c-5-11-11-20-22-26h13zm-140 0h26c-4 1-7 1-10 3-8 4-15 15-19 23l-6 10-8 8-8 8-8 9c-3-7-6-14-6-22-1-10 3-22 10-29 8-9 18-10 29-10z"></path>
              <path d="M687 155l11 1c11 4 21 24 25 34-15 11-25 28-43 34-11 3-22 3-33 2v-34l1-36 39-1zm-92 1c15-2 31-1 46 0l1 70h-27c-20-4-28-16-42-29l-7-8 5-10 6-10c5-7 9-12 18-13zM645 302c13 3 25 8 37 13 0 6 1 10 4 16l-10 13c-15 23-21 41-29 66h-6c-3-24-23-62-39-80 3-5 4-9 4-15l36-13 1 96c4-17 3-41 3-58l-1-38z"></path>
              <g>
                <path d="M178 113c6 3 9 6 15 6v31h-6l-9-37zm37-4c1 7-7 32-9 41h-9v-30c8-2 13-5 18-11zM121 200c2 1 3 5 4 6 8 12 16 21 30 25l-3 4-5 2c-4 1-8-1-11-4l-8-8c-5-8-6-15-7-25zm152-3c0 6-2 18-5 23-3 6-14 16-20 17-4 1-6 0-9-1l-4-4c21-6 26-19 38-35zm-148 45c4 2 10 9 13 12 4 4 9 9 11 15 4 7 4 27 4 36-5-8-11-15-15-23-3-5-5-12-6-18l-7-22zm141-2c0 6-9 37-12 43-4 7-11 14-16 21l-1-10c1-8 2-19 6-26 4-9 16-21 23-28z"></path>
                <path d="M268 225c1 2 0 8-1 10-9 10-19 19-26 31l-1-2c-10-12-21-17-37-19h-6v-18h1c11 7 23 8 35 5l3 5c2 2 5 4 9 4 9 0 17-10 23-16zm-145-3l4 4c3 5 7 10 12 12 3 2 7 3 10 2 4-1 7-5 9-8 12 2 24 2 35-5v18h-6l-12 2c-11 3-18 10-24 20l-13-16-13-13-2-16zm14 63c3 2 5 6 7 10 3 4 7 9 9 14l1 12 2 24 1 12c2 7 7 12 10 18h-1c-11-8-22-17-31-27l1-26c0-12 2-25 1-37zm117 0l1 11 1 16 1 35c-8 10-20 18-30 25l-1 1c0-2 7-11 8-16l2-14 1-35c6-7 13-15 17-23z"></path>
                <path d="M188 248l5-1v38l-35 3h-2l-3-19 4-6c8-11 18-14 31-15zm-3 40h8v37h-36l-1-34c9-2 19-2 29-3zm12 0l38 2-1 35h-38l1-37zm0-41h1c11 2 24 4 33 12l9 9-4 16-1 4-19-2-19-1v-38zm-40 80h36v84l-3-1-30-53c-2-7-3-22-3-30zm39 0h38l-2 28c-2 8-15 26-20 34l-10 18c-1 1-3 4-5 4l-1-30v-54z"></path>
                <g>
                  <path d="M223 101c1 1-2 20-2 23 11 11 35 20 48 26h-13l-15 1-33-1 8-28 4-17 3-4zm-54 2l5 6c3 14 6 27 11 41-15 0-31 3-45 1h-16c12-7 38-16 47-27l-2-21zM124 153l21 1c-11 6-17 23-24 32l-12 11a119 119 0 00-17 19c-2-4-2-8-2-13-2-12-1-29 8-40 6-8 17-9 26-10zm132 0c10-1 21-2 30 3 8 4 14 11 17 19 3 10 2 26-2 36l-2 1-1-1-15-14-12-9c-9-11-12-27-25-35h10z"></path>
                  <path d="M181 152h12v65l-1 6c-2 4-8 6-12 7-13 2-28-1-38-8-10-8-16-19-22-29 8-10 12-23 20-33l7-5c6-2 26-3 34-3zm16 0h18c8 0 23 0 30 4l6 4 11 18 10 15-16 22-7 7c-10 7-24 10-36 8-6-1-12-3-16-8v-70z"></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

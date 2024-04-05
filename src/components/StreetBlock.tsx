import Lane from './Lane';
import TrafficLight from './TrafficLight';

const trafficStates = {
  allRed: {
    duration: 4000,
    next: "northGreen"
  },
  northGreen: {
    duration: 4000,
    next: "northSouthGreen"
  },
  northSouthGreen: {
    duration: 4000,
    next: "northSouthYellow"
  },
  northSouthYellow: {
    duration: 4000,
    next: "northSouthRed"
  },
  northSouthRed: {
    duration: 4000,
    next: "eastWestGreenArrow"
  },
  eastWestGreenArrow: {
    duration: 4000,
    next: "eastWestGreen"
  },
  eastWestGreen: {
    duration: 4000,
    next: "eastWestYellow"
  },
  eastWestYellow: {
    duration: 4000,
    next: "eastWestRed"
  },
  eastWestRed: {
    duration: 4000,
    next: "northSouthGreenArrow"
  },
  northSouthGreenArrow: {
    duration: 4000,
    next: "northSouthYellowArrow"
  },
  northSouthYellowArrow: {
    duration: 4000,
    next: "northSouthRedArrow"
  },
  northSouthRedArrow: {
    duration: 4000,
    next: "northGreen"
  },

}

interface Props {
    className: string;
    laneFlow: string;
    laneDirection?: string;
    trafficLightOrientation?: string;
}

const StreetBlock = ({className, laneFlow, laneDirection, trafficLightOrientation}: Props) => {
  return (
    <>
      { className === 'empty' ? 
        <TrafficLight trafficStates={trafficStates} orientation={trafficLightOrientation}/>
      : 
      <div className={"street-block " + className + " " + laneFlow}>
          <Lane trafficStates={trafficStates} laneFlow={laneFlow} carDirection="left" trafficLightOrientation={trafficLightOrientation} laneDirection={laneDirection}/>
          <Lane trafficStates={trafficStates} laneFlow={laneFlow} carDirection="straight" trafficLightOrientation={trafficLightOrientation} laneDirection={laneDirection}/>
          <Lane trafficStates={trafficStates} laneFlow={laneFlow} carDirection="straight" trafficLightOrientation={trafficLightOrientation} laneDirection={laneDirection}/>
          <Lane trafficStates={trafficStates} laneFlow={laneFlow} carDirection="right" trafficLightOrientation={trafficLightOrientation} laneDirection={laneDirection}/>
      </div>}
    </>
  )
}

export default StreetBlock
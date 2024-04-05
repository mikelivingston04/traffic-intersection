import { ArrowBackIcon, ArrowDownIcon, ArrowForwardIcon, ArrowUpIcon } from '@chakra-ui/icons';

interface Props {
    laneFlow?: string;
    laneDirection?: string;
    carDirection?: string;
    trafficLightOrientation?: string;
    trafficStates: TrafficStates;
}

const Lane = ({laneFlow, laneDirection, carDirection, trafficLightOrientation, trafficStates}: Props) => {
  return (
    <div className={"lane " + laneFlow + " " + laneDirection}>
      {
        carDirection === 'left' && trafficLightOrientation === 'north' 
        ? <ArrowBackIcon/> 
        : carDirection === 'straight' && trafficLightOrientation === 'north'
        ? <ArrowUpIcon/>
        : carDirection === 'right' && trafficLightOrientation === 'north'
        ? <ArrowForwardIcon/> 
        : carDirection === 'left' && trafficLightOrientation === 'east'
        ? <ArrowUpIcon/>
        : carDirection === 'straight' && trafficLightOrientation === 'east'
        ? <ArrowForwardIcon/>
        : carDirection === 'right' && trafficLightOrientation === 'east'
        ? <ArrowDownIcon/>
        : carDirection === 'left' && trafficLightOrientation === 'west'
        ? <ArrowUpIcon/>
        : carDirection === 'straight' && trafficLightOrientation === 'west'
        ? <ArrowBackIcon/>
        : carDirection === 'right' && trafficLightOrientation === 'west'
        ? <ArrowDownIcon/>
        : carDirection === 'left' && trafficLightOrientation === 'south'
        ? <ArrowBackIcon/>
        : carDirection === 'straight' && trafficLightOrientation === 'south'
        ? <ArrowDownIcon/>
        : carDirection === 'right' && trafficLightOrientation === 'south'
        ? <ArrowForwardIcon/> : ""
      }
    </div>
  )
}

export default Lane
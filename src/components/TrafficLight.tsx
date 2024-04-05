import { ArrowBackIcon, ArrowDownIcon, ArrowForwardIcon, ArrowUpIcon } from '@chakra-ui/icons'
import { Button } from '@chakra-ui/react';
import { useEffect, useState } from "react";

interface Props {
  trafficStates: TrafficStates;
  orientation?: string;
}

function handleWalkState(laneFlow: string) {
  //My idea here was to get the direction of which button was clicked (for pedestrians), either north/south
  //or east/west. Then integrate that into my trafficStates and turn them yellow. Then make the traffic green
  //for which ever direction was clicked. Then keep it that way for 10-15 seconds, then start the trafficStates over
  //again. 
}

const TrafficLight = ({ trafficStates, orientation }: Props) => {
  const [currentTrafficState, setCurrentTrafficState] = useState("allRed");
  const [walkState, setWalkState] = useState();

  useEffect(() => {

    const { duration, next } = trafficStates[currentTrafficState];

    const timerId = setTimeout(() => {
      setCurrentTrafficState(next);
    }, duration);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentTrafficState, trafficStates]);

  return (
    <div className={'traffic-block ' + orientation}>
      <div className={"traffic-light-container " + orientation}>
          <div className="traffic-light"
            style={{
              backgroundColor: (orientation) ? getBackgroundColor(currentTrafficState, "red", orientation) : "#555",
            }}
          />
          <div className="traffic-light"
            style={{
              backgroundColor: (orientation) ? getBackgroundColor(currentTrafficState, "yellow", orientation) : "#555"
            }}
          />
          <div className="traffic-light"
            style={{
              backgroundColor: (orientation) ? getBackgroundColor(currentTrafficState, "green", orientation) : "#555"
            }}
          />
          <div 
            className={"traffic-light"}
            style={{
              backgroundColor: (orientation) ? getBackgroundColor(currentTrafficState, "arrow", orientation) : "#555",
            }}>
            { orientation === 'north' ? <ArrowBackIcon color="black"/>
            : orientation === 'west' ? <ArrowDownIcon color="black"/>
            : orientation === 'south' ? <ArrowForwardIcon color="black"/>
            : <ArrowUpIcon color="black"/>
            }
          </div> 
        
      </div>
      <div>
        <Button colorScheme='blue' onClick={() => handleWalkState("north")}><ArrowUpIcon/></Button>
        <Button colorScheme='blue'><ArrowBackIcon/></Button>
      </div>
    </div>
  );
};

const getBackgroundColor = (currentTrafficState: string, lightbulb: string, orientation: string): string => {

  if (currentTrafficState === 'allRed') {
    if (lightbulb === 'red' || lightbulb === 'arrow') {
      return 'red';
    }
  } else if (currentTrafficState === 'northGreen') {
    if (orientation === 'north') {
      if (lightbulb === 'green' || lightbulb === 'arrow') {
        return 'green';
      }
    } else {
      if (lightbulb === 'red' || lightbulb === 'arrow') {
        return 'red';
      }
    }
  } else if (currentTrafficState === 'northSouthGreen') {
    if (orientation === 'north' || orientation === 'south') {
      if (lightbulb === 'green') {
        return 'green';
      } else if (lightbulb === 'arrow') {
        return 'orange';
      } 
    } else if (lightbulb === 'red' || lightbulb === 'arrow') {
      return 'red';
    }
  } else if (currentTrafficState === 'northSouthYellow') {
    if (orientation === 'north' || orientation === 'south') {
      if (lightbulb === 'yellow') {
        return 'yellow';
      } else if (lightbulb === 'arrow') {
        return 'yellow';
      }
    } else if (lightbulb === 'red' || lightbulb === 'arrow') {
      return 'red';
    }
  } else if (currentTrafficState === 'northSouthRed') {
    if (lightbulb === 'red' || lightbulb === 'arrow') {
      return 'red';
    }
  } else if (currentTrafficState === 'eastWestGreenArrow') {
    if (orientation === 'east' || orientation === 'west') {
      if (lightbulb === 'arrow') {
        return 'green';
      }
    } else if (lightbulb === 'red' || lightbulb === 'arrow') {
      return 'red';
    }
  } else if (currentTrafficState === 'eastWestGreen') {
    if (orientation === 'east' || orientation === 'west') {
      if (lightbulb === 'green') {
        return 'green';
      } else if (lightbulb === 'arrow') {
        return 'orange';
      }
    } else if (lightbulb === 'red' || lightbulb === 'arrow') {
      return 'red';
    }
  } else if (currentTrafficState === 'eastWestYellow') {
    if (orientation === 'east' || orientation === 'west') {
      if (lightbulb === 'yellow' || lightbulb === 'arrow') {
        return 'yellow';
      }
    } else if (lightbulb === 'red' || lightbulb === 'arrow') {
      return 'red';
    }
  } else if (currentTrafficState === 'eastWestRed') {
    if (lightbulb === 'red' || lightbulb === 'arrow') {
      return 'red';
    }
  } else if (currentTrafficState === 'northSouthGreenArrow') {
    if (orientation === 'north' || orientation === 'south') {
      if (lightbulb === 'arrow') {
        return 'green';
      }
    } else if (lightbulb === 'red' || lightbulb === 'arrow') {
      return 'red';
    }
  } else if (currentTrafficState === 'northSouthYellowArrow') {
    if (orientation === 'north' || orientation === 'south') {
      if (lightbulb === 'arrow') {
        return 'yellow';
      }
    } else if (lightbulb === 'red' || lightbulb === 'arrow') {
      return 'red';
    }
  } else if (currentTrafficState === 'northSouthRedArrow') {
    if (lightbulb === 'red' || lightbulb === 'arrow') {
      return 'red';
    }
  }

  return "#555";
}

export default TrafficLight;

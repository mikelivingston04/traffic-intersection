import StreetBlock from './StreetBlock'
import { Grid} from '@chakra-ui/react'

const Intersection = () => {
  return (
    <Grid className={"intersection"} templateColumns={"repeat(4, 200px)"} templateRows={"repeat(4, 200px)"} gap={0}>
        <StreetBlock className={"empty"} laneFlow='none' trafficLightOrientation='south'/>
        <StreetBlock className={"border-right border-bottom"} laneFlow='north-south' trafficLightOrientation='south' laneDirection='south'/>
        <StreetBlock className={"border-left border-bottom"} laneFlow='none'/>
        <StreetBlock className={"empty"} laneFlow='none' trafficLightOrientation='west'/>

        <StreetBlock className={"border-bottom border-right"} laneFlow='none'/>
        <StreetBlock className={"border-left border-top"} laneFlow='none'/>
        <StreetBlock className={"border-top border-right"} laneFlow='none'/>
        <StreetBlock className={"border-bottom border-left"} laneFlow='east-west' trafficLightOrientation='west' laneDirection='west'/>

        <StreetBlock className={"border-top border-right"} laneFlow='east-west' trafficLightOrientation='east' laneDirection='east'/>
        <StreetBlock className={"border-left border-bottom"} laneFlow='none'/>
        <StreetBlock className={"border-bottom border-right"} laneFlow='none'/>
        <StreetBlock className={"border-left border-top"} laneFlow='none'/>

        <StreetBlock className={"empty"} laneFlow='none' trafficLightOrientation='east'/>
        <StreetBlock className={"border-top border-right"} laneFlow='none'/>
        <StreetBlock className={"border-top border-left"} laneFlow='north-south' trafficLightOrientation='north' laneDirection='north'/>
        <StreetBlock className={"empty"} laneFlow='none' trafficLightOrientation='north'/>
    </Grid>
  )
}

export default Intersection
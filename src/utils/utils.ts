interface TrafficState {
    duration: number;
    next: string;
  }
  
  interface TrafficStates {
    [key: string]: TrafficState;
  }
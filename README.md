# Steps to build <br><br>

1. Navigate to folder <br>
2. Run `npm install` <br>
3. Run `npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion` <br>
4. Run `npm i @chakra-ui/icons` <br>
5. Run `npm run dev` <br>
6. Go to the localhost url given. (mine was `localhost:5173`) <br><br>

# My thought process <br><br>

I wanted to create a "board" or the intersection component to be able to use throughout the process. And to create that intersection with 16 blocks. 4 for the traffic lights, and 12 for the actual roads. Then each block of road would be made up of 4 lanes and depending on the position is where I drew the "roads." <br><br>

It felt best with the time allotment to create a predetermined "route" for the lights to follow. So I went with that and one that would demonstrate real life examples of lights and try to hit different use cases. <br><br>

My next steps were to create a "walk State" where if a button was clicked it would determine the direction (or flow, i.e north/south) and then it would interject into the "route" the traffic lights were following. Once interjected, it would allow for a certain amount of time for a pedestrian to cross. Then it would simply start the traffic lights route over again.<br><br>

Sensors and model cars sound like a fun challenge, but I did not get to it during this<br><br>

I toyed with the idea of doing a command line program. Something like "North light turns green. Car approaches from the east." But that almost sounded more difficult than just drawing a board which was fun for me anyway. <br><br>

Hopefully this gives some insight into my thought process. Let me know if you have any questions.<br><br>

# The Features<br><br>

Your program should support the following features (time permitting):<br><br>

**DONE** - Create a traffic signal whose lights change on a timer. <br>
- Model cars arriving at the intersection and traveling through while the light is green.<br>
**DONE** - Make the left-hand turn lights on opposite sides of the intersection turn green at the same time, letting cars safely turn left. Make sure the "straight" lights are red. You don't want any accidents!<br>
- Some traffic lights have sensors underneath the road to detect if there are cars waiting. Make your signal smart! For example, if there are no cars waiting, keep that light red. What if cars begin to arrive? How long do you keep the light red?<br>
**STARTED** - Add support for a "walk" button at each intersection. When the button is pressed, it should cause the intersection to become clear long enough for a person to walk through it.<br>
 
 

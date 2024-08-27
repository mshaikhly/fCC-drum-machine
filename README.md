# Drum Machine

This repository contains a Drum Machine built with React, Vite, Redux, and TypeScript. The application allows users to play different drum sounds by either clicking on drum pads or pressing corresponding keys on the keyboard. The app is styled with a personal touch and meets the functionality required by the project.

## Live Demo

You can view the live demo of the app [here](https://main--sensational-axolotl-63e8bc.netlify.app/).

## Features

- **Drum Pads:** The app includes 9 clickable drum pads, each associated with a specific key on the keyboard.
- **Keyboard Controls:** Drum pads can be triggered by pressing the corresponding keys (Q, W, E, A, S, D, Z, X, C).
- **Audio Playback:** Each drum pad triggers a unique audio clip when clicked or when the associated key is pressed.
- **Display:** When a drum pad is triggered, a string describing the associated audio clip is displayed.

## User Stories

The app fulfills the following user stories:

1. **User Story #1:** I should be able to see an outer container with a corresponding `id="drum-machine"` that contains all other elements.
2. **User Story #2:** Within `#drum-machine` I can see an element with a corresponding `id="display"`.
3. **User Story #3:** Within `#drum-machine` I can see 9 clickable drum pad elements, each with a class name of `drum-pad`, a unique `id` that describes the audio clip the drum pad will trigger, and inner text corresponding to one of the following keys: Q, W, E, A, S, D, Z, X, C.
4. **User Story #4:** Within each `.drum-pad`, there is an HTML5 `audio` element with a `src` attribute pointing to an audio clip, a class name of `clip`, and an `id` corresponding to the inner text of its parent `.drum-pad`.
5. **User Story #5:** When I click on a `.drum-pad` element, the audio clip contained in its child `audio` element is triggered.
6. **User Story #6:** When I press the trigger key associated with each `.drum-pad`, the audio clip contained in its child `audio` element is triggered.
7. **User Story #7:** When a `.drum-pad` is triggered, a string describing the associated audio clip is displayed as the inner text of the `#display` element.

## Audio Samples Used

- Heater 1
- Heater 2
- Heater 3
- Heater 4
- Clap
- Open-HH
- Kick-n'-Hat
- Kick
- Closed-HH

## Technologies Used

- **React**: For building the user interface.
- **HTML5 Audio**: For playing sound clips.

## How to Run the Project Locally

1. **Clone the repository:**

   ```bash
   git clone https://github.com/mshaikhly/fCC-drum-machine.git
   cd fCC-drum-machine
   
2. **Install the dependencies:**

   ```bash
   npm install

3. **Start the development server:**

   ```bash
   npm run dev

4. **Open the app in your browser:**

   Go to http://localhost:3000 to see the app in action.

## 💻 How It Works

- **App Structure**: The app is built with a modular structure using React components, allowing for better organization and scalability.
- **State Management with Redux**: Redux is used for managing the state of the drum machine, ensuring predictable state transitions and easier debugging.
- **TypeScript for Type Safety**: TypeScript adds type safety to the project, helping to catch potential errors during development.
- **Vite for Fast Development**: Vite provides a modern and fast development environment with instant feedback during coding.

## 📚 Additional Notes

- This project demonstrates my skills in building modern web applications using a React-based tech stack, with an emphasis on state management and type safety.
- Feel free to use this project as a reference or modify it for your own purposes. The modular design allows for easy customization.
- Contributions and feedback are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

## 🎨 Personal Touch

I added my own personal styling and features to enhance the user experience, including a custom theme and improved visual feedback on button presses. These enhancements make the app unique while still adhering to the core functionality required by the project.

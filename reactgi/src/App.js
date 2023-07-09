// VERY EASY // VERY EASY // VERY EASY // VERY EASY // VERY EASY // VERY EASY // VERY EASY 

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div>
//          <p>
//           Kevin Lam         
//         </p>
//          <p>
//           123-456-7890 
//         </p>
//          <p>
//           3/5/1997     
//         </p>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;

// EASY // EASY // EASY // EASY // EASY // EASY // EASY // EASY // EASY // EASY // EASY 

// import logo from './logo.svg';
// import './App.css';
// import React from 'react';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       itMe: {}
//     };
//   }

//   render() {
//     return (
//       <div className="App">
//         <header className="App-header"></header>
//         <img src={logo} className="App-logo" alt="logo" />
//           <div>
//             <p>Kevin Lam</p>
//             <p>123-456-7890</p>
//             <p>3/5/1997</p>
//           </div>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

// MEDIUM // MEDIUM // MEDIUM // MEDIUM // MEDIUM // MEDIUM // MEDIUM // MEDIUM // MEDIUM 

// import logo from './logo.svg';
// import './App.css';
// import React from 'react';

// class BasicInfo extends React.Component {
//   render() {
//     const { name, number, dob } = this.props.person;

//     return (
//       <div>
//         <p>Name: {name}</p>
//         <p>Number: {number}</p>
//         <p>Date of Birth: {dob}</p>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       itMe: {
//         name: 'Kevin Lam',
//         number: '123-456-7890',
//         dob: '3/5/1997'
//       }
//     };
//   }

//   render() {
//     const { itMe } = this.state;

//     return (
//       <div className="App">
//         <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//           <BasicInfo person={itMe} />
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

// HARD // HARD // HARD // HARD // HARD // HARD // HARD // HARD // HARD // HARD 

// import logo from './logo.svg';
// import './App.css';
// import React from 'react';

// class BasicInfo extends React.Component {
//   render() {
//     const { name, number, dob } = this.props.person;

//     return (
//       <div className="person-info">
//         <p>Name: {name}</p>
//         <p>Number: {number}</p>
//         <p>Date of Birth: {dob}</p>
//       </div>
      
//     );
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       itMultiplePeople: [
//         {
//           name: 'KEVIN LAM',
//           number: '123-456-7890',
//           dob: '3/5/1997'
//         },
//         {
//           name: 'OSIEL TORRES',
//           number: '987-654-3210',
//           dob: '5/24/2023'
//         },
//         {
//           name: 'JUSTIN MCNEIL',
//           number: '234-789-456',
//           dob: '1/23/1875'
//         }
//       ]
//     };
//   }

//   render() {
//     const { itMultiplePeople } = this.state;

//     return (
      
//       <div className="App">
//         <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//           {itMultiplePeople.map((itMultiplePeople, index) => (
//             <BasicInfo key={index} person={itMultiplePeople} />
//           ))}
//         </header>
//       </div>
//     );
//   }
// }

// export default App;

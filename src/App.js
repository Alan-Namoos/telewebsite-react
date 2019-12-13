import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TransferLogContextProvider from './contexts/TransferLogContext';
import BoxListContextProvider from './contexts/BoxListContext';
import BoxGridContainer from './components/boxGrid/BoxGridContainer';
// import BoxGridContextProvider from "./contexts/BoxGridContext";
import Home from './components/Home';
import Nav from './components/Nav';
import EDAdmissionLog from './components/EDAdmissionLog';
import RnAssignmentForm from './components/rnAssignmentSheet/RnAssignmentForm3';

function App() {
	return (
		<Router>
			<TransferLogContextProvider>
				<BoxListContextProvider>
					{/* <BoxGridContextProvider> */}
					<Nav />
					<Route exact path='/' component={Home} />
					<Route path='/ed-admission-log' component={EDAdmissionLog} />
					<Route path='/box-grid' component={BoxGridContainer} />
					<Route path='/rn-assignment' component={RnAssignmentForm} />
					{/* </BoxGridContextProvider> */}
				</BoxListContextProvider>
			</TransferLogContextProvider>
		</Router>
	);
}

export default App;

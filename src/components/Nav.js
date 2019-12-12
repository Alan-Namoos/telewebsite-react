import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { BoxListContext } from '../contexts/BoxListContext';

const Nav = () => {
	const { boxList } = useContext(BoxListContext);
	return (
		<nav className='nav justify-content-center mt-3 mb-5'>
			<NavLink exact to='/' className='nav-link'>
				Home
			</NavLink>
			<NavLink to='/ed-admission-log' className='nav-link'>
				ED Admission Log
			</NavLink>
			<NavLink to='/box-grid' className='nav-link'>
				Add Boxes ({boxList.length})
			</NavLink>

			<NavLink to='/rn-assignment' className='nav-link'>
				RN Assignment
			</NavLink>
		</nav>
	);
};

export default Nav;

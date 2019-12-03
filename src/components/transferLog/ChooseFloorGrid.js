import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';

const ChooseFloorGrid = ({ selectFloor, active }) => {
	const activeClass = 'grid-cell text-center bg-primary text-white';
	const defaultClass = 'grid-cell text-center';
	return (
		<Card className='mb-2'>
			<Card.Body>
				<Card.Title>Choose Floor:</Card.Title>

				<Container>
					<Row>
						<Col
							className={active === '3' ? activeClass : defaultClass}
							onClick={() => selectFloor('3')}
							data-floor='3'
						>
							3rd
						</Col>
						<Col
							className={active === '4' ? activeClass : defaultClass}
							onClick={() => selectFloor('4')}
						>
							4th
						</Col>
						<Col
							className={active === 'EAU' ? activeClass : defaultClass}
							onClick={() => selectFloor('EAU')}
						>
							4th EAU
						</Col>
						<Col
							className={active === '5' ? activeClass : defaultClass}
							onClick={() => selectFloor('5')}
						>
							5th
						</Col>
						<Col
							className={active === '6' ? activeClass : defaultClass}
							onClick={() => selectFloor('6')}
						>
							6th
						</Col>
						<Col
							className={active === '7' ? activeClass : defaultClass}
							onClick={() => selectFloor('7')}
						>
							7th
						</Col>
						<Col
							className={active === '8' ? activeClass : defaultClass}
							onClick={() => selectFloor('8')}
						>
							8th
						</Col>
						<Col
							className={active === '10' ? activeClass : defaultClass}
							onClick={() => selectFloor('10')}
						>
							10th
						</Col>
						<Col
							className={active === '11' ? activeClass : defaultClass}
							onClick={() => selectFloor('11')}
						>
							11th
						</Col>
					</Row>
				</Container>
			</Card.Body>
		</Card>
	);
};

export default ChooseFloorGrid;

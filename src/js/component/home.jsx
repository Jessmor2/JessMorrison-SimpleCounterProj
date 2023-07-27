import React from "react";
import PropTypes from "prop-types";
import SimpleCounter from "./simpleCounter";
import calculateSeconds from "../lib/libTime";

//create your first component
const Home = ({ counter }) => {

	return (
		<>
			<SimpleCounter 
				onesDigit={calculateSeconds(counter,1)}
				tensDigit={calculateSeconds(counter, 10)}
				hundredsDigit={calculateSeconds(counter, 100)}
				thousandsDigit={calculateSeconds(counter, 1000)}
				tenThousandsDigit={calculateSeconds(counter, 10000)}
				hundredThousandsDigit={calculateSeconds(counter, 100000)}	
			/>
		</>
	);
};

Home.propTypes = {
	counter: PropTypes.number
}

export default Home;

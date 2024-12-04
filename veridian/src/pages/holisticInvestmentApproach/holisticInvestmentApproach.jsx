import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import InvestmentApproachCard from '../../components/investmentApproachCard';
import FocusAndStrategyImage from '../../assets/focusAndStrategyImage.jpg';
import PortfolioImage from '../../assets/portfolioImage.jpg';

function HolisticInvestmentApproach() {
    const details = [
        {
            Image: FocusAndStrategyImage, // Provide the correct path for the image
            Header: 'Investment focus and strategy',
            ParaOne: 'Veridian focuses on companies across a number of different sectors, predominantly internet-based companies with long-term growth potential, with the aim of releasing the potential of businesses, sustainably improving operations and generating significant growth and profitability.',
            ParaTwo: 'Our investment strategy creates value at every stage of an investment. Utilizing the strengths of our industry experienced team, Veridian has crafted a streamlined process from identifying potential opportunities through due diligence and deal documentation and onward to integration and transformation. Veridian’s unique combination of people and processes is market-tested to generate and release significant value and growth.'
        },
        {
            Image: PortfolioImage,
            Header: 'Portfolio',
            ParaOne: 'The central investment of Veridian is in the Pragmatic Play group of companies headed by Tamaris (Gibraltar) Limited. Pragmatic Play is a world-leading game developer providing player-favourites to the most successful global brands in the iGaming industry.',
            ParaTwo: 'Powering up new possibilities of play through one single API, Pragmatic Play offers a multi-product portfolio of award-winning slots, live casino, bingo, virtual sports, sportsbook and more, available in all major regulated markets, languages and currencies. Driven by persistence to craft immersive experiences and responsible thrills, Pragmatic Play’s professional team consistently delivers best-in-class services to its partners worldwide with a dedication to creating games that players love time and time again.'
        },
        {
            Image: PortfolioImage,
            Header: 'Corporate social responsibility',
            ParaOne: 'Veridian supports responsible investing and evaluates environmental, social and governance issues in its investments. Veridian believes that responsible investing and return on investment go together, and consideration of ESG issues improves portfolio company performance and investment results.',
            ParaTwo: ''
        }
    ];

    return (
        <Box
            sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr', // Three equal columns
                gap: '20px', // Column and row gap
                width: '100%', // Ensure it takes full width
            }}
        >
            {details.map((detail, index) => (
                <InvestmentApproachCard
                    key={index}
                    InvestmentImage={detail.Image}
                    Header={detail.Header}
                    ParaOne={detail.ParaOne}
                    ParaTwo={detail.ParaTwo}
                />
            ))}
        </Box>
    );
}

export default HolisticInvestmentApproach;

import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

function InvestmentApproachCard({ InvestmentImage, Header, ParaOne = '', ParaTwo = '' }) {
    return (
        <Stack spacing={2} sx={{ textAlign: 'start', padding: '16px', border: '1px solid #e0e0e0', borderRadius: '8px' }}>
            {/* Image */}
            <Box
                component="img"
                src={InvestmentImage}
                alt="InvestmentImage"
                sx={{
                    width: '100%',
                    height: '200px', // Ensure uniform height for all images
                    objectFit: 'cover', // Ensures the image scales proportionally and fills the space
                    borderRadius: '8px',
                }}
            />

            {/* Header */}
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
                {Header}
            </Typography>

            {/* Paragraphs */}
            <Stack spacing={1}>
                <Typography sx={{ fontSize: '14px', lineHeight: '1.6' }}>
                    {ParaOne}
                </Typography>
                {ParaTwo && (
                    <Typography sx={{ fontSize: '14px', lineHeight: '1.6' }}>
                        {ParaTwo}
                    </Typography>
                )}
            </Stack>
        </Stack>
    );
}

export default InvestmentApproachCard;

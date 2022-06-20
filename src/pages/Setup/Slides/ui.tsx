import { Box, Typography } from '@mui/material';
import React from 'react';

import lightTheme from '../../../theme/lightTheme';
import ColorSelector from '../utilities/colorSelector';

const lightThemeUIConfig = {
    title: 'Light Theme',
    primary: {
        title: 'Primary Color',
        colors: [
            {
                id: 'primaryMain',
                title: 'Primary Main Color',
                value: lightTheme.palette.primary.main,
            },
            {
                id: 'primaryLight',
                title: 'Primary Light Color',
                value: lightTheme.palette.primary.light,
            },
            {
                id: 'primaryDark',
                title: 'Primary Dark Color',
                value: lightTheme.palette.primary.dark,
            },
        ],
    },
    secondary: {
        title: 'Secondary Color',
        colors: [
            {
                id: 'secondaryMain',
                title: 'Secondary Main Color',
                value: lightTheme.palette.secondary.main,
            },
            {
                id: 'secondaryLight',
                title: 'Secondary Light Color',
                value: lightTheme.palette.secondary.light,
            },
            {
                id: 'secondaryDark',
                title: 'Secondary Dark Color',
                value: lightTheme.palette.secondary.dark,
            },
        ],
    },
};

const UISlide = () => {
    return (
        <Box sx={{ padding: '20px', maxWidth: '500px', margin: 'auto', textAlign: 'center' }}>
            <Typography variant='h5'>Provide your Dester Instance details</Typography>
            {lightThemeUIConfig && lightThemeUIConfig.primary && lightThemeUIConfig.primary.colors && (
                <Box sx={{ padding: '20px' }}>
                    <Typography variant='body1'>{lightThemeUIConfig.primary.title}</Typography>
                    {lightThemeUIConfig.primary.colors.map((color: any) => (
                        <ColorSelector
                            key={color.id}
                            title={color.title}
                            defaultColor={color.value}
                        />
                    ))}
                </Box>
            )}
            {lightThemeUIConfig && lightThemeUIConfig.secondary && lightThemeUIConfig.secondary.colors && (
                <Box sx={{ padding: '20px' }}>
                    <Typography variant='body1'>{lightThemeUIConfig.secondary.title}</Typography>
                    {lightThemeUIConfig.secondary.colors.map((color: any) => (
                        <ColorSelector
                            key={color.id}
                            title={color.title}
                            defaultColor={color.value}
                        />
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default UISlide;
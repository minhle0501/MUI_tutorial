import * as React from "react";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import { Box, Typography } from "@mui/material";

const steps: string[] = ['Select a date', 'Enter name', 'Review your entry'];

const MuiStepper: React.FC = () => {
    const [activeStepCount, setActiveStepCount] = React.useState<number>(0);
    const [skip, setSkip] = React.useState<Set<number>>(new Set());

    const optionalStep = (step: number): boolean => {
        return step === 1;
    };

    const skipStep = (step: number): boolean => {
        return skip.has(step);
    };

    const handleStepNext = (): void => {
        let newSkipped = skip;
        if (skipStep(activeStepCount)) {
            newSkipped = new Set(newSkipped.values());
            newSkipped.delete(activeStepCount);
        }

        setActiveStepCount((prevActiveStep) => prevActiveStep + 1);
        setSkip(newSkipped);
    };

    const handleStepBack = (): void => {
        setActiveStepCount((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepSkip = (): void => {
        setActiveStepCount((prevActiveStep) => prevActiveStep + 1);
        setSkip((prevSkipped) => {
            const newSkipped = new Set(prevSkipped.values());
            newSkipped.add(activeStepCount);
            return newSkipped;
        });
    };

    const handleStepReset = (): void => {
        setActiveStepCount(0);
    };

    return (
        <center>
            <Box style={{ width: "50%" }}>
                <Stepper activeStep={activeStepCount}>
                    {steps.map((label, index) => {
                        const stepProps: { completed?: boolean } = {};
                        const labelProps: { optional?: React.ReactNode } = {};
                        if (optionalStep(index)) {
                            labelProps.optional = (
                                <Typography variant="body1">Optional</Typography>
                            );
                        }
                        if (skipStep(index)) {
                            stepProps.completed = false;
                        }
                        return (
                            <Step key={label} {...stepProps}>
                                <StepLabel {...labelProps}>
                                    {label}
                                </StepLabel>
                            </Step>
                        );
                    })}
                </Stepper>
                {activeStepCount === steps.length ? (
                    <Box>
                        <Typography variant="h3" style={{ marginTop: '16px', marginBottom: '8px' }}>
                            All done!
                        </Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 4 }}>
                            <Box sx={{ flex: '1 1 auto' }} />
                            <Button onClick={handleStepReset}>Reset</Button>
                        </Box>
                    </Box>
                ) : (
                    <Box>
                        <Typography variant="h3" style={{ marginTop: '8px', marginBottom: '4px' }}>Step
                            {activeStepCount + 1}</Typography>
                        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                            <Button
                                color="primary"
                                disabled={activeStepCount === 0}
                                onClick={handleStepBack}
                                sx={{ mr: 1 }}
                            >
                                Previous
                            </Button>
                            <Box sx={{ flex: '1 1 auto' }} />
                            {optionalStep(activeStepCount) && (
                                <Button color="primary"
                                    onClick={handleStepSkip}
                                    sx={{ mr: 1 }}>
                                    Skip
                                </Button>
                            )}

                            <Button onClick={handleStepNext}>
                                {activeStepCount === steps.length - 1 ?
                                    'Done' : 'Next'}
                            </Button>
                        </Box>
                    </Box>
                )}
            </Box>
        </center>
    );
}

export default MuiStepper;

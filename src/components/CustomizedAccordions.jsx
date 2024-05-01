import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderRadius: '0', // Quitamos el radio de borde predeterminado
  '&:not(:last-child)': {
    borderBottom: `1px solid ${theme.palette.divider}`,
    borderBottomLeftRadius: '0',
    borderBottomRightRadius: '0',
  },

  '&:not(:first-child)': {
    borderTop: `1px solid ${theme.palette.divider}`,
    borderTopLeftRadius: '0',
    borderTopRightRadius: '0',
  },

  '&:first-child': {
    borderTopLeftRadius: '8px',
    borderTopRightRadius: '8px',
  },

  '&:last-child': {
    borderBottomLeftRadius: '8px',
    borderBottomRightRadius: '8px',
    borderBottom: `1px solid ${theme.palette.divider}`,

  },

  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '2rem', color: '#ce0001' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, .05)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(4),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function CustomizedAccordions({arrayObjectsText}) {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
        {arrayObjectsText?.map((element, index) => (
        <Accordion key={index} expanded={expanded ===  `panel${index+1}`} onChange={handleChange(`panel${index+1}`)}>
        <AccordionSummary aria-controls={`panel${index+1}d-content`} id={`panel${index+1}d-header`}>
          <Typography 
          id="titleAccordeon"
          style={{
            fontSize: '30px',
             fontWeight:'600',
             fontFamily: 'monospace',
             textTransform: 'uppercase'
             }}>{element.title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography
          id="textAccordeon"
          style={{
            fontSize: '20px',
             fontWeight:'500',
             fontFamily: 'monospace',
             }}
          >
            {element.text}
          </Typography>
        </AccordionDetails>
      </Accordion>
    ))}
    </>
  );
}
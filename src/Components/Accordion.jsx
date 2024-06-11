import * as React from 'react';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionSummary from '@mui/joy/AccordionSummary';
import { MdErrorOutline } from "react-icons/md";
import Done from '../Assets/success.svg'

export default function AccordionBasic() {
  return (
    <AccordionGroup color="neutral"
    variant="outlined" sx={{ maxWidth: 700 , minWidth: 500 ,borderRadius: '15px', fontFamily: "Montserrat", backgroundColor: '#FFFFFF'}}>
      <Accordion>
        
      <AccordionSummary><div className='acc_container' style={{display: 'flex', alignItems: 'center'}}><MdErrorOutline style={{color: 'red', fontSize: 22, marginRight: '5px'}}/>Bullets</div></AccordionSummary>
      
        <AccordionDetails sx={{fontSize: '13px', marginLeft:'15px', marginBottom: '8px'}}>
        We could not detect any Bullets. Use standard bullets to explain different sections of your resume. In case you have used the bullets.Its not readable by ATS.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        
      <AccordionSummary><div className='acc_container' style={{display: 'flex', alignItems: 'center'}}><MdErrorOutline style={{color: 'red', fontSize: 22, marginRight: '5px'}}/>Bullets</div></AccordionSummary>
      
        <AccordionDetails sx={{fontSize: '13px', marginLeft:'15px', marginBottom: '8px'}}>
        We could not detect any Bullets. Use standard bullets to explain different sections of your resume. In case you have used the bullets.Its not readable by ATS.
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary><div className='acc_container' style={{display: 'flex', alignItems: 'center'}}><img src={Done} alt='Success' style={{marginRight: '5px', height: 'auto', width: '22px'}}/>Dates</div></AccordionSummary>
        <AccordionDetails sx={{fontSize: '13px', marginLeft:'15px', marginBottom: '8px'}}>
        We could not detect any Bullets. Use standard bullets to explain different sections of your resume. In case you have used the bullets.Its not readable by ATS.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        
      <AccordionSummary><div className='acc_container' style={{display: 'flex', alignItems: 'center'}}><MdErrorOutline style={{color: 'red', fontSize: 22, marginRight: '5px'}}/>Bullets</div></AccordionSummary>
      
        <AccordionDetails sx={{fontSize: '13px', marginLeft:'15px', marginBottom: '8px'}}>
        We could not detect any Bullets. Use standard bullets to explain different sections of your resume. In case you have used the bullets.Its not readable by ATS.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        
      <AccordionSummary><div className='acc_container' style={{display: 'flex', alignItems: 'center'}}><MdErrorOutline style={{color: 'red', fontSize: 22, marginRight: '5px'}}/>Bullets</div></AccordionSummary>
      
        <AccordionDetails sx={{fontSize: '13px', marginLeft:'15px', marginBottom: '8px'}}>
        We could not detect any Bullets. Use standard bullets to explain different sections of your resume. In case you have used the bullets.Its not readable by ATS.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        
      <AccordionSummary><div className='acc_container' style={{display: 'flex', alignItems: 'center'}}><MdErrorOutline style={{color: 'red', fontSize: 22, marginRight: '5px'}}/>Bullets</div></AccordionSummary>
      
        <AccordionDetails sx={{fontSize: '13px', marginLeft:'15px'}}>
        We could not detect any Bullets. Use standard bullets to explain different sections of your resume. In case you have used the bullets.Its not readable by ATS.
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>
  );
}
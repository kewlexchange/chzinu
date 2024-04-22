import React from 'react';
import { StyledPageLine, StyledTokenomicsSection } from '../styledComponents/Containers';
import TokenomicCard from '../TokenomicCard';
import TokenomicDog from '../TokenomicDog';
import LineTextBanner from '../LineTextBanner';
import { PieChart, pieArcLabelClasses  } from '@mui/x-charts/PieChart';
import { positions } from '@mui/system';

const TokenomicsSection = () => {
    return (
        <StyledTokenomicsSection id="tokenomics">
            <LineTextBanner />
            <div className='tokenomics-pie-container'>
                <h2>TOKENOMICS</h2>
                <div className='pie-container'>
                    <PieChart
                        series={[
                            
                            {
                                data: [
                                    { id: 0, value: 4000000000, label: 'Locked' },
                                    { id: 1, value: 1863000000, label: 'Token Sale' },
                                    { id: 2, value: 100000000, label: 'Team' },
                                    { id: 3, value: 1251337510, label: 'Treasury' },
                                    { id: 4, value: 2333333333, label: 'Burn' },
                                    { id: 5, value: 2552329157, label: 'Remaining Tokens' },
                                ],
                                
                                arcLabel: (item) => `${item.value.toLocaleString()}`,
                                arcLabelMinAngle: 45,
                                innerRadius: 38,
                                outerRadius: 200,
                                paddingAngle: 2,
                                cornerRadius: 5,
                                startAngle: -360,
                                endAngle: 360,
                                highlightScope: { faded: 'global', highlighted: 'item' },
                                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                // cx: 150,
                                // cy: 150,
                            },
                        ]}
                        width={800}
                        height={500}
                        sx={{
                            [`& .${pieArcLabelClasses.root}`]: {
                              fill: 'white',
                              fontWeight: 'bold',
                              fontFamily: 'monospace',
                              fontSize:'14px',
                            },
                          }}
                    />
                </div>
            </div>           
            <TokenomicDog/>
            {/* <div className='tokenomics-cards-container'>
                <TokenomicCard
                    title={"Token supply"}
                    text={"We have an initial supply of 10,000,000,000 tokens! "}
                    text2={"With 99% of the funds going straight into liquidity on KEWL Swap, we’re making sure $ChzInu trades smoothly."}
                    buttonText={"SEE MORE"}
                    buttonFunction={() => console.log('hola')}
                    cardNumber={'1'}
                />
                <TokenomicCard
                    title={"Safe contract"}
                    text={"The contract has no malicious functions. Has been audited for professional a team."}
                    buttonText={"SEE MORE"}
                    buttonFunction={() => console.log('hola')}
                />
                <TokenomicCard
                    title={"Safe contract"}
                    text={"The contract has no malicious functions. Has been audited for professional a team."}
                    buttonText={"SEE MORE"}
                    buttonFunction={() => console.log('hola')}
                    cardNumber='3'
                />
                <TokenomicDog/>
            </div> */}

        </StyledTokenomicsSection>
    );
}

export default TokenomicsSection;

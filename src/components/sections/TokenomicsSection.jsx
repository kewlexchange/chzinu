import React, { useEffect, useState } from 'react';
import { StyledPageLine, StyledTokenomicsSection } from '../styledComponents/Containers';
import { PieChart, pieArcLabelClasses  } from '@mui/x-charts/PieChart';

const TokenomicsSection = () => {
    
    const [windowDimensions, setWindowDimensions] = useState({
        width: "900",
        height: window.innerHeight,
      });
    
    const pietexts = {
        "Treasury": "For future: Liquidity, campaigns, marketing, listings",
        "Remaining tokens": "Liquidity, airdrops, giveaways..."
    }

    useEffect(() => {
        const handleResize = () => {
            const container = document.getElementById('pieContainer')
            console.log(container);
          setWindowDimensions({
            width: container.clientWidth,
            height: container.clientHeight,
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
        handleResize()
      }, []);


    return (
        <StyledTokenomicsSection id="tokenomics" >
            {/* <LineTextBanner /> */}
            <img src='./dog-tokenomics3.png'/>

            <div className='tokenomics-pie-container'>
                <div className='pie-container' id='pieContainer'>
                <h2>WOOF-NOMICS</h2>
                    <PieChart
                        series={[
                            
                            {
                                data: [
                                    { id: 0, value: 4000000000, label: 'Locked' },
                                    { id: 1, value: 1863000000, label: 'Token Sale' },
                                    { id: 2, value: 100000000, label: 'Team' },
                                    { id: 3, value: 1251337510, label: 'Treasury' },
                                    { id: 4, value: 233333333, label: 'Burn' },
                                    { id: 5, value: 2552329157, label: 'Remaining tokens' },
                                ],
                                // arcLabel: (item) => `${item.value.toLocaleString()}`,
                                arcLabel: (item) => `${item.value.toLocaleString()}`,

                                valueFormatter: (v, { dataIndex }) => {
                                    return `${v.value.toLocaleString()} ${pietexts[v.label] ? '- ' + pietexts[v.label] : ''}`;
                                  },
                                arcLabelMinAngle: 45,
                                innerRadius: 38,
                                outerRadius: 200,
                                paddingAngle: 2,
                                cornerRadius: 5,
                                // startAngle: -360,
                                // endAngle: 360,
                                highlightScope: { faded: 'global', highlighted: 'item' },
                                faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                            },
                        ]}
                        width={windowDimensions.width}
                        height={windowDimensions.height * 0.8}
                        sx={{
                            [`& .${pieArcLabelClasses.root}`]: {
                              fill: 'white',
                              fontWeight: 'bold',
                              fontFamily: 'monospace',
                              fontSize:'14px',
                              zIndex: '999999',
                              color: 'white'
                            },
                          }}
                    />
                </div>
            </div>           
        </StyledTokenomicsSection>
    );
}

export default TokenomicsSection;

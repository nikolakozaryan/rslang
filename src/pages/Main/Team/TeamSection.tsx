import React from 'react';
import Section from '../../../components/Section/Section';
import CardTeam from '../../../components/CardTeam/CardTeam';
import Card from '../../../components/Card/Card';
import DEVELOPERS from '../../../common/constants/developersConst';

const TeamSection: React.FC = () => {
    const header = 'О команде ';
    return (
        <Section header={header}>
            {DEVELOPERS.map((member, index) => (
                <Card key={index} type="team">
                    <CardTeam member={member} />
                </Card>
            ))}
        </Section>
    );
};
export default TeamSection;

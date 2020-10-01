import React from 'react';
import PropTypes from 'prop-types';
import {
    randomColor,
    Container,
    Title,
    List,
    ListItem,
    Label,
    Percentage,
} from './styles';

function Statistics({ title, stats }) {
    return (
        <Container>
            {title && <Title>{title}</Title>}
            <List>
                {stats.map(element => (
                    <ListItem
                        color={randomColor()}
                        countItem={stats.length}
                        key={element.id}
                    >
                        <Label>{element.label}</Label>
                        <Percentage>{element.percentage}%</Percentage>
                    </ListItem>
                ))}
            </List>
        </Container>
    );
}

Statistics.defaultProps = {
    title: '',
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ),
};

export default Statistics;

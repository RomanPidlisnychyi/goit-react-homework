import React from 'react';
import {
    Section,
    Container,
    Description,
    Img,
    Name,
    Tag,
    StatsList,
    StatsListItem,
    Label,
    Quantity,
} from './styles.js';
import PropTypes from 'prop-types';

function Profile({ user }) {
    const { name, tag, location, avatar, stats } = user;
    const { followers, views, likes } = stats;

    return (
        <Section>
            <Container>
                <Description>
                    <Img src={avatar} alt="user avatar" />
                    <Name>{name}</Name>
                    <Tag>{tag}</Tag>
                    <Tag>{location}</Tag>
                </Description>

                <StatsList>
                    <StatsListItem>
                        <Label>Followers</Label>
                        <Quantity>{followers}</Quantity>
                    </StatsListItem>
                    <StatsListItem>
                        <Label>Views</Label>
                        <Quantity>{views}</Quantity>
                    </StatsListItem>
                    <StatsListItem>
                        <Label>Likes</Label>
                        <Quantity>{likes}</Quantity>
                    </StatsListItem>
                </StatsList>
            </Container>
        </Section>
    );
}

Profile.propTypes = {
    user: PropTypes.exact({
        name: PropTypes.string.isRequired,
        tag: PropTypes.string,
        location: PropTypes.string,
        avatar: PropTypes.string,
        stats: PropTypes.exact({
            followers: PropTypes.number,
            views: PropTypes.number,
            likes: PropTypes.number,
        }),
    }).isRequired,
};

export default Profile;

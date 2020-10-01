import React, { Component } from 'react';
import Layout from './Layout/Layout';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';

export default class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    updateStatistics = statisticName => {
        this.setState(state => {
            return {
                [statisticName]: (state[statisticName] += 1),
            };
        });
    };

    countTotalFeedback = () => {
        return Object.values(this.state).reduce((acc, e) => {
            acc += e;
            return acc;
        }, 0);
    };

    countPositiveFeedbackPercentage = () => {
        return this.state.good !== 0
            ? Math.trunc((this.state.good / this.countTotalFeedback()) * 100)
            : this.state.good;
    };

    render() {
        const {
            state,
            updateStatistics,
            countTotalFeedback,
            countPositiveFeedbackPercentage,
        } = this;
        const { good, neutral, bad } = state;
        const total = countTotalFeedback();
        const positiveFeedback = countPositiveFeedbackPercentage();
        return (
            <Layout>
                <Section title="Please leave feedback">
                    <FeedbackOptions onLeaveFeedback={updateStatistics} />
                </Section>
                <Section title="Statistics">
                    {positiveFeedback !== 0 ? (
                        <Statistics
                            good={good}
                            neutral={neutral}
                            bad={bad}
                            total={total}
                            positivePercentage={positiveFeedback}
                        />
                    ) : (
                        <Notification message="No feedback given" />
                    )}
                </Section>
            </Layout>
        );
    }
}

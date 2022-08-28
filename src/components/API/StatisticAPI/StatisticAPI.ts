import SERVER from '../../../common/constants/serverConst';
import Statistic from './Statistic';
import IStatistic from './StatisticInterface';

const UserStatistic: IStatistic = {
    createStatistic: (
        userId: string,
        token: string,
        learnedWords: string,
        testFieldString?: string,
        testFieldBoolean?: boolean
    ) => ({
        userId,
        token,
        body: {
            learnedWords,
            optional: {
                testFieldString,
                testFieldBoolean,
            },
        },
    }),
    updateUserStatistic: async (object: Statistic) => {
        const rawResponse = await fetch(`${SERVER}/users/${object.userId}/statistics`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${object.token}`,
            },
            body: JSON.stringify(object.body),
        });
        const content = await rawResponse.json();
        return content;
    },
    getStatistic: async (id: string, token: string) => {
        const rawResponse = await fetch(`${SERVER}/users/${id}/statistics`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        const content = await rawResponse.json();

        return content;
    },
};

export default UserStatistic;

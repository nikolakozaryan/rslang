import SERVER from '../../../common/constants/serverConst';
import Statistic from './Statistic';
import IStatistic from './StatisticInterface';

const UserStatistic: IStatistic = {
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
        console.log(object);
        const content = await rawResponse.json();
        console.log(content, 'cont');
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

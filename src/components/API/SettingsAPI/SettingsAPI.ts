import SERVER from '../../../common/constants/serverConst';
import Settings from './Settings';
import ISettings from './SettingsInterface';

const UserSettings: ISettings = {
    updateUserSettings: async (object: Settings) => {
        const rawResponse = await fetch(`${SERVER}/users/${object.userId}/settings`, {
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
    getSettings: async (id: string, token: string) => {
        const rawResponse = await fetch(`${SERVER}/users/${id}/settings`, {
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

export default UserSettings;

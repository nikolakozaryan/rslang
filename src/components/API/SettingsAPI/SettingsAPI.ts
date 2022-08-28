import SERVER from '../../../common/constants/serverConst';
import Settings from './Settings';
import ISettings from './SettingsInterface';

const UserSettings: ISettings = {
    createSettings: (
        userId: string,
        token: string,
        wordsPerDay: string,
        testFieldString?: string,
        testFieldBoolean?: boolean
    ) => ({
        userId,
        token,
        body: {
            wordsPerDay,
            optional: {
                testFieldString,
                testFieldBoolean,
            },
        },
    }),
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
        const content = await rawResponse.json();
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

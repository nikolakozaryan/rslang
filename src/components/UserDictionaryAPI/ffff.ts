import UserDictionary from './UserDictionaryAPI';

const f = async () => {
    // const answer = await UserDictionary.createUser({
    //     name: 'yasha',
    //     email: 'yasha@mail.com',
    //     password: '12345678',
    // });
    // console.log('ans', answer);
    const sign = await UserDictionary.signInUser({
        email: 'yasha@mail.com',
        password: '12345678',
    });
    console.log('ans', sign);
    const result: string = sign.userId;
    console.log(result, sign.token);
    const user = await UserDictionary.getUser(result, sign.token);
    console.log(user);
    const updtsettings = await UserDictionary.updateUserSettings({
        userId: result,
        token: sign.token,
        body: {
            wordsPerDay: 5,
            optional: {},
        },
    });
    console.log(updtsettings);
    const settings = await UserDictionary.getSettings(result, sign.token);
    console.log(settings);
    // const updatestat = await UserDictionary.updateUserStatistic({
    //     userId: result,
    //     token: sign.token,
    //     body: {
    //         learnedWords: 0,
    //         optional: {},
    //     },
    // });
    // console.log('yes', updatestat);
    // const statistic = await UserDictionary.getStatistic(result, sign.token);
    // console.log(statistic);
    // const aggreg = await UserDictionary.getAggregatedUserWords(result, sign.token);
    // console.log(aggreg);

    // const newword = await UserDictionary.createUserWord({
    //     userId: result,
    //     wordId: '5e9f5ee35eb9e72bc21af716',
    //     word: { difficulty: 'weak', optional: { testFieldString: 'test', testFieldBoolean: true } },
    //     token: sign.token,
    // });
    // console.log(newword);
    // const deleteword = await UserDictionary.deleteUserWord({
    //     userId: result,
    //     wordId: '5e9f5ee35eb9e72bc21af716',
    //     token: sign.token,
    // });
    // // console.log(deleteword);
    // const updateword = await UserDictionary.updateUserWord({
    //     userId: result,
    //     wordId: '5e9f5ee35eb9e72bc21af716',
    //     word: { difficulty: 'strong', optional: { testFieldString: 'test', testFieldBoolean: true } },
    //     token: sign.token,
    // });
    // console.log(updateword);
    // const idword = await UserDictionary.getUserWordByID({
    //     userId: result,
    //     wordId: '5e9f5ee35eb9e72bc21af716',
    //     token: sign.token,
    // });
    // console.log('yes', idword);
    // const newtokens = await UserDictionary.getNewUserToken(result, sign.token);
    // console.log(newtokens);
    // const deletes = await UserDictionary.deleteUser(result, sign.token);
    // console.log('de', deletes);
    // const newuser = await UserDictionary.updateUser(result, sign.token, {
    //     email: 'yasha1@mail.com',
    //     password: '12345678',
    // });
    // console.log(newuser);
};

export default f;

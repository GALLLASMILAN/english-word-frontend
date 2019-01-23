import Article from './article';
import Word from './word';
import User from './user';

const models = {
    article: Article,
    word: Word,
    user: User
};

export default function build(axios, modelName, isDev) {
    if(modelName in models) {
        return new models[modelName](axios, isDev);
    }
    return undefined;
}
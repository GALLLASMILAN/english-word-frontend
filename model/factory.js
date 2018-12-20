import Article from './article';
import Word from './word';

const models = {
    article: Article,
    word: Word
};

export default function build(axios, modelName, isDev) {
    if(modelName in models) {
        return new models[modelName](axios, isDev);
    }
    return undefined;
}